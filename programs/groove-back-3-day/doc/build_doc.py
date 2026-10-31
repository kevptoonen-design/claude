import sys
from docx import Document
from docx.shared import Pt, RGBColor, Inches, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

BLUE=RGBColor(0x20,0x50,0xF6); WHITE=RGBColor(255,255,255); INK=RGBColor(0x33,0x3A,0x4D)
LIGHT="E8EDFF"; BLUEHEX="2050F6"
doc=Document()
s=doc.sections[0]; s.page_width=Inches(8.27); s.page_height=Inches(11.69)
for m in ("left_margin","right_margin"): setattr(s,m,Inches(0.7))
s.top_margin=Inches(0.6); s.bottom_margin=Inches(0.6)
st=doc.styles["Normal"]; st.font.name="Arial"; st.font.size=Pt(11)
st.element.rPr.rFonts.set(qn("w:eastAsia"),"Arial")
st.paragraph_format.space_after=Pt(0)

def widths(table,ws):
    table.autofit=False
    tblPr=table._tbl.tblPr
    lay=OxmlElement("w:tblLayout"); lay.set(qn("w:type"),"fixed"); tblPr.append(lay)
    grid=table._tbl.tblGrid
    for gc,w in zip(grid.findall(qn("w:gridCol")),ws): gc.set(qn("w:w"),str(int(w*1440)))
    for col,w in zip(table.columns,ws): col.width=Inches(w)
    for row in table.rows:
        for c,w in zip(row.cells,ws): c.width=Inches(w)

def shade(cell,hexc):
    tcPr=cell._tc.get_or_add_tcPr(); sh=OxmlElement("w:shd")
    sh.set(qn("w:val"),"clear"); sh.set(qn("w:color"),"auto"); sh.set(qn("w:fill"),hexc); tcPr.append(sh)
def borders(table,color=BLUEHEX,sz=8,inside=True):
    tblPr=table._tbl.tblPr; b=OxmlElement("w:tblBorders")
    for e in ["top","left","bottom","right"]+(["insideH","insideV"] if inside else []):
        el=OxmlElement(f"w:{e}"); el.set(qn("w:val"),"single"); el.set(qn("w:sz"),str(sz)); el.set(qn("w:color"),color); b.append(el)
    if not inside:
        for e in ["insideH","insideV"]:
            el=OxmlElement(f"w:{e}"); el.set(qn("w:val"),"nil"); b.append(el)
    tblPr.append(b)
def pad(cell,top=80,bottom=80,left=120,right=120):
    tcPr=cell._tc.get_or_add_tcPr(); m=OxmlElement("w:tcMar")
    for k,v in dict(top=top,bottom=bottom,left=left,right=right).items():
        el=OxmlElement(f"w:{k}"); el.set(qn("w:w"),str(v)); el.set(qn("w:type"),"dxa"); m.append(el)
    tcPr.append(m)
def run(p,text,size=11,bold=False,color=BLUE,italic=False):
    r=p.add_run(text); r.font.size=Pt(size); r.bold=bold; r.italic=italic; r.font.color.rgb=color; r.font.name="Arial"; return r
def para(text="",size=11,bold=False,color=BLUE,after=6,before=0,align=None):
    p=doc.add_paragraph(); p.paragraph_format.space_after=Pt(after); p.paragraph_format.space_before=Pt(before)
    if align: p.alignment=align
    if text: run(p,text,size,bold,color)
    return p
def banner(day,title,sub):
    t=doc.add_table(rows=1,cols=1); t.alignment=WD_TABLE_ALIGNMENT.CENTER; borders(t,BLUEHEX,4)
    c=t.cell(0,0); shade(c,BLUEHEX); pad(c,240,240,300,300); c.width=Inches(6.87); widths(t,[6.87])
    p=c.paragraphs[0]; run(p,day+"   ·   WEEK 1",10,True,WHITE)
    p=c.add_paragraph(); p.paragraph_format.space_before=Pt(4); run(p,title,28,True,WHITE)
    p=c.add_paragraph(); p.paragraph_format.space_before=Pt(4); run(p,sub,12,True,WHITE)
    para(after=10)

def callout(label,text):
    t=doc.add_table(rows=1,cols=1); borders(t,BLUEHEX,12)
    c=t.cell(0,0); shade(c,LIGHT); pad(c,140,140,220,220); c.width=Inches(6.87); widths(t,[6.87])
    p=c.paragraphs[0]; run(p,label+"  ",12.5,True); run(p,text,12.5,False,INK)
    para(after=10)

