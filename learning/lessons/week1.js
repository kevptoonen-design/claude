window.WEEKS = window.WEEKS || [];
window.WEEKS[0] = {
title: "Endocrine foundations",
blurb: "Everything later depends on this week. Once you understand how hormones send messages, how the testosterone control loop works, and how a blood test can mislead, you can reason through any hormone question instead of memorising answers.",
days: [
{
t: "How hormones work: the three classes",
why: "Every claim you will hear, from testosterone cream to an oral peptide capsule, depends on what kind of molecule it is. Learn this today and you can judge a claim before you have even opened the study.",
sections: [
 { h: "A hormone is a message, and the receptor is the lock", p: [
  "A hormone is a chemical message. One organ releases it into the blood, the blood carries it everywhere, and it changes what another organ does. The message is sent to the whole body, but only cells with the right receptor can read it. Think of it as a key that only fits certain locks.",
  "This is why testosterone has a big effect on muscle and a small effect on many other tissues. Muscle is packed with androgen receptors. The amount of receptor in a tissue is half the story, the amount of hormone is the other half."
 ]},
 { h: "Class 1: peptide hormones (the doorbell)", p: [
  "Peptide hormones are chains of amino acids, the same building blocks as the protein in your food. Insulin, growth hormone, LH, FSH and GLP-1 are all peptides.",
  "They dissolve easily in water, so they travel freely in blood. But they cannot pass through a cell's outer membrane, because that membrane is made of fat. So their receptor sits on the outside of the cell. When the hormone binds, the receptor sets off a chain reaction inside the cell. It is like ringing a doorbell. The visitor never comes in, but everyone in the house reacts.",
  "Because this works through fast chemical signalling, peptides act within seconds to minutes. Enzymes in the blood also break them down quickly. Insulin's half-life is only about five minutes. Fast on, fast off."
 ]},
 { h: "Class 2: steroid hormones (the visitor who walks in)", p: [
  "Steroid hormones are built from cholesterol. Testosterone, estradiol, progesterone and cortisol are all steroids.",
  "They are fat-soluble, so they slip straight through the cell membrane. Their receptor sits inside the cell. The hormone and receptor pair travels into the nucleus and switches specific genes on or off. That is like a visitor walking into the house and rewriting the instructions on the fridge.",
  "Changing genes means the cell has to build new proteins, and that takes hours to days. So steroids are slower to act, but their effects last longer. That makes sense for something like muscle growth, which is literally the process of building new protein.",
  "One catch: fat-soluble molecules do not dissolve well in watery blood, so steroids need carrier proteins to travel. That is Day 3."
 ]},
 { h: "Class 3: amine hormones (the in-betweens)", p: [
  "Amine hormones are made from a single amino acid. Adrenaline behaves like a peptide: surface receptor, very fast. Thyroid hormone behaves like a steroid: it gets inside the cell and changes gene activity. You do not need to memorise this class, just know it exists."
 ]},
 { h: "Why chemistry decides how a drug can be given", p: [
  "Swallow a peptide and your stomach acid and digestive enzymes chop it into amino acids, exactly as they would a steak. Almost nothing reaches the blood intact. That is why insulin, semaglutide and nearly every therapeutic peptide is injected under the skin.",
  "Steroids are small and fat-soluble, so they can cross skin, which is why testosterone gels and creams work. They can also survive the gut, but the liver destroys most swallowed testosterone on its first pass. Old oral steroids were chemically modified to survive that, and those modifications are why they are hard on the liver."
 ]}
],
example: { h: "Worked example: the oral peptide claim", p: [
  "A client shows you a peptide sold as a capsule. Using today: peptides are digested like food protein, so the first question is whether anything gets absorbed at all.",
  "The best real-world proof of how hard this is: oral semaglutide exists, but it needs a special absorption enhancer and a 14 mg daily dose, which is close to 100 mg a week, to do roughly what a 1 mg weekly injection does. Only around 1% gets absorbed.",
  "So the honest question for any oral peptide is not \"can it be oral?\" but \"where is the human data showing it gets into the blood?\""
]},
key: [
 "Peptides: amino acid chains, surface receptors, fast acting, short lived, usually injected.",
 "Steroids: built from cholesterol, enter the cell, change gene expression, slower but longer lasting, can cross skin.",
 "Route of delivery follows directly from the chemistry."
],
read: "Endotext, chapter \"Principles of Hormone Action\" (free at endotext.org). Or the introduction to endocrinology chapter in Guyton & Hall, Textbook of Medical Physiology.",
apply: "Explain to an imaginary client, in three sentences, why an oral peptide capsule deserves questions. Record it on your phone, play it back and cut anything vague.",
quiz: [
 { q: "Why can testosterone work as a skin gel when most peptides cannot be swallowed?", a: "Testosterone is a small, fat-soluble steroid, so it passes through the fatty layers of the skin into the blood. Peptides are chains of amino acids, and the stomach's acid and enzymes break them down into single amino acids like any food protein, so very little reaches the blood intact." },
 { q: "Why do steroid hormones act more slowly than peptide hormones, but last longer?", a: "Steroids work by entering the cell and switching genes on or off, which means the cell has to build new proteins. That takes hours to days, but the new proteins persist. Peptides trigger fast signalling at the cell surface and are broken down in the blood within minutes." }
]
},
{
t: "The HPG axis: the testosterone control loop",
why: "This loop explains why TRT shuts down sperm production, why steroid users crash after a cycle, why stress and under-eating lower testosterone, and how a doctor works out where a hormone problem actually is. Once it clicks, half of men's hormone health makes sense.",
diagram: "hpg",
sections: [
 { h: "Three organs, one chain of command", p: [
  "HPG stands for Hypothalamus, Pituitary, Gonads. Picture a small company.",
  "The hypothalamus, at the base of the brain, is the manager. It decides how much testosterone the body needs. The pituitary, a pea-sized gland just below it, is the supervisor who passes the orders on. The gonads (testes in men, ovaries in women) are the factory that actually makes the hormone.",
  "Orders go down the chain. The manager releases a hormone called GnRH (gonadotropin-releasing hormone) in short bursts, about every one to two hours. Those bursts tell the supervisor to release two hormones into the blood: LH (luteinising hormone) and FSH (follicle-stimulating hormone).",
  "The pulsing matters. If GnRH is given continuously instead of in pulses, the pituitary actually shuts down. Doctors use exactly this trick to switch off testosterone in prostate cancer treatment."
 ]},
 { h: "What LH and FSH do in a man", p: [
  "LH travels in the blood to the testes and switches on the Leydig cells. Leydig cells make about 95% of a man's testosterone.",
  "Some of that testosterone enters the blood, and that is what your blood test measures. But a large amount stays inside the testes. Testosterone inside the testes runs at roughly 50 to 100 times the level in the blood. Hold onto that number, because it explains the fertility problem below.",
  "FSH acts on a different cell type, the Sertoli cells, which nurse developing sperm. Sperm production needs both things at once: FSH, plus that very high local testosterone inside the testes."
 ]},
 { h: "Negative feedback: the thermostat", p: [
  "The system regulates itself like the heating in a house. The hypothalamus and pituitary are the thermostat. The temperature they read is the level of testosterone (and estradiol, which is made from testosterone) in the blood.",
  "Room too cold, meaning testosterone is low: the thermostat calls for heat, so more GnRH, more LH, more testosterone. Room warm enough: the thermostat switches the heater down. This is called negative feedback, because the output (testosterone) switches off its own signal.",
  "The Sertoli cells also release a hormone called inhibin, which specifically turns down FSH. Between them, these feedback signals keep testosterone in a fairly stable range."
 ]},
 { h: "What happens when testosterone comes from outside", p: [
  "Now put a portable heater in the room. That heater is TRT or anabolic steroids. The thermostat reads a warm room and switches the central heating off.",
  "Step by step: blood testosterone goes up, so GnRH drops. LH and FSH fall to almost zero. The Leydig cells lose their signal and stop making testosterone. Testosterone inside the testes collapses, even though the blood level looks normal or high, because the blood level is now coming from the injection.",
  "Without high local testosterone and without FSH, sperm production falls, often to zero within a few months. The testes shrink, because most of their volume is sperm-making tissue. This effect is reliable enough that the World Health Organization trialled weekly testosterone injections as a male contraceptive in 1990.",
  "When the outside testosterone stops, the thermostat has to restart the system from cold. That can take months, and after long or heavy use it sometimes never fully recovers. You will meet that in Week 2 as anabolic steroid-induced hypogonadism.",
  "This also explains why doctors sometimes use hCG in men who want to keep fertility. hCG mimics LH, so it switches on the Leydig cells directly, bypassing the shut-down brain signal. You do not need the protocol, just the logic."
 ]},
 { h: "Primary vs secondary: how a doctor finds the fault", p: [
  "When testosterone is low, the doctor checks LH. LH tells them whether the problem is in the factory or in the management.",
  "Primary hypogonadism means the factory is broken. The testes themselves are damaged, from causes like a genetic condition (Klinefelter syndrome), injury, chemotherapy or mumps. The brain notices low testosterone and shouts louder, so LH and FSH are high. The signal is fine. The testes are not responding.",
  "Secondary hypogonadism means the management is broken. The problem is in the pituitary or hypothalamus. Common causes are obesity, opioid use, past steroid use, a prolactin-secreting pituitary tumour, severe stress or chronic under-eating. LH is low, or sits in the normal range. A normal LH is still a sign of a problem here, because with low testosterone it should be high.",
  "Heating analogy: in primary, the house is cold because the heater is broken, and the thermostat is demanding heat. In secondary, the house is cold because the thermostat is not calling for heat at all."
 ]},
 { h: "Women: the same loop with a twist", p: [
  "Women run the same three organs. LH and FSH drive the ovaries to grow a follicle and make estradiol and progesterone. Feedback is mostly negative too, except at one point: mid-cycle, high and sustained estradiol flips briefly to positive feedback, triggering a big LH surge that causes ovulation. Week 3 covers this.",
  "The pill works on the same principle as TRT suppressing sperm. Outside estrogen and progestin tell the brain the system is already full, so the brain stops sending the signal to ovulate."
 ]}
],
example: { h: "Worked example: three men, three stories", p: [
  "Man A: testosterone 7 nmol/L (low), LH 18 IU/L (high). The brain is shouting and the testes are not answering. Primary hypogonadism. The doctor looks at the testes.",
  "Man B: testosterone 7 nmol/L (low), LH 2 IU/L (low to normal). The brain is barely asking. Secondary hypogonadism. The doctor asks about weight, sleep, opioids and steroid history, and checks prolactin, possibly with a pituitary scan.",
  "Man C: testosterone 35 nmol/L (high), LH under 0.1 IU/L (switched off), trying for a baby without success. The high testosterone with a fully suppressed LH points straight at testosterone coming from outside the body."
]},
key: [
 "Hypothalamus (GnRH, pulsed) → pituitary (LH, FSH) → testes (testosterone, sperm).",
 "Testosterone and estradiol switch the signal down: negative feedback, like a thermostat.",
 "Outside testosterone switches off LH and FSH, so testes stop making their own testosterone and sperm.",
 "Low T with high LH = primary (testes). Low T with low or normal LH = secondary (brain)."
],
read: "Endotext, \"Physiology of Testicular Function\" (free). Or the hypothalamic-pituitary-gonadal chapter in Greenspan's Basic & Clinical Endocrinology.",
apply: "Draw the loop from memory on paper. Arrows down for signals, arrows back up for feedback. Then draw a syringe of outside testosterone and mark what happens to GnRH, LH, FSH, testicular testosterone and sperm. If you can draw it without looking, you own it.",
quiz: [
 { q: "A man has low testosterone and high LH. Primary or secondary hypogonadism, and why?", a: "Primary. The high LH shows the brain is sending a strong signal, trying to push testosterone up, but the testes are not responding. The fault is in the testes themselves, not in the brain." },
 { q: "Why does TRT reduce sperm production even though blood testosterone is normal or high?", a: "The outside testosterone switches off GnRH, so LH and FSH fall to almost nothing. The testes stop making their own testosterone, so testosterone inside the testes, which normally runs 50 to 100 times higher than in blood, collapses. Sperm production needs that high local testosterone plus FSH, so it stalls. The blood level is high only because it is coming from the injection." },
 { q: "Why can a man's testosterone stay low for months after stopping a steroid cycle?", a: "During the cycle the brain switched LH and FSH off and the testes went quiet. When the steroids stop, blood testosterone drops, but the brain and testes have to restart from a shut-down state. That restart takes time, and after long or heavy use it may not fully recover." }
]
},
{
t: "Binding proteins: total vs free testosterone",
why: "A total testosterone number on its own can say a man is low when he is fine, or fine when he is low. Knowing why is what separates someone who reads a blood test from someone who understands it.",
diagram: "binding",
sections: [
 { h: "Why steroids need a ride", p: [
  "Steroids are fat-soluble. Blood is mostly water. Fat and water do not mix, like oil in a glass of water. So testosterone needs carrier proteins to travel around the body.",
  "There are two main carriers. SHBG (sex hormone binding globulin) is made by the liver and grips testosterone very tightly. Think of a seat with the seatbelt locked. Albumin, the most common protein in blood, grips loosely. Think of a seat with no seatbelt. As blood passes through tissue, testosterone can easily hop off albumin.",
  "A small amount travels with no carrier at all. That is free testosterone, roughly 1 to 3% of the total, usually about 2%."
 ]},
 { h: "Which part actually does the work", p: [
  "Only testosterone that is not locked onto SHBG can get into cells. So free testosterone plus the loosely held albumin-bound testosterone together are called bioavailable testosterone. That is the useful part.",
  "SHBG-bound testosterone acts more like a reserve tank. It is in the blood and it shows up on a total testosterone test, but tissues cannot use much of it.",
  "Important detail: the brain's thermostat mostly senses free testosterone. That is the number the body is actually defending."
 ]},
 { h: "What pushes SHBG up and down", p: [
  "SHBG goes up with: ageing, an overactive thyroid, liver disease, estrogen (including the oral contraceptive pill), being very lean or under-eating, and some medications.",
  "SHBG goes down with: obesity, insulin resistance and type 2 diabetes, an underactive thyroid, androgen or anabolic steroid use, and some steroid medications like prednisone.",
  "The insulin link is worth understanding. High insulin tells the liver to make less SHBG. So a low SHBG is often a quiet marker of poor metabolic health. That is useful for you as a coach, because it is something training and nutrition directly improve."
 ]},
 { h: "The trap: two men, two wrong conclusions", p: [
  "Trap one, the heavier man. Obesity lowers SHBG. Fewer seats means less total testosterone can be carried, so the total number comes back low. But the brain defends free testosterone, so free testosterone can still be normal. Read the total alone and you would wrongly call him deficient.",
  "To be fair, obesity also lowers testosterone for real. Fat tissue converts testosterone into estradiol, which feeds back to the brain and dials the signal down, and inflammation adds to that. So in heavier men there is often a bit of both: a number that looks worse than it is, and a real suppression that losing fat can reverse.",
  "Trap two, the older lean man. Ageing raises SHBG. More seats with locked belts. His total testosterone can look comfortably normal while his free testosterone is low. Read the total alone and you would miss a real deficiency."
 ]},
 { h: "How free testosterone is measured", p: [
  "The gold standard, equilibrium dialysis, is accurate but expensive and not widely available. The cheap direct free testosterone tests (analogue immunoassays) are unreliable, and the Endocrine Society advises against using them.",
  "So doctors usually calculate free testosterone from total testosterone, SHBG and albumin using a formula called the Vermeulen equation. Many Australian labs report it automatically if SHBG is ordered. The practical rule: in any borderline or confusing case, total testosterone should come with SHBG and a calculated free testosterone."
 ]}
],
example: { h: "Worked example: who is more deficient?", p: [
  "Man A, 38, BMI 34. Total testosterone 9 nmol/L (looks low). SHBG 15 nmol/L (low). Calculated free testosterone comes out around 250 pmol/L, about 2.8% free, which is in a normal range for most labs.",
  "Man B, 62, lean. Total testosterone 13 nmol/L (looks fine). SHBG 70 nmol/L (high). Calculated free testosterone comes out around 155 pmol/L, about 1.2% free, which is low for most labs.",
  "Man B has the higher total and the bigger problem. Man A's best first move is fat loss, which will raise SHBG and also lift the real suppression. Exact cut-offs vary by lab, so always read against the lab's own range."
]},
key: [
 "About 2% of testosterone is free. Most is carried on SHBG (tight) or albumin (loose).",
 "Free plus albumin-bound = bioavailable, the usable part.",
 "Obesity and insulin resistance lower SHBG. Ageing raises it.",
 "Borderline cases need SHBG and calculated free testosterone, not total alone."
],
read: "Bhasin et al. 2018, \"Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline\", J Clin Endocrinol Metab. Read the section on measuring free testosterone.",
apply: "Write a two-line Instagram story answer to \"my total T came back low, do I need TRT?\" that brings in SHBG without jargon.",
quiz: [
 { q: "Name two things that lower SHBG, and explain how that can make total testosterone look misleadingly low.", a: "Obesity and insulin resistance (also an underactive thyroid or steroid use). Low SHBG means fewer carrier seats, so less total testosterone is carried in the blood and the total number reads low. But the brain defends free testosterone, so the usable free fraction can still be normal." },
 { q: "Man A: total 9 nmol/L with low SHBG. Man B: total 13 nmol/L with high SHBG. Who is more likely to be truly deficient?", a: "Man B. His high SHBG locks up more of his testosterone, so his free testosterone is likely low despite a normal-looking total. Man A's low SHBG means more of his smaller total is free, so his usable testosterone may be normal." }
]
},
{
t: "Lab literacy: how a hormone test misleads",
why: "Clients will send you their results. Commenters will quote numbers at you. Most bad hormone advice starts with a badly taken test read at face value. Today you learn to see the problems before anyone interprets the number.",
sections: [
 { h: "Units, and where 0.0347 comes from", p: [
  "Testosterone is reported in ng/dL in the US and in nmol/L in Australia and the UK. Most of the research and social media content you see is American, so you need to convert.",
  "The factor comes from chemistry. A mole of testosterone weighs 288.4 grams. To go from ng/dL to nmol/L you multiply by 10 (to get per litre) and divide by 288.4. 10 divided by 288.4 is 0.0347. So nmol/L = ng/dL × 0.0347. Going the other way, multiply nmol/L by about 28.8.",
  "Quick anchors: 300 ng/dL is about 10.4 nmol/L. 264 ng/dL is about 9.2 nmol/L. 800 ng/dL is about 27.8 nmol/L."
 ]},
 { h: "Time of day changes the number", p: [
  "Testosterone follows a daily rhythm. It peaks in the early morning and falls through the day. In younger men an afternoon reading can be roughly 20 to 25% lower than the morning one. The rhythm flattens with age but does not disappear.",
  "So the Endocrine Society says take the sample in the morning, generally before 10am, or within about three hours of waking for shift workers. An afternoon reading can make a normal man look deficient."
 ]},
 { h: "Food changes the number", p: [
  "Eating, especially sugar, temporarily drops testosterone. In one study (Caronia et al. 2013) a glucose drink lowered testosterone by about 25%, and around 15% of men with normal fasting levels dropped into the low range after it. That is why the test should be fasting."
 ]},
 { h: "One test is not enough", p: [
  "Testosterone varies from day to day. In studies of men with one low reading, a large share, around a third in some studies, came back normal on repeat. That is why every major guideline requires two separate low tests before calling it.",
  "Other things that can drag a reading down: being sick, a run of bad sleep (one week of 5-hour nights lowered daytime testosterone by 10 to 15% in young men in a 2011 study by Leproult and Van Cauter), a big training session the day before, a hard diet, and heavy drinking the night before. Biotin supplements can also interfere with some lab tests and give false results, so clients should tell the lab if they take it."
 ]},
 { h: "Not all lab methods agree", p: [
  "Most labs use immunoassays, which use antibodies to detect the hormone. They are fast and cheap, but antibodies can be fooled by similar molecules, and different brands can give different answers on the same blood. This matters most at low levels, which is exactly where diagnosis happens.",
  "The reference method is LC-MS/MS (liquid chromatography with tandem mass spectrometry), which identifies the molecule by its mass. The CDC runs a Hormone Standardization Program (HoST) that certifies assays as accurate against the reference. The 2026 Endocrine Society statement encourages doctors to use HoST-certified assays for this reason."
 ]},
 { h: "A reference range is a statistic, not a target", p: [
  "Labs build a reference range by testing a group of healthy people and taking the middle 95%. That means 5% of perfectly healthy people fall outside the range by definition, half below and half above.",
  "The range also depends on who was tested. The Endocrine Society's 264 ng/dL cut-off comes from a large 2017 study (Travison et al.) that pooled data from over 9,000 men and used non-obese men aged 19 to 39 as the healthy reference.",
  "\"Optimal range\" charts sold by some clinics are usually not built from outcome data showing people do better at those levels. Being at the 25th percentile is not a diagnosis."
 ]}
],
example: { h: "Worked example: read this result", p: [
  "A client sends: \"Testosterone 8.9 nmol/L. Collected 3:40pm.\" They mention they had worked a night shift, eaten lunch, and been sick last week.",
  "Before anyone interprets it: wrong time of day, not fasting, after a disturbed sleep, recently unwell, and only one test. Five reasons it could read low in a man who is fine. The right move is a repeat early-morning fasting test on two separate days, when well, ideally with SHBG."
]},
key: [
 "ng/dL × 0.0347 = nmol/L (from testosterone's molecular weight of 288.4).",
 "Morning (before 10am), fasting, repeated on two separate days, when well.",
 "Immunoassays can disagree. LC-MS/MS and HoST-certified assays are more reliable.",
 "Reference ranges are the middle 95% of a chosen healthy group, not targets."
],
read: "The CDC Hormone Standardization Program (HoST) overview on cdc.gov. Then re-read the July 2026 Endocrine Society statement entry in your operating memory.",
apply: "Convert in your head, then check: 264, 300, 450 and 800 ng/dL. Then write a short checklist titled \"Before your testosterone test\" that a client could follow.",
quiz: [
 { q: "What conditions should a testosterone test meet before anyone interprets it?", a: "Early morning (before about 10am), fasting, repeated on two separate days, taken when not sick or sleep deprived, and ideally on a reliable, HoST-certified assay." },
 { q: "Convert 300 ng/dL to nmol/L, and explain where the conversion factor comes from.", a: "About 10.4 nmol/L. The factor 0.0347 is 10 divided by 288.4, testosterone's molecular weight. Multiplying by 10 turns per decilitre into per litre, and dividing by molecular weight turns nanograms into nanomoles." },
 { q: "Why do 5% of healthy people fall outside a lab's reference range?", a: "Because the range is defined as the middle 95% of a healthy test group. By definition, 2.5% of healthy people sit below it and 2.5% above it." }
]
},
{
t: "The other hormone systems athletes care about",
why: "Testosterone and estrogen do not run in isolation. Stress hormones, thyroid, growth hormone and insulin all feed into the same system, and they explain the tired, stalled, under-recovered clients you see every week.",
sections: [
 { h: "The stress axis: cortisol", p: [
  "The HPA axis (hypothalamus, pituitary, adrenal glands) runs the same top-down pattern as the HPG axis. The hypothalamus releases CRH, the pituitary releases ACTH, and the adrenal glands release cortisol.",
  "Cortisol is not the enemy. It frees up fuel during exercise, controls inflammation and helps you wake up, which is why it peaks shortly after waking. A hard training session raises it, and that is normal and useful.",
  "The problem is chronic elevation with no recovery: poor sleep, under-eating, high life stress and high training load all at once. A practical note for content: \"adrenal fatigue\" is not a recognised medical diagnosis. The Endocrine Society has said so directly. Feeling burnt out is real, but the label is not."
 ]},
 { h: "Thyroid: the metabolic dial", p: [
  "The hypothalamus releases TRH, the pituitary releases TSH, and the thyroid releases mostly T4. T4 is largely a storage form. Tissues convert it to T3, the active form.",
  "TSH runs opposite to thyroid function. A high TSH means the brain is pushing a sluggish thyroid harder. A low TSH means the thyroid is overactive, or someone is taking thyroid hormone.",
  "Under-eating reduces the conversion of T4 to T3. That is the body saving energy, and it is part of why metabolism slows in long diets. It is an adaptation, not a disease. Taking thyroid hormone to fight it is a bad idea outside medical care."
 ]},
 { h: "Growth hormone and IGF-1: why one GH test is useless", p: [
  "Growth hormone is released in pulses, and the biggest pulse comes in deep (slow-wave) sleep, usually soon after you fall asleep. Between pulses, GH can be almost undetectable.",
  "So a single GH blood test is like taking one photo of a strobe light. You might catch a flash or you might catch darkness. It tells you almost nothing.",
  "GH tells the liver to make IGF-1, which stays fairly stable across the day. So IGF-1 is used as the overall measure of GH activity. One more myth worth killing: the short GH and testosterone spike after a workout does not drive muscle growth. A 2010 study by West and colleagues trained arms under high-hormone and low-hormone conditions and found no difference in muscle or strength gain."
 ]},
 { h: "Insulin", p: [
  "Insulin is the main storage hormone. It moves glucose and amino acids into cells after a meal. It is anabolic, but its bigger relevance here is insulin resistance, which lowers SHBG and is tied up with lower testosterone in men and with conditions like PCOS in women."
 ]},
 { h: "How they connect: the body's priority list", p: [
  "The body ranks its jobs. Staying alive and fuelled comes first. Reproduction is expensive and comes much later.",
  "When energy is short for a long time, or stress and training load are high with poor recovery, the brain dials down GnRH. Low leptin (a hormone from fat tissue that signals energy stores) and high cortisol both feed into this.",
  "In men, that shows up as lower testosterone, sometimes called the exercise-hypogonadal male condition. In women it shows up as irregular or missing periods. Either way, these hormones are warning lights for under-recovery and under-fuelling, not just sex hormones."
 ]}
],
example: { h: "Worked example: the 12-week cut", p: [
  "A male client is 10 weeks into a hard diet for a physique show, training twice a day. He reports low libido, feeling cold, poor sleep and flat sessions.",
  "What is likely going on: low energy availability has dialled down the HPG axis (lower testosterone), reduced T4 to T3 conversion (feeling cold, slower metabolism), and stress plus poor sleep are keeping cortisol up. None of this means he needs hormones. It means the dose of dieting and training has outrun his recovery. A diet break, more food and a training deload are the first tools, and if symptoms persist after he is back at maintenance, he sees a doctor."
]},
key: [
 "Cortisol is necessary. Chronic elevation without recovery is the problem.",
 "TSH runs opposite to thyroid function. Dieting lowers active T3 as an energy-saving adaptation.",
 "GH is pulsed, so IGF-1 is the useful measure. Post-workout hormone spikes do not drive growth.",
 "Under energy shortage or chronic stress, the brain turns reproduction down first."
],
read: "West DW et al. 2010, \"Elevations in ostensibly anabolic hormones with resistance exercise enhance neither training-induced muscle hypertrophy nor strength of the elbow flexors\", J Appl Physiol. Abstract and discussion.",
apply: "List five symptoms clients commonly report (always tired, low libido, missed periods, always cold, stalled progress). Match each to the system most likely involved and mark which ones mean see a doctor now.",
quiz: [
 { q: "Why is IGF-1 measured instead of growth hormone itself?", a: "GH is released in short pulses, mostly in deep sleep, and can be nearly undetectable between them, so a single GH test is random. IGF-1 is made by the liver in response to GH and stays stable across the day, so it reflects overall GH activity." },
 { q: "Why does a long, hard diet often lower testosterone and make people feel cold?", a: "The body prioritises survival over reproduction. Low energy availability makes the brain dial down GnRH, so testosterone falls, and it also slows the conversion of T4 to active T3, which lowers metabolic rate and heat production." }
]
},
{
t: "Case day: the low testosterone that wasn't",
kind: "case",
why: "Today you put the whole week together on one realistic client. This is exactly the conversation you will have in DMs, so walk through it slowly and make sure each step uses something you learned.",
sections: [
 { h: "The case", p: [
  "A 34-year-old man, BMI 32, sleeps around 5 hours a night and his partner says he snores. He had one blood test at 2pm after lunch. Total testosterone came back 9.5 nmol/L, flagged low. He has seen a clinic advertising TRT and wants to start."
 ]},
 { h: "Step 1: is the test valid? (Day 4)", p: [
  "No. It was an afternoon sample, so it could read 20 to 25% lower than his morning level. It was not fasting, so lunch may have dropped it further. He sleeps 5 hours, which alone can knock 10 to 15% off. And it was only one test. Any of these could put a normal man under 10 nmol/L."
 ]},
 { h: "Step 2: is total testosterone telling the truth? (Day 3)", p: [
  "His BMI of 32 means his SHBG is probably low. Low SHBG drags total testosterone down while free testosterone may be fine. Without SHBG and a calculated free testosterone, nobody can say he is deficient."
 ]},
 { h: "Step 3: where would the problem be? (Day 2)", p: [
  "If his testosterone is genuinely low on proper tests, LH and FSH tell the doctor where to look. In a man like this, the likely pattern is secondary: low or normal LH, because obesity and poor sleep are suppressing the brain's signal. A doctor would also check prolactin."
 ]},
 { h: "Step 4: the sleep question (Day 5)", p: [
  "Snoring plus obesity raises the possibility of obstructive sleep apnoea, which lowers testosterone and is a real health risk on its own. Untreated severe sleep apnoea is also a reason guidelines are cautious about starting TRT. This is a GP conversation."
 ]},
 { h: "Step 5: the clinical pathway and your role", p: [
  "A doctor would repeat early-morning fasting tests on two separate days, add SHBG, LH, FSH and prolactin, and assess his sleep. The 2026 Endocrine Society statement adds that when obesity is the cause, weight loss should generally come first, before TRT.",
  "Your role: build the training, nutrition and sleep plan that may fix the number on its own, and get him to the right doctor with the right questions. That is not a lesser role. For this man, it is the treatment."
 ]}
],
example: { h: "What you would actually say to him", p: [
  "\"That result doesn't tell us much yet. It was taken in the afternoon after food, on 5 hours of sleep, and it's one test. Testosterone drops on all three. Ask your GP for two morning fasting tests with SHBG, and mention the snoring. Meanwhile we'll get your sleep and body fat moving, because both of those raise testosterone on their own.\""
]},
key: [
 "Validate the test before interpreting the number.",
 "In heavier men, ask for SHBG and calculated free testosterone.",
 "LH tells you primary vs secondary.",
 "Sleep and body fat are treatments, not side notes."
],
read: "Re-read your operating memory entries on the 2026 Endocrine Society statements (July and September). Write down every specific requirement they list.",
apply: "Write a full Instagram caption, \"Your testosterone test might be wrong\", built from this case. One version, general population, ending by naming the paid step (Strong & Lean or Premium Coaching). Check it for em-dashes and the \"X. Not Y.\" rhythm before you call it done.",
quiz: [
 { q: "List the problems with this man's single test result.", a: "Afternoon sample (testosterone peaks in the morning), not fasting (food lowers it), short sleep (lowers it), only one test (day-to-day variation), and no SHBG or free testosterone (obesity lowers SHBG, which drags total testosterone down)." },
 { q: "Per the 2026 Endocrine Society statement, what should come first for a man whose low testosterone is caused by obesity?", a: "Weight loss should generally be tried first, before TRT, when obesity is the identified cause and there is no other reason for the low testosterone." }
]
}
]};
