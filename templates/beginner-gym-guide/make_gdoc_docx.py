import sys
from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_BREAK
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

BLUE="2050F6"; LBLUE="6F93FF"; WHITE="FFFFFF"; BODY="E4E6EC"; MUTED="9AA0AE"; CARD="15171D"; LINE="2A2E38"; BG="000000"
HEAD="Montserrat"; FONT="Arial"
d=Document()
s=d.sections[0]; s.page_width=Cm(21); s.page_height=Cm(29.7)
s.top_margin=s.bottom_margin=Cm(1.5); s.left_margin=s.right_margin=Cm(1.7)
# black page background
bg=OxmlElement('w:background'); bg.set(qn('w:color'),BG); d.element.insert(0,bg)
dbs=OxmlElement('w:displayBackgroundShape'); d.settings.element.insert(0,dbs)
st=d.styles['Normal']; st.font.name=FONT; st.font.size=Pt(9.5); st.font.color.rgb=RGBColor.from_string(BODY)
st.element.rPr.rFonts.set(qn('w:eastAsia'),FONT)
st.paragraph_format.space_after=Pt(4); st.paragraph_format.line_spacing=1.15

def run(p,t,bold=False,color=BODY,size=None,font=None,caps=False,spacing=None):
    r=p.add_run(t); r.bold=bold; r.font.color.rgb=RGBColor.from_string(color)
    if size: r.font.size=Pt(size)
    if font: r.font.name=font; r._element.rPr.rFonts.set(qn('w:eastAsia'),font)
    if caps: r.font.all_caps=True
    if spacing is not None:
        sp=OxmlElement('w:spacing'); sp.set(qn('w:val'),str(spacing)); r._element.get_or_add_rPr().append(sp)
    return r

def rich(p,text,color=BODY,size=None):
    # **bold** segments
    parts=text.split('**')
    for i,t in enumerate(parts):
        if t: run(p,t,bold=(i%2==1),color=(WHITE if i%2==1 else color),size=size)

def para(text="",color=BODY,size=None,after=4,before=0,keep=False):
    p=d.add_paragraph(); p.paragraph_format.space_after=Pt(after); p.paragraph_format.space_before=Pt(before)
    if keep: p.paragraph_format.keep_with_next=True
    rich(p,text,color,size); return p

def kicker(t,before=0):
    p=para(after=1,before=before,keep=True); run(p,t,bold=True,color=LBLUE,size=8,caps=True,spacing=40); return p

def h2(num,t,before=8):
    p=para(after=5,before=before,keep=True)
    run(p,num+"  ",bold=True,color=BLUE,size=15,font=HEAD); run(p,t,bold=True,color=WHITE,size=15,font=HEAD)
    rule(p); return p

def rule(p,color=BLUE,sz=8):
    pPr=p._p.get_or_add_pPr(); b=OxmlElement('w:pBdr'); bt=OxmlElement('w:bottom')
    for k,v in (('val','single'),('sz',str(sz)),('space','3'),('color',color)): bt.set(qn('w:'+k),v)
    b.append(bt); pPr.append(b)

def h3(t,before=5):
    p=para(after=1,before=before,keep=True); run(p,t,bold=True,color=LBLUE,size=10.5,font=HEAD); return p

def shade(cell,color):
    tcPr=cell._tc.get_or_add_tcPr(); sh=OxmlElement('w:shd'); sh.set(qn('w:val'),'clear'); sh.set(qn('w:color'),'auto'); sh.set(qn('w:fill'),color); tcPr.append(sh)

def borders(table,color=LINE,inside=True):
    tblPr=table._tbl.tblPr; b=OxmlElement('w:tblBorders')
    for e in ('top','left','bottom','right','insideH','insideV'):
        el=OxmlElement('w:'+e)
        if e.startswith('inside') and not inside: el.set(qn('w:val'),'nil')
        else:
            for k,v in (('val','single'),('sz','4'),('space','0'),('color',color)): el.set(qn('w:'+k),v)
        b.append(el)
    tblPr.append(b)

