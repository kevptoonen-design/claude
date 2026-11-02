# Builds the black-themed Google Docs import version of the Starting Strong guide.
import sys
BLUE="#2050f6"; LB="#6f93ff"; W="#ffffff"; B="#e4e6ec"; M="#9aa0ae"; CARD="#15171d"; CARD2="#0e1015"; LINE="#2a2e38"
F="font-family:Arial;"; H="font-family:Montserrat;"
def r(t): # **bold**
    out=[];parts=t.split('**')
    for i,p in enumerate(parts):
        if not p: continue
        out.append(f'<span style="color:{W};font-weight:700">{p}</span>' if i%2 else p)
    return ''.join(out)
def p(t,color=B,size=9.5,after=4,before=0):
    return f'<p style="{F}color:{color};font-size:{size}pt;line-height:1.2;margin:{before}pt 0 {after}pt 0">{r(t)}</p>'
def h2(n,t,before=10):
    return (f'<p style="{H}font-size:15pt;font-weight:700;margin:{before}pt 0 6pt 0;padding-bottom:3pt;border-bottom:1.5pt solid {BLUE}">'
            f'<span style="color:{BLUE}">{n}&nbsp;&nbsp;</span><span style="color:{W}">{t}</span></p>')
def h3(t,before=6):
    return f'<p style="{H}color:{LB};font-size:10.5pt;font-weight:700;margin:{before}pt 0 1pt 0">{t}</p>'
def lab(t): return f'<p style="{F}color:{LB};font-size:8.5pt;font-weight:700;letter-spacing:1pt;margin:0 0 3pt 0">{t}</p>'
def td(inner,w,bg=CARD,pad="7pt 9pt"):
    return f'<td style="width:{w}pt;background-color:{bg};padding:{pad};vertical-align:top;border:2pt solid #000000">{inner}</td>'
def table(rows,border="#000000"):
    return f'<table style="width:100%;border-collapse:collapse;border:0">{"".join("<tr>"+x+"</tr>" for x in rows)}</table>'
def bl(items): return ''.join(p(f'<span style="color:{BLUE}">■</span>&nbsp;&nbsp;'+i,after=2) for i in items)
PB='<hr style="page-break-before:always;display:none;">'
o=[]
# PAGE 1
hero=(f'<p style="{F}color:#dce4ff;font-size:8pt;font-weight:700;letter-spacing:2pt;margin:0 0 4pt 0">@STRENGTHELITE&nbsp;&nbsp;/&nbsp;&nbsp;BEGINNER GUIDE</p>'
      f'<p style="{H}color:{W};font-size:30pt;font-weight:700;margin:0">STARTING STRONG.</p>'
      f'<p style="{H}color:#dce4ff;font-size:16pt;font-weight:700;margin:0 0 8pt 0">Your first 12 weeks in the gym.</p>'
      +p("Everything you need to walk in confident, train properly and get stronger, leaner and fitter. Nothing you don't. Read it once, then keep it on your phone for the gym floor.",color=W,size=10,after=0))
o.append(table([td(hero,500,BLUE,"14pt 16pt")]))
stat=lambda n,l: f'<p style="{H}color:{W};font-size:15pt;font-weight:700;margin:0">{n}</p><p style="{F}color:{M};font-size:8pt;letter-spacing:1pt;margin:0">{l}</p>'
o.append(table([td(stat("2–3","DAYS PER WEEK"),166)+td(stat("45–60 min","PER SESSION"),166)+td(stat("Full body","EVERY SESSION"),166)]))
o.append(h2("01","What goes in your gym bag"))
ess=lab("ESSENTIALS")+bl(["**Water bottle.** Sip between sets, don't chug.","**Small towel.** For you and for wiping down the bench.","**Stable, flat shoes.** Cross trainers or flat soled shoes. Thick, squishy runners make you wobble on leg press and squats.","**A supportive sports bra** and clothes you can move in without adjusting every set.","**Your program** on your phone, plus a way to log weights."])
nice=lab("NICE TO HAVE")+bl(["**Headphones.** A good playlist helps, and they politely signal you're mid session.","**Padlock** for the locker.","**Hair ties, deodorant, a light layer** for warming up or a cold gym.","**A snack or protein shake** if you train straight after work and dinner is hours away."])+p("Skip the gloves, belts and supplements for now. You don't need them yet.",color=M,size=8.5,after=0)
o.append(table([td(ess,250)+td(nice,250)]))
o.append(h2("02","Gym etiquette: the unwritten rules"))
o.append(p("Most people feel nervous in a new gym because nobody tells them the rules. Here they are.",color=M,after=4))
rules=[("Wipe it down","Spray and wipe any seat or pad you've sweated on."),("Put it back","Dumbbells back on the rack, pins out of machines, plates off."),
("Don't camp","Rest on a machine between sets, sure. Scrolling on it for ten minutes, no."),("Ask to share","\"How many sets have you got left?\" is completely normal."),
("Give people space","Don't stand in front of someone's mirror or walk through their set."),("Headphones in means busy","Wait until they finish a set before asking something."),
("Ask the staff","Not sure how a machine adjusts? Ask. That's their job."),("Nobody's watching you","Honestly. Everyone started as a beginner.")]
rc=lambda h,t: td(p(f"**{h}**",after=0)+p(t,size=9,after=0),250,CARD,"5pt 9pt")
o.append(table([rc(*rules[i])+rc(*rules[i+1]) for i in range(0,8,2)]))
o.append(h3("SETTING UP ANY MACHINE IN 3 CHECKS",before=9))
for n,t in [("1","Line the joint that's moving (knee, elbow, shoulder) up with the machine's pivot point, usually a coloured dot."),("2","Adjust the seat so the handles or pads sit where the movement starts comfortably."),("3","Write the seat number in your log so next time takes ten seconds.")]:
    o.append(p(f'<span style="{H}color:{BLUE};font-weight:700;font-size:10pt">{n}</span>&nbsp;&nbsp;&nbsp;'+t,after=2))