def strength_table(rows):
    t=doc.add_table(rows=1,cols=6); borders(t,"C9D4FF",6); t.alignment=WD_TABLE_ALIGNMENT.CENTER
    hdr=["STEP","EXERCISE","SETS x REPS","REST","WEIGHT","DONE"]
    for i,h in enumerate(hdr):
        c=t.rows[0].cells[i]; shade(c,BLUEHEX); pad(c,100,100,100,100); c.vertical_alignment=WD_CELL_VERTICAL_ALIGNMENT.CENTER
        p=c.paragraphs[0]; run(p,h,9,True,WHITE)
        if i in (0,5): p.alignment=WD_ALIGN_PARAGRAPH.CENTER
    for n,(step,name,cue,sr,rest) in enumerate(rows):
        cells=t.add_row().cells
        for i,c in enumerate(cells):
            pad(c,230,230,110,110); c.vertical_alignment=WD_CELL_VERTICAL_ALIGNMENT.CENTER
            if n%2: shade(c,"F5F7FF")
        p=cells[0].paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER; run(p,step,18,True)
        p=cells[1].paragraphs[0]; run(p,name,14,True)
        if cue:
            p=cells[1].add_paragraph(); p.paragraph_format.space_before=Pt(3); run(p,cue,11,False,INK)
        run(cells[2].paragraphs[0],sr,13,True)
        run(cells[3].paragraphs[0],rest,13,True)
        run(cells[4].paragraphs[0],"______ kg",10,False,INK)
        p=cells[5].paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER; run(p,"☐",20,False)
    widths(t,[0.55,2.75,1.05,0.85,1.0,0.67]); para(after=10)

def check_table(rows,head="CHECKLIST"):
    t=doc.add_table(rows=1,cols=3); borders(t,"C9D4FF",6)
    for i,h in enumerate(["STEP",head,"DONE"]):
        c=t.rows[0].cells[i]; shade(c,BLUEHEX); pad(c,100,100,100,100)
        p=c.paragraphs[0]; run(p,h,9,True,WHITE)
        if i!=1: p.alignment=WD_ALIGN_PARAGRAPH.CENTER
    for n,(step,name,cue) in enumerate(rows):
        cells=t.add_row().cells
        for c in cells:
            pad(c,300,300,130,130); c.vertical_alignment=WD_CELL_VERTICAL_ALIGNMENT.CENTER
            if n%2: shade(c,"F5F7FF")
        p=cells[0].paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER; run(p,step,16,True)
        p=cells[1].paragraphs[0]; run(p,name,15,True)
        p=cells[1].add_paragraph(); p.paragraph_format.space_before=Pt(3); run(p,cue,12,False,INK)
        p=cells[2].paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER; run(p,"☐",20)
    widths(t,[0.6,5.6,0.67]); para(after=10)

def bigstat(num,unit,line):
    t=doc.add_table(rows=1,cols=1); borders(t,BLUEHEX,4)
    c=t.cell(0,0); shade(c,BLUEHEX); pad(c,200,200,200,200); c.width=Inches(6.87); widths(t,[6.87])
    p=c.paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER; run(p,num,44,True,WHITE); run(p,"  "+unit,16,True,WHITE)
    p=c.add_paragraph(); p.alignment=WD_ALIGN_PARAGRAPH.CENTER; run(p,line,12.5,True,WHITE)
    para(after=10)

def footer(text):
    p=para(after=0,before=4); run(p,"▸  ",12,True); run(p,text,13,True)

warm=("1","Warm up · 5 min","Easy bike, then 2 or 3 lighter ramp-up sets on your first lift.","5 min","Then go")
effort="Stop every set with 3 to 4 reps left in the tank. This is a re-entry week. Finish feeling good, not wrecked."

# COVER
banner("WEEK 1 OVERVIEW","Get Your Groove Back","3 strength days.  2 bike days.  45 to 50 minutes each.")
t=doc.add_table(rows=0,cols=3); borders(t,"C9D4FF",6)
plan=[("MON","Strength A","Leg press, bench, row"),("TUE","Bike: Zone 2","25 min easy"),("WED","Strength B","RDL, pulldown, shoulder press"),
("THU","Rest","Walk, sleep, eat"),("FRI","Strength C","Hack squat, incline DB, row"),("SAT","Bike: Intervals","6 x 20 s hard"),("SUN","Rest","Check in, log weights")]
for n,(d,s_,w) in enumerate(plan):
    cells=t.add_row().cells
    for c in cells:
        pad(c,230,230,160,160)
        if n%2: shade(c,"F5F7FF")
    run(cells[0].paragraphs[0],d,14,True); run(cells[1].paragraphs[0],s_,14,True); run(cells[2].paragraphs[0],w,12,False,INK)
widths(t,[0.9,2.4,3.57]); para(after=12)
callout("THE ONE RULE THIS WEEK:","Leave reps in the tank. Showing up 5 times at 80% beats one heroic session and a missed week.")
callout("HOW TO USE THIS:","One page per day. Start at Step 1 and work down. Tick the box when a step is done, and write your weight in so next week has a starting point.")
callout("SUPERSET MEANS:","Do exercise A, then go straight into B, then rest. That's one round.")

def strength_day(day,title,sub,rows,cue_footer):
    doc.add_page_break(); banner(day,title,sub)
    callout("EFFORT TODAY:",effort)
    strength_table(rows); footer(cue_footer)