def cellmargins(table,tb=90,lr=120):
    tblPr=table._tbl.tblPr; m=OxmlElement('w:tblCellMar')
    for e,v in (('top',tb),('bottom',tb),('left',lr),('right',lr)):
        el=OxmlElement('w:'+e); el.set(qn('w:w'),str(v)); el.set(qn('w:type'),'dxa'); m.append(el)
    tblPr.append(m)

def cant_split(row):
    trPr=row._tr.get_or_add_trPr(); c=OxmlElement('w:cantSplit'); trPr.append(c)

def setw(table,widths):
    table.autofit=False
    tblPr=table._tbl.tblPr
    lay=OxmlElement('w:tblLayout'); lay.set(qn('w:type'),'fixed'); tblPr.append(lay)
    tw=OxmlElement('w:tblW'); tw.set(qn('w:w'),str(int(sum(widths)*567))); tw.set(qn('w:type'),'dxa')
    for e in tblPr.findall(qn('w:tblW')): tblPr.remove(e)
    tblPr.append(tw)
    for gc,w in zip(table._tbl.tblGrid.findall(qn('w:gridCol')),widths): gc.set(qn('w:w'),str(int(w*567)))
    for row in table.rows:
        for i,w in enumerate(widths): row.cells[i].width=Cm(w)

def cellp(cell,first=True):
    p=cell.paragraphs[0] if first else cell.add_paragraph()
    p.paragraph_format.space_after=Pt(2); return p

def card_table(cols,widths):
    t=d.add_table(rows=1,cols=cols); borders(t,BG,inside=True); cellmargins(t,110,150); setw(t,widths)
    for c in t.rows[0].cells: shade(c,CARD)
    cant_split(t.rows[0]); return t

def bullets(cell,items,first=True):
    for i,it in enumerate(items):
        p=cellp(cell,first and i==0); run(p,"■  ",color=BLUE,size=7); rich(p,it)

def page_break():
    p=d.add_paragraph(); p.paragraph_format.space_after=Pt(0); p.add_run().add_break(WD_BREAK.PAGE)

def data_table(title,rows):
    t=d.add_table(rows=1+len(rows),cols=4); borders(t,LINE); cellmargins(t,70,110); setw(t,[4.3,2.7,1.6,9.0])
    hdr=[title,"Sets × Reps","Rest","Coaching note"]
    for i,h in enumerate(hdr):
        c=t.rows[0].cells[i]; shade(c,BLUE); p=cellp(c); run(p,h,bold=True,color=WHITE,size=8.5,caps=True,spacing=20)
    for r,(ex,sub,sr,rest,note) in enumerate(rows,1):
        cells=t.rows[r].cells
        for c in cells: shade(c,CARD if r%2 else "0E1015")
        p=cellp(cells[0]); run(p,ex,bold=True,color=WHITE)
        if sub: run(p,"  "+sub,color=MUTED,size=8)
        p=cellp(cells[1]); run(p,sr,bold=True,color=LBLUE)
        p=cellp(cells[2]); run(p,rest,color=BODY)
        p=cellp(cells[3]); run(p,note,color=BODY)
        cant_split(t.rows[r])
    return t

