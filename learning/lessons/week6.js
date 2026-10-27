window.WEEKS = window.WEEKS || [];
window.WEEKS[5] = {
title: "Becoming the expert people trust",
blurb: "Reading research like a clinician, bloodwork literacy, scope of practice and red flags, the advertising rules that apply to your business, and how to explain risk so people actually act on it. Then the capstone.",
days: [
{
t: "Read a study like a clinician",
why: "Commenters will throw studies at you. The skill is not knowing every paper. It is being able to look at any paper and quickly see what it can and cannot tell you.",
sections: [
 { h: "The hierarchy of evidence", p: [
  "From strongest to weakest for answering \"does X cause Y?\": systematic reviews and meta-analyses of randomised trials, then individual randomised controlled trials (RCTs), then cohort studies (following groups over time), then case-control studies, then case reports and expert opinion. Mechanism and animal studies sit underneath, useful for ideas but not proof in humans.",
  "Position stands and consensus statements (ACSM, Endocrine Society, IOC) sit on top as synthesis: experts weighing all of the above. That is why your operating memory treats them as the highest-priority sources."
 ]},
 { h: "Relative vs absolute risk", p: [
  "Relative risk tells you how much the risk changed compared with the starting point. Absolute risk tells you how many people it actually affects.",
  "If risk goes from 2 in 1,000 to 3 in 1,000, the relative increase is 50%. The absolute increase is 1 in 1,000, or 0.1%. Same data, very different feeling. Headlines almost always use relative numbers because they sound bigger. Always find the absolute numbers."
 ]},
 { h: "NNT and NNH", p: [
  "Number needed to treat (NNT) is how many people need the treatment for one to benefit. Number needed to harm (NNH) is how many for one to be harmed. Both are calculated as 1 divided by the absolute risk difference.",
  "Example from TRAVERSE: atrial fibrillation went from 2.4% to 3.5%, an absolute difference of 1.1%. 1 divided by 0.011 is about 91. So roughly 1 extra case of atrial fibrillation for every 91 men treated over about two years. That is a number a person can actually weigh."
 ]},
 { h: "Why observational studies cannot prove cause", p: [
  "Confounding: something else explains both. People who use saunas 4 to 7 times a week may also be wealthier, less stressed and healthier to begin with (healthy-user bias), which is why your sauna log entry says to treat the mortality data as observational.",
  "Reverse causation: the outcome causes the exposure. Sick men often have low testosterone because illness lowers it, not necessarily the other way round.",
  "Observational data are still valuable, especially when the effect is large, consistent and has a sensible mechanism. But they suggest, and only trials confirm."
 ]},
 { h: "Quick checklist for any paper", p: [
  "Who was studied (age, sex, health, training status)? How many? For how long? What was the primary endpoint, and was it a hard outcome or a surrogate? Was there a control group, and was it randomised? Who funded it? And does the headline match what was actually measured?",
  "On a hazard ratio or relative risk, look at the 95% confidence interval. If it crosses 1, the result is not statistically significant."
 ]}
],
example: { h: "Worked example: rewrite a headline", p: [
  "Headline: \"New drug doubles risk of side effect X\".",
  "Look up the paper: side effect X happened in 0.4% of the placebo group and 0.8% of the drug group. Absolute increase: 0.4%. NNH: 1 ÷ 0.004 = 250. Rewritten: \"About 1 extra person in every 250 treated had side effect X.\" Still worth knowing. Far less frightening, and far more useful."
]},
key: [
 "Meta-analyses of RCTs > RCTs > cohorts > case reports. Position stands synthesise all of it.",
 "Always convert relative risk to absolute risk.",
 "NNT or NNH = 1 ÷ absolute risk difference.",
 "Observational studies suggest. Trials confirm. Watch for confounding and reverse causation."
],
read: "Greenhalgh, How to Read a Paper, the chapters on statistics for the non-statistician and on papers that report trials. Then re-read the TRAVERSE abstract with this checklist.",
apply: "Find one scary health headline from the past month and rewrite it in absolute numbers, with an NNT or NNH. If it reads well, it is a post.",
quiz: [
 { q: "Risk goes from 4 per 1,000 to 6 per 1,000. What are the relative and absolute increases, and what is the NNH?", a: "Relative increase: 50%. Absolute increase: 2 per 1,000 (0.2%). NNH: 1 ÷ 0.002 = 500." },
 { q: "Why can a cohort study showing sauna users live longer not prove saunas cause longer life?", a: "Confounding. People who use saunas often may differ in other ways (wealth, health, stress, other habits) that also affect lifespan. Only a randomised trial can separate the sauna effect from those differences." }
]
},
{
t: "Bloodwork literacy",
why: "Clients will hand you results and ask what they mean. You do not diagnose, but understanding what each marker tells a doctor, and why test conditions matter, makes you far more useful and far more credible.",
sections: [
 { h: "The male hormone panel", p: [
  "Total testosterone, SHBG and calculated free testosterone (Week 1, Day 3). LH and FSH, to tell primary from secondary (Week 1, Day 2). Estradiol. Prolactin, to rule out a pituitary cause. Haematocrit and a full blood count, as a TRT baseline and safety check. PSA, depending on age. Often iron studies too."
 ]},
 { h: "The female hormone panel", p: [
  "It depends on the question. For cycle problems: FSH, LH and estradiol (often timed to early in the cycle), progesterone (timed to the second half of the cycle to confirm ovulation), prolactin and TSH. Sometimes testosterone and SHBG if PCOS is suspected.",
  "In perimenopause, FSH and estradiol swing so much from cycle to cycle that a single test often cannot confirm or rule it out (Week 3, Day 3). For women over 45 with typical symptoms, diagnosis is usually based on symptoms."
 ]},
 { h: "General markers that matter for your clients", p: [
  "Full blood count (anaemia, haematocrit). Ferritin and iron studies (iron deficiency is common in female athletes and endurance athletes). HbA1c and fasting glucose (blood sugar control). Lipids. Liver and kidney function. TSH (thyroid). Vitamin D where indicated."
 ]},
 { h: "\"Normal\" vs \"optimal\" marketing", p: [
  "Some clinics sell \"optimal ranges\" narrower than the lab's reference range, often aiming for the top end. Ask where the range came from. Is there outcome data showing people do better at those levels? Usually there is not. Remember from Week 1, Day 4 that reference ranges are statistics, not targets."
 ]},
 { h: "Conditions change results", p: [
  "Hard training in the previous 24 to 48 hours can raise muscle enzymes like CK and liver markers like ALT and AST, which can be misread as liver damage. Heavy training and dehydration can shift haematocrit. A hard diet, poor sleep, illness or alcohol can drop testosterone. Biotin supplements interfere with some tests.",
  "So the conditions when blood was taken belong on the record: time, fasting, last hard session, recent illness, supplements."
 ]}
],
example: { h: "Worked example: the scary liver result", p: [
  "A client sends results showing ALT and AST above the range and CK very high. He is panicking about his liver. He did a heavy leg session and a long run the day before.",
  "Muscle damage from hard training releases these enzymes, and CK is a muscle marker. It does not prove a liver problem. The sensible step is for his doctor to repeat the test after 3 to 5 days of easy training. You explain the likely reason, and the doctor confirms it."
]},
key: [
 "Male panel: total T, SHBG, free T, LH, FSH, estradiol, prolactin, haematocrit, PSA.",
 "Perimenopause is usually diagnosed from symptoms, not one hormone test.",
 "Ferritin, HbA1c, lipids, liver, kidney and TSH matter for general health.",
 "Hard training can raise CK, ALT and AST. Record test conditions."
],
read: "Endotext chapters on assessing male hypogonadism and female reproductive hormones, or a current RACGP resource on interpreting hormone tests.",
apply: "Build a one-page \"before your blood test\" checklist for clients: timing, fasting, no hard training 48 hours before, list supplements (including biotin), ask for a copy of results.",
quiz: [
 { q: "Why is perimenopause usually diagnosed from symptoms rather than an FSH test?", a: "FSH and estradiol swing widely from cycle to cycle in perimenopause, so a single test can look normal even in a woman who is clearly in transition." },
 { q: "Why might a client's liver enzymes look high after hard training?", a: "Muscle damage releases ALT and AST (as well as CK) into the blood, so heavy training in the previous day or two can raise them without any liver problem. A repeat test after rest clarifies it." }
]
},
{
t: "Scope of practice and red flags",
why: "Knowing exactly where your role ends is not a limitation. It is what makes doctors trust you, refer clients to you, and what protects your clients and your business.",
sections: [
 { h: "Your role vs a doctor's role", p: [
  "Your role: educate, coach behaviour (training, nutrition, sleep, stress), spot warning signs and refer. A doctor's role: diagnose, prescribe, adjust dosing and monitor.",
  "Practically, that means you never tell a client what dose to take, never interpret a result as a diagnosis, never advise stopping or starting a medication, and never point them to a supplier. You can explain what the evidence and guidelines say, and you can help them prepare good questions for their doctor."
 ]},
 { h: "Refer immediately (same day, or emergency)", p: [
  "Chest pain, palpitations or fainting. Sudden or unusual shortness of breath. A painful, swollen calf (possible clot). Severe headaches with vision changes (possible pituitary problem). Thoughts of self-harm or suicide."
 ]},
 { h: "Refer soon (book a GP)", p: [
  "Suspected low testosterone. Missed periods for three months or more. Menopausal symptoms affecting daily life. A new breast lump or nipple discharge. Unexplained bleeding. Persistent fatigue. Repeated stress fractures. Anyone already using hormones or peptides without medical supervision."
 ]},
 { h: "Build a referral network", p: [
  "Know two or three GPs who are interested in men's and women's health, an endocrinologist, a sports physician, and a women's health or menopause doctor. When you refer, send a brief note: what you noticed, what you have been working on, and what you would like them to assess.",
  "Doctors remember coaches who refer well. Over time, that relationship runs both ways and becomes one of the most valuable assets in your business."
 ]}
],
example: { h: "Worked example: the referral note", p: [
  "\"Hi Dr Smith, I coach [client] for strength training. Over the past two months she's reported missing three periods, recurring fatigue and a recent foot pain that worsens with running. She's been training 6 days a week and her intake seems low for her load. I'd appreciate your assessment for low energy availability and bone health. We've reduced her running volume in the meantime. Happy to adjust training based on your advice.\""
]},
key: [
 "You educate, coach, spot and refer. Doctors diagnose, prescribe and monitor.",
 "Never advise on doses, never diagnose, never point to a supplier.",
 "Immediate: chest pain, breathlessness, calf swelling, severe headache with vision change, self-harm thoughts.",
 "A referral network is a business asset."
],
read: "Your operating memory sections on the Sports Doctor voice and the peptide business context. Then write your own scope statement in one paragraph.",
apply: "Write your referral script: what you say to the client, the note you send the GP, and how you follow up. Save it as a template.",
quiz: [
 { q: "List five red flags that mean an immediate medical referral.", a: "Chest pain or palpitations, sudden shortness of breath, a painful swollen calf (possible clot), severe headache with vision changes, thoughts of self-harm. Fainting also counts." },
 { q: "Name three things a coach should never do on hormone or peptide questions.", a: "Advise on doses, diagnose from results, tell someone to start or stop a medication, or point them to a supplier. (Any three.)" }
]
},
{
t: "Advertising rules and selling ethically",
why: "This lesson directly affects your peptide company and your content. Getting it wrong can mean regulatory action. Getting it right lets you talk about this space confidently and legally.",
sections: [
 { h: "The core rule in Australia", p: [
  "Under the Therapeutic Goods Act and the Therapeutic Goods Advertising Code, prescription-only (Schedule 4) and controlled (Schedule 8) medicines cannot be advertised to the public. That covers most peptides discussed in this course, testosterone and HRT.",
  "The Code also restricts health claims about serious conditions, and since 2022 it bans testimonials from people who were paid or given an incentive for therapeutic goods. Registered health practitioners have extra rules from AHPRA."
 ]},
 { h: "Education vs advertising", p: [
  "Education explains what a substance is, what the evidence shows and what the regulatory status is, without promoting a specific product, brand, price or where to get it. Advertising is anything designed to promote the use or supply of a specific therapeutic good to consumers.",
  "The line can blur. A post that explains BPC-157's evidence is education. The same post with a link to a shop that sells it, or a discount code, starts to look like advertising."
 ]},
 { h: "What this means for your two businesses", p: [
  "Strength Elite sells training, nutrition coaching and programs. Those are what your CTAs point to on hormone and peptide content. A caption on GLP-1 drugs can end with \"if you want a program that protects your muscle while you lose weight, link in bio\". That points to your coaching, not to a medicine.",
  "Your peptide company is a separate matter. Get advice from a regulatory lawyer who works with therapeutic goods on how your content, your brand and that business connect, before you post peptide content that could be seen as linking to it."
 ]},
 { h: "Why this also builds trust", p: [
  "Accounts that push products with every post lose credibility with the audience you most want. Clear, evidence-based education with an honest status line positions you as the trusted voice, which is what eventually drives sales of your actual services."
 ]}
],
example: { h: "Worked example: audit two captions", p: [
  "Caption A: \"BPC-157 heals injuries fast. DM me for the best source.\" Problems: an efficacy claim not supported in humans, and promoting supply of a Schedule 4 substance. Do not post.",
  "Caption B: \"BPC-157 has strong animal research, and the first proper human trial for hamstring strains is running now. It's prescription only in Australia and banned in sport. If you're dealing with recurring hamstring issues, the proven fix is eccentric strength work done consistently. Our Athletic Program builds it in.\" Education, accurate status, CTA points to coaching."
]},
key: [
 "Schedule 4 and 8 medicines cannot be advertised to the public in Australia.",
 "Education explains. Advertising promotes a specific product or supply.",
 "CTAs on this content point to your coaching, not to medicines.",
 "Get a regulatory lawyer to review how your content and peptide business connect."
],
read: "The TGA's guidance on advertising prescription-only medicines, and the Therapeutic Goods Advertising Code overview on tga.gov.au.",
apply: "Audit three past or planned posts on hormones or peptides against the TGA guidance. Mark anything that reads as promotion rather than education, and rewrite it.",
quiz: [
 { q: "What is the difference between education and advertising for a Schedule 4 medicine?", a: "Education explains what it is, what the evidence shows and its status, without promoting a specific product or supply. Advertising promotes the use or supply of a specific product to consumers, which is not allowed for Schedule 4 medicines in Australia." },
 { q: "Where should the CTA on a GLP-1 or peptide post point?", a: "To your own coaching services or programs, such as a program that protects muscle during weight loss. Never to a medicine, supplier or discount." }
]
},
{
t: "Communicating risk so people act",
why: "Knowing the evidence only helps if people listen. This lesson is about the communication skills that turn your knowledge into changed behaviour, and into clients.",
sections: [
 { h: "Motivational interviewing: OARS", p: [
  "Motivational interviewing (Miller and Rollnick) is a well-researched way of helping people change. The core is OARS.",
  "Open questions: \"What made you start thinking about TRT?\" instead of \"Are you thinking about TRT?\" Affirmations: recognise effort or good intentions. Reflections: repeat back what you heard in your own words, so they feel understood. Summaries: pull it together and check you have it right.",
  "Why it works: people defend positions they are pushed on, and act on conclusions they reach themselves."
 ]},
 { h: "Elicit, provide, elicit", p: [
  "Before giving information, ask what they already know (elicit). Give the key information briefly (provide). Then ask what they make of it (elicit). It stops you lecturing and shows you where the gaps are."
 ]},
 { h: "Natural frequencies beat percentages", p: [
  "Gerd Gigerenzer's research on risk literacy shows people understand \"3 in 1,000\" far better than \"0.3%\", and \"1 in every 91 men\" far better than \"a 45% increase\". Use whole numbers of people out of a group, and always give the comparison: \"versus 2 in 1,000 without it\"."
 ]},
 { h: "Lead with what they want", p: [
  "A man asking about TRT usually wants energy, drive, muscle and confidence. Start there. Then show that the fastest route to those is often fixing sleep, body fat and training, and getting a proper diagnosis if needed. You are not blocking what they want. You are showing them a better path to it."
 ]},
 { h: "Never mock the question", p: [
  "Someone asking about peptides or hormones is curious and motivated. That is a client worth having. Respect the question, then educate. Mocking it just sends them to someone who will sell them anything."
 ]},
 { h: "Check understanding: teach-back", p: [
  "At the end, ask them to explain the plan back in their own words. \"Just so I know I explained it well, what are you going to ask your GP?\" It is used in medicine because it catches misunderstandings before they cause problems."
 ]}
],
example: { h: "Worked example: the same answer, two ways", p: [
  "Lecture: \"TRT is a bad idea. You need two tests first and it shuts down your fertility.\"",
  "OARS: \"What's making you think about it? ... So the main thing is you've been flat for months and your training has stalled. That's frustrating, especially when you're putting the work in. Can I share what usually causes that, and how doctors work out whether it's testosterone? ... What do you make of that?\" Same information. Far more likely to land."
]},
key: [
 "OARS: open questions, affirmations, reflections, summaries.",
 "Elicit, provide, elicit. Ask before telling.",
 "Use natural frequencies: \"3 in 1,000\", not \"0.3%\".",
 "Lead with what they want. Check understanding with teach-back."
],
read: "Miller & Rollnick, Motivational Interviewing (3rd edition), the chapters on the core skills (OARS). Or Gigerenzer, Risk Savvy, the chapter on health risk.",
apply: "Role-play \"Should I go on TRT or peptides?\" as a 10-minute mock consult with a friend. Use OARS. Record it and count every time you lectured instead of asked.",
quiz: [
 { q: "What does OARS stand for?", a: "Open questions, Affirmations, Reflections, Summaries." },
 { q: "Rewrite \"a 0.3% risk\" as a natural frequency, and say why that is better.", a: "\"About 3 in every 1,000 people.\" People understand counts of people in a group far better than percentages, especially small ones." }
]
},
{
t: "Capstone: teach it back",
kind: "case",
why: "Today proves you own this material. If you can explain it without notes to a stranger, write about it clearly, and answer the questions from memory, you are ready to use it in your coaching and content.",
sections: [
 { h: "Part 1: the full self-test (30 minutes)", p: [
  "Go back through all six weeks and answer every quiz question from memory, out loud or on paper, before opening the answer. Score yourself honestly. Anything you miss goes onto a review list for next week, and you re-read that lesson's explanation."
 ]},
 { h: "Part 2: the teach-back video (10 minutes)", p: [
  "Pick one topic you now know cold, for example the HPG axis and why TRT affects fertility, or how to read a testosterone result. Teach it on camera for 10 minutes with no notes. If you get stuck, that is the gap to go back to."
 ]},
 { h: "Part 3: the clinic article (60 minutes)", p: [
  "Write a 500+ word clinic page article in first person, no CTA: \"What TRT actually is, and who it is for\". It should cover what testosterone does, how deficiency is diagnosed (two morning fasting tests, symptoms, named thresholds), why weight and sleep come first when they are the cause, what TRAVERSE showed in absolute numbers, and why proper diagnosis changes the risk picture.",
  "Check every sentence against your tone rules: no em-dashes, natural rhythm, firm and educational."
 ]},
 { h: "Part 4: plan the next month", p: [
  "One hormone or peptide post every week, each built from an evidence card, each re-checked for current status before posting, each with a CTA pointing to coaching. Put them in your content calendar now."
 ]}
],
example: { h: "What \"ready\" looks like", p: [
  "You can explain, without notes: the HPG loop and why outside testosterone shuts down sperm production; why total testosterone can mislead; the Endocrine Society diagnosis rules; what TRAVERSE found in absolute terms; the HRT timing window and why WHI was misread; how semaglutide is engineered and what it does to muscle; and BPC-157's evidence and status. If you can do all of that, you know more than most people posting on this topic."
]},
key: [
 "Self-test everything from memory before checking answers.",
 "Teach one topic on camera without notes.",
 "Write the TRT clinic article.",
 "Schedule a month of evidence-checked content."
],
read: "Your full operating memory hormone and peptide log, start to finish. Notice how much more of it makes sense now than six weeks ago.",
apply: "Publish or schedule the teach-back video as a post or Story series. Check the copy for em-dashes and the symmetrical AI rhythm before it goes out.",
quiz: [
 { q: "Explain, in four sentences, why a man on TRT may become infertile.", a: "Outside testosterone raises blood levels, which the brain reads as \"enough\". GnRH falls, so the pituitary stops releasing LH and FSH. Without LH, the testes stop making their own testosterone, so the very high testosterone inside the testes collapses. Sperm production needs that local testosterone plus FSH, so it falls, often to zero." },
 { q: "State BPC-157's evidence and status in one or two sentences.", a: "Strong animal data, a two-person safety pilot, and a Phase II hamstring trial recruiting with no published human efficacy results. Schedule 4 in Australia, prohibited by WADA, and recommended by PCAC in July 2026 but not yet legally compoundable in the US." }
]
}
]};