o.append(PB)
# PAGE 2
o.append(h2("03","How you'll train, and why it works",before=0))
o.append(p("Two or three full body sessions a week, mostly machines with a few easy dumbbell moves. Machines guide the movement path, so you can focus on effort and control while your body learns to produce force. Full body means every major muscle gets trained at least twice a week, which is exactly what the **2026 American College of Sports Medicine position stand** on resistance training recommends, whatever your goal. Miss a session and nothing goes untrained for a week.",after=6))
num=lambda k,v,l: f'<p style="{F}color:{M};font-size:7.5pt;font-weight:700;letter-spacing:1pt;margin:0">{k}</p><p style="{H}color:{LB};font-size:16pt;font-weight:700;margin:0">{v}</p><p style="{F}color:{M};font-size:8pt;margin:0">{l}</p>'
o.append(table([td(num("SETS","2–3","per exercise"),125)+td(num("REPS","8–12","per set"),125)+td(num("EFFORT","2–3 left","reps in the tank"),125)+td(num("REST","1–2 min","between sets"),125)]))
whys=[("Sets: why 2–3","More total work builds more muscle, up to a point. The ACSM position stand found strength responds best to 2–3 hard sets per exercise. For a beginner that's the sweet spot. Enough to drive change, not so much you're wrecked for days. Start with 2 sets in weeks 1–2 while you learn the movements, then move to 3."),
("Reps: why 8–12","This range builds strength and muscle at the same time, and it's light enough to practise good technique with. Muscle can be built across a wide rep range (Schoenfeld and colleagues have shown this repeatedly), so 8–12 isn't magic, just the most practical place to start. Early on, most of your strength gains come from your nervous system getting better at the movement. That's why beginners get stronger so quickly, and why heavier, lower rep work can wait a few months."),
("Effort: why stop 2–3 reps short","This is the one most beginners get wrong, usually by stopping way too early. Every set should end feeling like you could have done 2 or 3 more good reps, no more. If you could have done 8 more, it was a warm up. You also don't need to grind to total failure. The 2026 ACSM review of 137 systematic reviews found training to failure gave no extra benefit for strength or muscle over stopping 2–3 reps short, just more fatigue. Hard, but clean."),
("Rest: why it isn't a race","Rest is when your muscles recover enough to do the next set properly. Cut it too short and your reps drop, which means less work done and less result. Take **about 2 minutes** on the big moves (leg press, goblet squat, Romanian deadlift) and **60–90 seconds** on the smaller ones. Getting leaner comes from your food and your total weekly activity, not from rushing between sets until you're gasping."),
("Tempo: control the way down","Lower the weight over about 2–3 seconds, then push it back up with intent. Controlled lowering keeps tension on the muscle and the weight moving where it should, which protects your joints.")]
for i,(h,t) in enumerate(whys): o.append(h3(h,before=7 if i==0 else 5)); o.append(p(t,after=2))
o.append(h2("04","Your week and how to progress"))
o.append(table([td(lab("2 DAYS A WEEK")+p("Session A and Session B, at least one rest day apart. Monday A, Thursday B works well.",after=0),250)+td(lab("3 DAYS A WEEK")+p("Alternate them. Week 1 is A, B, A. Week 2 is B, A, B. Monday, Wednesday, Friday works well.",after=0),250)]))
o.append(p("**Getting stronger is the whole game.** When you hit the top of the rep range on every set (say 3 × 12) and still had 2 reps left, go up to the next weight next session. Your reps drop back toward 8. Build them back up to 12, then go up again. Log every session so you always know what to beat. A little more weight or one more rep every week or two adds up to a completely different body in three months.",before=6,after=0))
o.append(h3('"WILL LIFTING MAKE ME BULKY?"',before=10))
o.append(p("No. Building muscle is a slow process that takes years of deliberate effort and eating for it. You'll notice more shape and firmer muscle. The **2026 NSCA position statement on female athletes** is clear that the same training principles apply to women as to men. You don't need a \"pink dumbbell\" version of training. You need the real thing, done well.",after=0))
o.append(PB)
# PAGE 3
o.append(h2("05","Your two sessions",before=0))
o.append(p("**Warm up first (5–8 min).** 5 minutes easy on the bike or rower, then one light set of your first exercise at about half your working weight.",after=6))
def dt(title,rows):
    hc=lambda t,w: f'<td style="width:{w}pt;background-color:{BLUE};padding:5pt 7pt;border:1pt solid {LINE}"><p style="{F}color:{W};font-size:8pt;font-weight:700;letter-spacing:1pt;margin:0">{t}</p></td>'
    out=["".join([hc(title,120),hc("SETS × REPS",78),hc("REST",44),hc("COACHING NOTE",258)])]
    for i,(ex,sub,sr,rest,note) in enumerate(rows):
        bg=CARD if i%2==0 else CARD2
        c=lambda inner,w: f'<td style="width:{w}pt;background-color:{bg};padding:4pt 7pt;vertical-align:top;border:1pt solid {LINE}">{inner}</td>'
        exh=f'<span style="color:{W};font-weight:700">{ex}</span>'+(f'<span style="color:{M};font-size:8pt">&nbsp;&nbsp;{sub}</span>' if sub else '')
        out.append(c(p(exh,after=0),120)+c(p(f'<span style="color:{LB};font-weight:700">{sr}</span>',after=0),78)+c(p(rest,after=0),44)+c(p(note,after=0),258))
    return table(out)