# ---------- PAGE 1 ----------
hero=d.add_table(rows=1,cols=1); borders(hero,BLUE,inside=False); cellmargins(hero,220,280); setw(hero,[17.6]); shade(hero.rows[0].cells[0],BLUE)
c=hero.rows[0].cells[0]
p=cellp(c); run(p,"@strengthelite  /  Beginner guide",bold=True,color="DCE4FF",size=8,caps=True,spacing=40)
p=cellp(c,False); p.paragraph_format.space_after=Pt(0); run(p,"STARTING STRONG.",bold=True,color=WHITE,size=30,font=HEAD)
p=cellp(c,False); p.paragraph_format.space_after=Pt(8); run(p,"Your first 12 weeks in the gym.",bold=True,color="DCE4FF",size=16,font=HEAD)
p=cellp(c,False); run(p,"Everything you need to walk in confident, train properly and get stronger, leaner and fitter. Nothing you don't. Read it once, then keep it on your phone for the gym floor.",color=WHITE,size=10)
para(after=2)
stats=d.add_table(rows=1,cols=3); borders(stats,BG); cellmargins(stats,100,140); setw(stats,[5.86,5.86,5.86])
for cc,(n,l) in zip(stats.rows[0].cells,[("2–3","days per week"),("45–60 min","per session"),("Full body","every session")]):
    shade(cc,CARD); p=cellp(cc); p.paragraph_format.space_after=Pt(0); run(p,n,bold=True,color=WHITE,size=15,font=HEAD)
    p=cellp(cc,False); run(p,l,color=MUTED,size=8,caps=True,spacing=20)

h2("01","What goes in your gym bag",before=10)
t=card_table(2,[8.8,8.8])
a,b=t.rows[0].cells
p=cellp(a); run(p,"ESSENTIALS",bold=True,color=LBLUE,size=8.5,spacing=30)
bullets(a,["**Water bottle.** Sip between sets, don't chug.","**Small towel.** For you and for wiping down the bench.","**Stable, flat shoes.** Cross trainers or flat soled shoes. Thick, squishy runners make you wobble on leg press and squats.","**A supportive sports bra** and clothes you can move in without adjusting every set.","**Your program** on your phone, plus a way to log weights."],first=False)
p=cellp(b); run(p,"NICE TO HAVE",bold=True,color=LBLUE,size=8.5,spacing=30)
bullets(b,["**Headphones.** A good playlist helps, and they politely signal you're mid session.","**Padlock** for the locker.","**Hair ties, deodorant, a light layer** for warming up or a cold gym.","**A snack or protein shake** if you train straight after work and dinner is hours away."],first=False)
p=cellp(b,False); run(p,"Skip the gloves, belts and supplements for now. You don't need them yet.",color=MUTED,size=8.5)