strength_day("MONDAY","Strength A","Full body  ·  Leg press focus  ·  45 to 50 min",[warm,
 ("2","Leg Press","Go as deep as you can control.","2 x 6-8","3 min"),
 ("3","Barbell Bench Press","Use dumbbells if you have no spotter.","2 x 5-6","3 min"),
 ("4","Seated Cable Row","Pause for 1 second at your chest.","2 x 8-10","90 s"),
 ("5A","Seated Leg Curl","Superset: go straight into 5B.","2 x 10-12","None"),
 ("5B","Machine Lateral Raise","Then rest, and repeat 5A and 5B once more.","2 x 12-15","60 s")],
 "Tomorrow is an easy bike ride. Nothing hard.")
doc.add_page_break(); banner("TUESDAY","Bike: Zone 2","Assault bike  ·  Easy and steady  ·  25 min")
bigstat("25","MINUTES","Steady, smooth pace the whole way.")
check_table([("1","Ride 25 minutes, steady","Effort 3 to 4 out of 10. About 60 to 70% of your max heart rate."),
 ("2","Pass the talk test","You can speak in full sentences the whole time. Only getting a few words out? Back off."),
 ("3","Watch the drift","The assault bike creeps harder than you think. Check yourself every 5 minutes and keep it easy.")],"TODAY")
footer("This builds your aerobic base and helps your legs recover from Monday.")
strength_day("WEDNESDAY","Strength B","Full body  ·  RDL focus  ·  45 to 50 min",[warm,
 ("2","Barbell RDL","Bar stays against your legs. Stop going down before your back rounds.","2 x 6-8","3 min"),
 ("3","Lat Pulldown","Let your arms stretch all the way at the top.","2 x 8-10","2 min"),
 ("4","Machine Shoulder Press","Smooth reps, no bouncing.","2 x 8-10","90 s"),
 ("5A","Leg Extension","Superset: go straight into 5B.","2 x 12-15","None"),
 ("5B","Triceps Pushdown + DB Curl","10 to 12 reps of each. Then rest, and repeat 5A and 5B once more.","2 x 10-12","60 s")],
 "Tomorrow is rest. Earn it.")
doc.add_page_break(); banner("THURSDAY","Rest Day","No training  ·  Recover so Friday counts")
bigstat("0","TRAINING","Your legs need to be fresh for Friday.")
check_table([("1","Go for a walk","A relaxed 20 to 30 minutes is plenty."),
 ("2","Sleep 7 to 9 hours","This is where the training actually turns into progress."),
 ("3","Eat your protein","Get some protein in at every meal.")],"TODAY")
footer("Rest is part of the plan, not a break from it.")
strength_day("FRIDAY","Strength C","Full body  ·  Hack squat focus  ·  45 to 50 min",[warm,
 ("2","Hack Squat (or Leg Press)","Take 2 seconds on the way down.","2 x 8-10","2-3 min"),
 ("3","Incline DB Bench Press","Lower the dumbbells under control to chest level.","2 x 8-10","2 min"),
 ("4","Chest-Supported Row Machine","Chest stays on the pad. Pull with your back.","2 x 8-10","90 s"),
 ("5A","Hip Thrust Machine","Swap for seated leg curl if there's no machine. Superset: go straight into 5B.","2 x 10-12","None"),
 ("5B","Calf Raise + Cable Crunch","12 to 15 reps of each. Then rest, and repeat 5A and 5B once more.","2 x 12-15","60 s")],
 "Three strength sessions done. Tomorrow is intervals.")
doc.add_page_break(); banner("SATURDAY","Bike: Intervals","Assault bike  ·  Hard but repeatable  ·  About 25 min")
bigstat("6 ROUNDS","","20 seconds HARD,  then 100 seconds EASY")
check_table([("1","Warm up · 8 min","Start easy and build to moderate. Finish with 2 quick 10 second pick-ups."),
 ("2","Intervals · 6 rounds","Hard means 8 to 9 out of 10, not an all-out sprint. Your last round should look like your first. If your output drops off badly, stop there."),
 ("3","Cool down · 5 min","Easy spin until your breathing settles.")],"TODAY")
p=para(after=6,before=2); run(p,"ROUND TRACKER",11,True)
t=doc.add_table(rows=2,cols=6); borders(t,BLUEHEX,8); widths(t,[6.87/6]*6)
for i in range(6):
    c=t.cell(0,i); shade(c,BLUEHEX); pad(c,80,80,60,60); p=c.paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER; run(p,str(i+1),14,True,WHITE)
    c=t.cell(1,i); pad(c,80,80,60,60); p=c.paragraphs[0]; p.alignment=WD_ALIGN_PARAGRAPH.CENTER; run(p,"☐",24)
para(after=8); footer("Sunday is rest, so your legs are fresh for Monday.")
doc.add_page_break(); banner("SUNDAY","Rest Day","Reset  ·  Get ready for Week 2")
check_table([("1","Check in","Did you get all 5 sessions done? That's the win this week."),
 ("2","Log your weights","Copy every weight from this week somewhere safe. That's your starting point."),
 ("3","Plan your week","Put next week's 5 sessions in your calendar like appointments.")],"TODAY")
callout("NEXT WEEK:","Main lifts go up to 3 sets, stopping 2 to 3 reps short. Bike is 30 minutes of zone 2 and 8 interval rounds.")
footer("Consistency first. The weights will follow.")
doc.save(sys.argv[1])