o.append(dt("SESSION A",[("Leg Press","","3 × 8–12","2 min","Feet shoulder width, lower until knees are roughly 90°. Don't lock out hard at the top."),
("Seated Cable Row","","3 × 10–12","90s","Tall chest, pull elbows back to your ribs, squeeze shoulder blades."),
("Machine Chest Press","","3 × 8–12","90s","Handles in line with mid chest. Shoulders down and back."),
("Seated Leg Curl","","3 × 10–12","60–90s","Knee in line with the pivot. Slow on the way back up."),
("Hip Thrust Machine","or DB glute bridge","3 × 10–12","90s","Chin tucked, ribs down, drive through heels and pause at the top."),
("Dead Bug","","2 × 8/side","60s","Lower back stays pressed into the floor the whole time.")]))
o.append(p("",after=4))
o.append(dt("SESSION B",[("DB Goblet Squat","to a box","3 × 8–12","2 min","Hold the dumbbell at your chest, sit between your heels, stand tall."),
("Lat Pulldown","","3 × 10–12","90s","Pull the bar to your upper chest, elbows toward your back pockets."),
("DB Romanian Deadlift","","3 × 8–12","2 min","Soft knees, push hips back, dumbbells slide down the front of your legs."),
("Machine Shoulder Press","","3 × 8–12","90s","Handles start around chin height. Don't arch your lower back."),
("Leg Extension","","2 × 12–15","60s","Knee lined up with the pivot. Pause briefly at the top."),
("Plank","","3 × 20–40s","60s","Squeeze glutes, ribs down. End the set when your hips start to sag.")]))
o.append(p("**Finish (optional, for fitness).** 8–10 minutes on the bike, rower or incline walk at a pace where you can talk, but only in short sentences.",before=6,after=0))
o.append(h2("06","Outside the gym"))
o.append(table([td(lab("LEANER")+p("Fat loss is mostly driven by food. Training helps make sure the weight you lose is fat, not muscle. Protein at every meal (a palm sized serve or more) and roughly 7,000–10,000 steps a day.",after=0),250)+td(lab("RECOVERY")+p("Muscle is built while you recover, not while you train. Aim for 7–9 hours of sleep. Sore for a day or two early on is normal. Sharp or joint pain isn't, so stop that exercise and ask.",after=0),250)]))
o.append(p("",after=6))
o.append(table([td(p(f'<span style="{H}color:{W};font-weight:700;font-size:10pt">After 12 weeks.&nbsp;&nbsp;</span><span style="color:{W}">If you\'ve logged your sessions and the weights have gone up, the plan worked. Until then, show up, log it and beat last week.</span>',after=0),500,BLUE,"10pt 14pt")]))
html=f'<html><head><meta charset="utf-8"></head><body style="background-color:#000000;padding:40pt 44pt 40pt 44pt;max-width:507pt">{"".join(o)}</body></html>'
open(sys.argv[1],'w').write(html); print(len(html))

# Compress: repeated inline styles -> CSS classes
import re
src=open(sys.argv[1]).read()
styles={}
def sub(m):
    s=m.group(1)
    if s not in styles: styles[s]=f"c{len(styles)}"
    return f'class="{styles[s]}"'
head,body=src.split('<body',1)
body=re.sub(r'style="([^"]*)"',sub,body)
css="".join(f".{c}{{{s}}}" for s,c in styles.items())
out=f'<html><head><meta charset="utf-8"><style>{css}</style></head><body'+body
open(sys.argv[1],'w').write(out); print("compressed",len(out))