h2("02","Gym etiquette: the unwritten rules")
para("Most people feel nervous in a new gym because nobody tells them the rules. Here they are.",color=MUTED,after=5,keep=True)
rules=[("Wipe it down","Spray and wipe any seat or pad you've sweated on."),("Put it back","Dumbbells back on the rack, pins out of machines, plates off."),
("Don't camp","Rest on a machine between sets, sure. Scrolling on it for ten minutes, no."),("Ask to share","\"How many sets have you got left?\" is completely normal."),
("Give people space","Don't stand in front of someone's mirror or walk through their set."),("Headphones in means busy","Wait until they finish a set before asking something."),
("Ask the staff","Not sure how a machine adjusts? Ask. That's their job."),("Nobody's watching you","Honestly. Everyone started as a beginner.")]
rt=d.add_table(rows=4,cols=2); borders(rt,BG); cellmargins(rt,80,150); setw(rt,[8.8,8.8])
for i,(h,tx) in enumerate(rules):
    c=rt.rows[i//2].cells[i%2]; shade(c,CARD); p=cellp(c); run(p,h,bold=True,color=WHITE,size=9.5); p.paragraph_format.space_after=Pt(0)
    p=cellp(c,False); run(p,tx,color=BODY,size=9)
for r in rt.rows: cant_split(r)

h3("SETTING UP ANY MACHINE IN 3 CHECKS",before=9)
for n,tx in [("1","Line the joint that's moving (knee, elbow, shoulder) up with the machine's pivot point, usually a coloured dot."),("2","Adjust the seat so the handles or pads sit where the movement starts comfortably."),("3","Write the seat number in your log so next time takes ten seconds.")]:
    p=para(after=2); run(p,n+"   ",bold=True,color=BLUE,size=10,font=HEAD); rich(p,tx)
page_break()

# ---------- PAGE 2 ----------
h2("03","How you'll train, and why it works",before=0)
para("Two or three full body sessions a week, mostly machines with a few easy dumbbell moves. Machines guide the movement path, so you can focus on effort and control while your body learns to produce force. Full body means every major muscle gets trained at least twice a week, which is exactly what the **2026 American College of Sports Medicine position stand** on resistance training recommends, whatever your goal. Miss a session and nothing goes untrained for a week.",after=7)
nt=d.add_table(rows=1,cols=4); borders(nt,BG); cellmargins(nt,100,130); setw(nt,[4.4,4.4,4.4,4.4])
for cc,(k,v,l) in zip(nt.rows[0].cells,[("Sets","2–3","per exercise"),("Reps","8–12","per set"),("Effort","2–3 left","reps in the tank"),("Rest","1–2 min","between sets")]):
    shade(cc,CARD); p=cellp(cc); p.paragraph_format.space_after=Pt(0); run(p,k,bold=True,color=MUTED,size=7.5,caps=True,spacing=30)
    p=cellp(cc,False); p.paragraph_format.space_after=Pt(0); run(p,v,bold=True,color=LBLUE,size=16,font=HEAD)
    p=cellp(cc,False); run(p,l,color=MUTED,size=8)
whys=[("Sets: why 2–3","More total work builds more muscle, up to a point. The ACSM position stand found strength responds best to 2–3 hard sets per exercise. For a beginner that's the sweet spot. Enough to drive change, not so much you're wrecked for days. Start with 2 sets in weeks 1–2 while you learn the movements, then move to 3."),
("Reps: why 8–12","This range builds strength and muscle at the same time, and it's light enough to practise good technique with. Muscle can be built across a wide rep range (Schoenfeld and colleagues have shown this repeatedly), so 8–12 isn't magic, just the most practical place to start. Early on, most of your strength gains come from your nervous system getting better at the movement. That's why beginners get stronger so quickly, and why heavier, lower rep work can wait a few months."),
("Effort: why stop 2–3 reps short","This is the one most beginners get wrong, usually by stopping way too early. Every set should end feeling like you could have done 2 or 3 more good reps, no more. If you could have done 8 more, it was a warm up. You also don't need to grind to total failure. The 2026 ACSM review of 137 systematic reviews found training to failure gave no extra benefit for strength or muscle over stopping 2–3 reps short, just more fatigue. Hard, but clean."),
("Rest: why it isn't a race","Rest is when your muscles recover enough to do the next set properly. Cut it too short and your reps drop, which means less work done and less result. Take **about 2 minutes** on the big moves (leg press, goblet squat, Romanian deadlift) and **60–90 seconds** on the smaller ones. Getting leaner comes from your food and your total weekly activity, not from rushing between sets until you're gasping."),
("Tempo: control the way down","Lower the weight over about 2–3 seconds, then push it back up with intent. Controlled lowering keeps tension on the muscle and the weight moving where it should, which protects your joints.")]
for i,(h,tx) in enumerate(whys):
    h3(h,before=8 if i==0 else 5); para(tx,after=2)

h2("04","Your week and how to progress",before=10)
wt=card_table(2,[8.8,8.8])
for cc,(h,tx) in zip(wt.rows[0].cells,[("2 DAYS A WEEK","Session A and Session B, at least one rest day apart. Monday A, Thursday B works well."),("3 DAYS A WEEK","Alternate them. Week 1 is A, B, A. Week 2 is B, A, B. Monday, Wednesday, Friday works well.")]):
    p=cellp(cc); run(p,h,bold=True,color=LBLUE,size=8.5,spacing=30); p=cellp(cc,False); rich(p,tx)
para("**Getting stronger is the whole game.** When you hit the top of the rep range on every set (say 3 × 12) and still had 2 reps left, go up to the next weight next session. Your reps drop back toward 8. Build them back up to 12, then go up again. Log every session so you always know what to beat. A little more weight or one more rep every week or two adds up to a completely different body in three months.",before=6,after=0)
h3("\"WILL LIFTING MAKE ME BULKY?\"",before=10)
para("No. Building muscle is a slow process that takes years of deliberate effort and eating for it. You'll notice more shape and firmer muscle. The **2026 NSCA position statement on female athletes** is clear that the same training principles apply to women as to men. You don't need a \"pink dumbbell\" version of training. You need the real thing, done well.",after=0)
page_break()

# ---------- PAGE 3 ----------
h2("05","Your two sessions",before=0)
para("**Warm up first (5–8 min).** 5 minutes easy on the bike or rower, then one light set of your first exercise at about half your working weight.",after=6)
data_table("Session A",[("Leg Press","","3 × 8–12","2 min","Feet shoulder width, lower until knees are roughly 90°. Don't lock out hard at the top."),
("Seated Cable Row","","3 × 10–12","90s","Tall chest, pull elbows back to your ribs, squeeze shoulder blades."),
("Machine Chest Press","","3 × 8–12","90s","Handles in line with mid chest. Shoulders down and back."),
("Seated Leg Curl","","3 × 10–12","60–90s","Knee in line with the pivot. Slow on the way back up."),
("Hip Thrust Machine","or DB glute bridge","3 × 10–12","90s","Chin tucked, ribs down, drive through heels and pause at the top."),
("Dead Bug","","2 × 8/side","60s","Lower back stays pressed into the floor the whole time.")])
para(after=6)
data_table("Session B",[("DB Goblet Squat","to a box","3 × 8–12","2 min","Hold the dumbbell at your chest, sit between your heels, stand tall."),
("Lat Pulldown","","3 × 10–12","90s","Pull the bar to your upper chest, elbows toward your back pockets."),
("DB Romanian Deadlift","","3 × 8–12","2 min","Soft knees, push hips back, dumbbells slide down the front of your legs."),
("Machine Shoulder Press","","3 × 8–12","90s","Handles start around chin height. Don't arch your lower back."),
("Leg Extension","","2 × 12–15","60s","Knee lined up with the pivot. Pause briefly at the top."),
("Plank","","3 × 20–40s","60s","Squeeze glutes, ribs down. End the set when your hips start to sag.")])
para("**Finish (optional, for fitness).** 8–10 minutes on the bike, rower or incline walk at a pace where you can talk, but only in short sentences.",before=6,after=0)

h2("06","Outside the gym",before=10)
ot=card_table(2,[8.8,8.8])
for cc,(h,tx) in zip(ot.rows[0].cells,[("LEANER","Fat loss is mostly driven by food. Training helps make sure the weight you lose is fat, not muscle. Protein at every meal (a palm sized serve or more) and roughly 7,000–10,000 steps a day."),("RECOVERY","Muscle is built while you recover, not while you train. Aim for 7–9 hours of sleep. Sore for a day or two early on is normal. Sharp or joint pain isn't, so stop that exercise and ask.")]):
    p=cellp(cc); run(p,h,bold=True,color=LBLUE,size=8.5,spacing=30); p=cellp(cc,False); rich(p,tx)
para(after=6)
fin=d.add_table(rows=1,cols=1); borders(fin,BLUE,inside=False); cellmargins(fin,140,200); setw(fin,[17.6]); shade(fin.rows[0].cells[0],BLUE)
p=cellp(fin.rows[0].cells[0]); p.paragraph_format.space_after=Pt(0)
run(p,"After 12 weeks.  ",bold=True,color=WHITE,size=10,font=HEAD); run(p,"If you've logged your sessions and the weights have gone up, the plan worked. Until then, show up, log it and beat last week.",color=WHITE)

d.save(sys.argv[1])
