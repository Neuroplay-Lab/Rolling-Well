"use client";
import { venueOrganisers, mainOrganisers } from "./Organisers";

// ─── DATA ────────────────────────────────────────────────────────────────────
// Add new entries here as the programme grows. type: "talk" | "workshop" | "roundtable"
// theme is used for the category badge colour and grouping.

export type Session = {
  type: "talk" | "workshop" | "panel";
  theme?: string;
  title: string;
  speakers?: Speaker[];
  sponsors?: Sponsor[];
  abstract?: string;
  duration?: string;
};

export type Speaker = { name: string; affiliation: string; bio?: string };

export type Sponsor = { name: string; url: string };

export const sessionData: Session[] = [
  // ── TALKS ──────────────────────────────────────────────────────────────────
  {
    type: "talk",
    theme: "TTRPGs & Neurodiversity",
    speakers: [
      {
        name: "Dr Steven Samuel",
        affiliation: "Dept. of Psychology & Neuroscience, City St. George's, University of London",
        bio: "Steven is an experimental psychologist whose principal interests are in perspective taking, in particular the cognitive representations of others' beliefs and perceptions. He is also interested in bilingualism and the relationship between language and thought. A long-term TTRPG player, he has more recently turned his attention to the psychological questions that TTRPGs might help to answer. He is currently writing a book entitled The Psychology of Table-top Role-Playing Games, for CRC Press.",
      },
    ],
    title: "Why do people play TTRPGs, and are there benefits to gaming? Insights from the Autism Spectrum Quotient and a measure of perspective taking in experienced gamers.",
    abstract: "Why are table-top role-playing games (TTRPGs) like Dungeons & Dragons - highly social games with a heavy reliance on pretence - popular with autistic people despite the association of autism with difficulties with pretend play, social communication, and perspective taking? In this survey of 319 TTRPG hobbyists from the general (i.e., non-clinical) population, greater autistic traits as measured by the Autism-Spectrum Quotient were associated with greater importance attached to the simulative and problem-solving aspects of the games but lower importance to the socialising component. The attraction of TTRPGs for those with greater autistic traits therefore may be due to an enjoyment of the mathematical and historical simulation of environments, people and actions, and finding solutions to problems and puzzles, all in spite of the social component rather than because of it. Additionally, in TTRPGs players are supposed to make in-game choices based not on what the player would like to do but what the player believes the character would do, i.e. perspective taking. It has been speculated that role-playing might enhance the ability to understand others' perspectives. The same survey found that greater time spent role-playing characters that are more different from one's self is significantly associated with higher scores on the perspective-taking subscale of the Interpersonal Reactivity Index. Implications for TTRPGs as mixed neurotypical/neurodivergent vs neurodivergent-only groups of players is discussed, as well as the promise of future work investigating a potentially causative relationship between some forms of role-playing and enhanced perspective taking skills.",
  },
  {
    type: "talk",
    theme: "TTRPGs & Neurodiversity",
    speakers: [
      {
        name: "Dan Huckfield",
        affiliation: "The Amelia Scott Centre",
        bio: venueOrganisers.filter((o) => o.name === "Daniel Huckfield")[0].bio +
          "" +
          venueOrganisers.filter((o) => o.name === "Daniel Huckfield")[0].bio2 +
          " " +
          venueOrganisers.filter((o) => o.name === "Daniel Huckfield")[0].bio3,
      },
    ],
    title: "Roll for initiative: A TTRPG intervention for mental health of ND people",
    abstract: "This talk examines the potential of museums as sites for community building and social good through a Lottery Heritage Fund-supported project delivered by the Amelia Scott Centre in collaboration with VeryWellMind Kent. The project explored tabletop role-playing games as a creative wellbeing intervention for adults seeking to improve their mental health, responding to a wider sector gap in provision for neurodivergent adults beyond access focused initiatives. While museums have made significant progress in improving physical access and inclusive exhibition practices, there remains limited programming that offers sustained creative activities designed to support neurodivergent adults. The Roll for Initiative programme introduced participants to tabletop role-playing games as a structured yet imaginative practice that combines collaboration, storytelling, and play. Although the group was not originally set up for neurodivergent adults, it quickly became clear that many participants identified as neurodivergent, which led to the programme shifting its focus accordingly. Findings suggest that participants formed meaningful social communities around the hobby and used gameplay in increasingly cathartic ways to process frustration, rehearse coping strategies, and inhabit more empowered, heroic versions of themselves. The paper reflects on key learning from this work and how it has informed the development of future museum-based programmes, highlighting the role museums can play in delivering community-centred wellbeing interventions that combine creativity, inclusion, and social connection (under review, Neurodiversity).",
  },
  {
    type: "talk",
    theme: "TTRPGS and Neurodiversity",
    speakers: [
      {
        name: "Charles Pinel",
        affiliation: "Drumbeat Autism Outreach (Lewisham's Autism Outreach Service)",
        bio: "Charlie Rix-Pinel works with Drumbeat Autism Outreach in Lewisham, supporting schools, families and professionals to better understand and meet the needs of autistic pupils. His work often involves designing and delivering targeted, short-term interventions for individuals and small groups, where he has increasingly uses creative approaches, including TTRPGs. Charlie Rix-Pinel has over 20 years' experience working in educational settings, beginning as a secondary mathematics teacher before specialising in special educational needs. He has held roles including SENCO in a specialist school and in a further education college, developing extensive experience supporting neurodivergent young people. A long-running campaign for neurodivergent students within the college setting helped shape his ongoing use of TTRPGs as a tool to be used within schools to support communication and confidence which he then developed in his current role. Alongside his professional work, Charlie is an experienced Dungeons & Dragons player, Dungeon Master and board game enthusiast.",
      },
    ],
    title: "Finding a Voice: Using TTRPGs to Support Communication and Engagement in Neurodivergent Young People",
    abstract: "This presentation explores how tabletop role-playing games (TTRPGs) can be used as a structured and supportive medium to develop communication, confidence and engagement in neurodivergent young people within an educational context. Drawing on practice as an autism outreach professional, the session focuses on three case studies across primary and secondary settings, each illustrating a different relationship with “voice”. These case studies include: supporting a group of secondary-aged students experiencing situational mutism to participate in cooperative roleplay, working 1:1 with a secondary-aged school avoider through a bespoke TTRPG campaign to re-establish engagement and supporting a primary-aged pupil to develop confidence, clarity and age-appropriate expression through character-based roleplay. Across these examples, TTRPGs are positioned not simply as a tool for social interaction, but as a structured and indirect means of developing expression and voice. The use of character, narrative and rules-based interaction creates a safer space in which young people can experiment with communication, reduce performance anxiety, experiment with voice and develop a sense of agency in how they are heard and understood. The presentation will highlight practical adaptations used to support accessibility, including pacing, scaffolding and the use of characters. It will also reflect on challenges, including variability in engagement, the need for flexibility and the barriers that can affect staff confidence when introducing TTRPG-based approaches. The aim of this presentation is to share three practical case studies which were developed and delivered to young people by the speaker which will highlight how TTRPGs can support the development of voice and engagement in real-world educational contexts when work with neurodivergent young people.",
  },
  {
    type: "talk",
    theme: "TTRPGS and Neurodiversity",
    speakers: [
      {
        name: "Garrick Rahal",
        affiliation: "The Autism Group, Bracknell Forest Council",
        bio: "I am a Youth worker who also loves to play RPGs, specifically “Call of Cthulhu”. I have been playing since the late 80's. I have worked with Neurodiverse young people for 20 years in my Council capacity, and 11 years in the charity sector, 7 years with the Autism group.",
      },
    ],
    title: "Historical Worlds, Written Rules: Using Historical RPGs to Explore Society and Social Etiquette with Autistic Young People",
    abstract: "This talk examines the use of historical tabletop role-playing games (RPGs) as tools for exploring social rules, etiquette, and interaction with autistic young people. While contemporary RPGs can support social connection, historically situated role-play offers a distinctive additional benefit: societies in the past often operate according to explicit, codified rules around hierarchy, manners, roles, and behaviour. These clearly defined expectations can make social structures more understandable, discussable, and negotiable. Drawing on practice-based experience running history-focused RPG groups, this talk explores how historical settings—such as early modern Europe or inter-war Britain—create a safe conceptual distance from the present. This distance allows young people to examine social norms without the immediacy or judgement often associated with real-world social interaction. Social expectations become part of the fictional world rather than implicit demands placed on participants themselves. The paper also considers the role of historical knowledge as a special interest. For some autistic young people, history provides a motivating and grounding area of expertise, which can support confidence, engagement, and leadership within group play. Historical facts, social customs, and period detail become shared points of reference rather than barriers to participation. Finally, the talk argues that historical RPGs function as safe spaces for practising social interaction, where mistakes carry no real-world consequences and reflection is built into play. By making social rules visible and contextual, historical role-play offers a valuable and inclusive way for autistic young people to explore how societies function—both past and present.",
  },
  // {
  //   type: "talk",
  //   theme: "TTRPGS in Educational Settings",
  //   speakers: [
  //     {
  //       name: "Lucas Maxwell",
  //       affiliation: "Author and Librarian",
  //       bio: "Originally from Nova Scotia, Canada, Lucas Maxwell grew up on Nintendo, comic books and Dungeons and Dragons. He has been working in libraries for over fifteen years and is passionate about providing safe and welcoming library spaces for everyone. In 2017 he was named the UK's School Librarian of the Year and in 2024 he was awarded a British Empire Medal (BEM) for his services to libraries. He is proud to be a neurodivergent writer and grateful to be adding his voice to the world of literature. His debut YA, A Million Tiny Missiles All At Once will be published with Chicken House Books in 2026. He currently resides in the UK with his amazing family and Biscuit the chocolate lab.",
  //     },
  //   ],
  //   title: "The Mental Health and Wellbeing Benefits of Dungeons and Dragons",
  //   abstract: "Lucas Maxwell has been running Dungeons and Dragons in his school library for the past eight years. Maxwell will cover how the game has helped bring the school together, created strong friendship groups for both himself and the students and developed strong mental health and wellbeing benefits for those involved, especially neurodivergent players. He feels very strongly about the benefits of D&D and how it can help others as a therapeutic tool. Maxwell will cover how the game has helped bring the school together, created strong friendship groups for both himself and the students and developed strong mental health and wellbeing benefits for those involved, especially neurodivergent players.",
  // },
  {
    type: "talk",
    theme: "TTRPGS in Educational Settings",
    speakers: [
      {
        name: "Sarah Newman",
        affiliation: "Executive Director Children's Services, Westminster City Council and Royal Borough Kensington & Chelsea",
        bio: "Sarah Newman, Executive Director, Bi-Borough Children's Services, Royal Borough of Kensington & Chelsea and the City of Westminster: During her twenty-five years in children's services, Sarah has experienced a range of challenges and built knowledge, skills and experience to drive and sustain improvement across children's services. Sarah seeks to create an environment where people want to work and feel empowered to learn and innovate. Sarah is passionate about working with children and families. She has always maintained a belief about doing the simple things well - putting children first, working together and improving outcomes. Sarah has been keen to explore creative ways to engage children in learning, particularly vulnerable children with SEND. Sarah is a keen tabletop role-playing gamer herself and makes time to attend (and DM for) a neurodiverse dungeons and dragons group. This group was the inspiration for our games library and the Young Dragons pilot. Through Sarah's leadership we are bringing Dragonmeet: A call to Aventure to Kensington for the second year this year.",
      },
      {
        name: "Dr. Yiran Li",
        affiliation: "Imperial College London",
      },
      {
        name: "Sami Altalib",
        affiliation: "Imperial College London",
      },
      {
        name: "Aos Alaa",
        affiliation: "Imperial College London",
      },
      {
        name: "Rebecca Linsley",
        affiliation: "Royal Borough of Kensington & Chelsea",
      },
      {
        name: "Garry Harper",
        affiliation: "Director of Operations, Mythic Minds",
        bio: "Garry Harper, Director of Operations and Lead Storyteller at Mythic Minds, CIC Garry Harper has over a decade of experience in the tabletop games industry. He has collaborated with leading companies including Wizards of the Coast, Modiphius Entertainment, and Son of Oak Game Studio. Garry is also the founder of The Role Play Haven CIC, one of the largest tabletop roleplaying club networks in the UK. Alongside his operational and community work, he is an accomplished writer and game producer, having developed and published multiple tabletop games.",
      },
      {
        name: "David Coulter",
        affiliation: "Clinical Director, Mythic Minds",
        bio: "David Coulter, Clinical Director, Mythic Minds, CIC: David Coulter has over ten years of experience as an occupational therapist. He specialises in supporting children and young people with a range of needs, focusing on emotional wellbeing, engagement, and development through creative approaches. At Mythic Minds, David provides clinical oversight and ensures all programmes are safe, inclusive, and grounded in evidence-based practice. He plays a key role in shaping interventions that use storytelling and tabletop role-playing games to build confidence, social skills, and resilience. David is passionate about combining therapeutic expertise with innovative methods to help young people thrive.",
      },
      {
        name: "Dr. Cornelia Junghans Minton",
        affiliation: "Imperial College London",
      },
      {
        name: "Prof. Austen El-Osta",
        affiliation: "Imperial College London",
      },
    ],
    title: "Young Dragons - using TTRPG to improve children's behaviour in the classroom and improve attendance",
    abstract: "Tabletop role-playing games such as Dungeons & Dragons are increasingly recognised as powerful tools for helping young people forge friendships, manage their emotions, and embark on journeys of self-discovery. Despite their potential, there has been limited evidence from schools about how these games benefit students, or which groups stand to gain the most. Our games library initiative connected us with a vibrant community of games enthusiasts and laid the groundwork for Young Dragons - a Dungeons & Dragons-inspired pilot launched in ten local schools. We focused on children aged 9 to 16 who faced emotional and behavioural challenges and struggled to thrive in classrooms. Over 8 weeks, small groups met to build creative stories together and reflect on their experiences, all under the guidance of a skilled facilitator. The programme's impact was independently assessed by a researcher from Imperial College. Although the quantitative data did not reveal dramatic overall improvements in pupil wellbeing, the findings painted a more nuanced picture. Not all students responded in the same way, yet for some, teachers and parents observed marked improvements in behaviour, with schools reporting fewer suspensions and a modest rise in attendance. Qualitative feedback highlighted the critical importance of creating a safe group environment, fostering teamwork, and encouraging empathy by seeing things from different perspectives. These factors helped pupils build confidence, work more effectively with others, and regulate their emotions. We have continued running Young Dragons in ten local schools this year and believe that role-playing games can serve as valuable safe spaces in schools, where young people can practise social skills and develop self-management strategies. Our pilot offers practical guidance for integrating role-playing games into schools as part of broader mental health and wellbeing strategies, highlighting the conditions necessary for these initiatives to truly succeed.",
  },
  // {
  //   type: "talk",
  //   theme: "TTRPGS in Educational Settings",
  //   speakers: [
  //     {
  //       name: "Alex Drake",
  //       affiliation: "Mental Health Advisor, Student administration and support, University of Liverpool ",
  //       bio: "I'm a registered Mental Health Nurse with twelve years' experience working across various mental health services. I currently work within Student Administration and Support at the University of Liverpool, where my role focuses on student wellbeing, service liaison, risk management, and low-level therapeutic interventions. I regularly co-deliver a DBT skills group for university students. Within my professional work, I also run a neurodivergent board game club that supports social connection, communication, and collaborative problem-solving. With my own personal lived experience of mental health difficulties, I feel this empowers an empathy and understanding when it comes to developing effective therapeutic relationships. I have a particular interest in translating therapeutic principles into accessible, non-clinical contexts. My current interest lies in exploring how the structured, reflective elements of games can support emotional and interpersonal skill development, and how these approaches may complement DBT-informed practice across educational, mental health, and community settings.",
  //     },
  //   ],
  //   title: "Rolling for Regulation: Using TTRPGs to Support Emotional regulation and Interpersonal Skills",
  //   abstract: "Tabletop role-playing games (TTRPGs) are increasingly recognised for their potential to support wellbeing. This workshop explores how participation in TTRPGs can support the development of emotional regulation and interpersonal effectiveness skills, in ways that parallel key elements of Dialectical Behaviour Therapy (DBT) skills groups. Drawing on experience delivering DBT-informed interventions within university mental health support, the workshop examines how elements of TTRPG play; including; role-play, narrative distance, and collaborative problem-solving can create structured opportunities for participants to practise skills such as emotional regulation, distress tolerance, and interpersonal effectiveness. The structured, social, and reflective nature of TTRPGs is considered alongside how DBT skills groups support the development and rehearsal of these competencies. Using guided applied examples, participants will reflect on how specific game mechanics; such as turn-taking, consequence-based decision-making, and character perspective-taking can reinforce emotional and interpersonal skills within an engaging and relatively low-risk environment. The session focuses on understanding processes rather than participating in live gameplay. The workshop will also briefly address practical considerations, including group dynamics, boundary-setting, and adapting play to support a range of participant needs across educational, mental health, and community contexts. Attendees will leave with practical ideas that can be adapted within DBT-informed and wellbeing-focused work.",
  // },
  {
    type: "talk",
    theme: "TTRPGS in Educational Settings",
    speakers: [
      {
        name: "Dr. Sarah Campbell",
        affiliation: "Play Well For Life / University of Bristol ",
        bio: "Dr Sarah Campbell is an award-winning psychologist, educator and game designer, with 15+ years experience working in personal and professional development. She co-founded an award-winning wellbeing app, 87%, has worked on serious games for education and healthcare settings, and her research focusses on adolescent and older adult mental health in community settings. During her PhD in psychology, she created a music-based listening intervention to train emotion regulation. She founded Play Well For Life in 2019, a serious games organisation that develops award- winning social games that support psychosocial development of adolescents, and delivers training to professionals working with young people. Sarah enjoys combining new technologies, such as AR and AI, with evidence-based interventions, taking a co-production approach to all interventions. She has co-edited a new book, “Psychological Digital Practice: the basics and beyond”, published by Open University Press.",
      },
    ],
    title: "Dragons of Afterlands: Co-producing an augmented reality board game to develop socioemotional skills of adolescents in education and healthcare settings",
    abstract: "There is a growing body of evidence of the value of game-based tools, particularly for mental health and wellbeing of young people. The social aspects of board games and role-playing games are particularly useful, at a time when adolescent development requires increasing independence and reliance on peers. However, we identified a gap in mental health and wellbeing tools, which focussed on narrow aspects of wellbeing (e.g. cognitive or emotional) and ignored other important aspects, such as physical health and social skills. We developed Dragons of Afterlands to address the gaps in provision. Dragons of Afterlands is an award-winning, evidence-based augmented reality board game, co-created with young people, psychologists and educators. It can be delivered in person, remotely or hybrid and played one-to-one, with a staff member, or in a small group of peers. Staff are trained as Dragon Champions to facilitate game sessions, with opportunities for young people to become Dragon Leaders, offering empowerment within a peer mentor-type role. Academic trials with Royal Holloway University showed significant improvements in wellbeing, emotional awareness, emotion regulation and social problem-solving, sustained at one-month follow-up. Recent hospital and education trials have been conducted to explore implementation barriers and enablers, with iterative development taking place to address these barriers. Evidence from a trial at Great Ormond Street Hospital will be presented, demonstrating impact on patients within hospitals and the next phases of adoption. Early evidence from an academic trial with University of West of England exploring how the game can reintegrate young people excluded from education due to emotionally-based school non-attendance (EBSNA) will also be presented. This presentation will introduce Dragons of Afterlands and present evidence of how co-production and iterative development can create an inclusive, engaging intervention which works in a range of settings, and shows particular socioemotional benefits for neurodivergent adolescents.",
  },
  {
    type: "talk",
    theme: "TTRPGS in Educational Settings",
    speakers: [
      {
        name: "Vikki Nolan & Sharlene Rudd",
        affiliation: "Role Resolve",
        bio: "Vikki Nolan and Sharlene Rudd are qualified psychotherapists, researchers, and co-founders of Role Resolve, where they specialise in creative, inclusive, and evidence-informed approaches to therapy. Their work focuses on integrating tabletop role-playing games into therapeutic and educational settings to support emotional wellbeing, inclusion, and personal development. Sharlene, who is proudly neurodivergent and has lived experience with ADHD, brings a strong interest in self-compassion and trauma-informed approaches. Together, they combine psychotherapy, creativity, and lived experience to design interventions that empower individuals to feel seen, safe, and supported.",
      },
    ],
    title: "Integrating Therapy into Tabletop Role play: The Impact of Research on Innovation and therapeutic intervention",
    abstract: "Our presentation will examine the role of tabletop role-playing games (TTRPGs) in research, particularly their application as an innovative therapeutic modality. We will present findings from our pilot study on the use of TTRPGs for alleviating social anxiety and introduce a longitudinal study set to commence in January 2025 to further investigate these interventions.",
  },
  {
    type: "talk",
    theme: "TTRPGS in Educational Settings",
    speakers: [
      {
        name: "David Rayner",
        affiliation: "Roll the Dice Cornwall C.I.C.",
        bio: "David Rayner is the Founder and Lead Practitioner of Roll the Dice Cornwall C.I.C., a community interest company dedicated to improving social, emotional, and mental health through the power of in-person gaming. With 14 years of experience as a primary school teacher, David has spent much of his professional life exploring innovative ways to engage, motivate, and support children and young people. Alongside his teaching career, David conducted action research into the use of gamification in education, investigating how game-based approaches can enhance learning, participation, and personal development. Combining this academic and professional expertise with a lifelong passion for tabletop games, roleplaying games, and geek culture, Roll the Dice Cornwall C.I.C. was born. Today, David works with children, young people, and adults across Cornwall, using tabletop roleplaying games, board games, and other face-to-face gaming experiences to foster connection, build confidence, develop social skills, and support positive mental wellbeing.  A firm believer that meaningful play can be transformative, David is passionate about demonstrating how games can be used not only for entertainment, but as powerful tools for improving individual and community wellbeing.",
      },
    ],
    title: "Rolling for Connection: Using Tabletop Roleplaying Games to Improve Social health in children and young people.",
    abstract: "At Roll the Dice Cornwall C.I.C., we use tabletop roleplaying games (TTRPGs) as a powerful tool for supporting children's social health, confidence, and wellbeing. Far more than a hobby, collaborative roleplaying creates structured opportunities for young people to practise communication, teamwork, empathy, problem-solving, and emotional regulation in a safe and engaging environment. This talk explores how TTRPGs can help children build meaningful social connections, particularly those who may struggle with traditional social settings due to anxiety, neurodivergence, isolation, or low confidence. Drawing on our experiences delivering community-based gaming programmes across Cornwall, we will share practical examples of how roleplaying encourages cooperative behaviour, perspective-taking, resilience, and a sense of belonging. Whether you are familiar with roleplaying games or completely new to the hobby, this presentation will demonstrate how a roll of the dice can become a catalyst for friendship, confidence, and healthier social development in children.",
  },
  {
    type: "talk",
    theme: "TTRPGS in Clinical/Therapeutic Settings",
    speakers: [
      {
        name: "Ian McGeoghegan",
        affiliation: "Accredited child and adolescent EMDR (Eye Movement Desensitisation and Reprocessing) Therapy, Founder of Next Chapter Therapy",
        bio: "Ian McGeoghegan is a qualified teacher, social worker, and trauma therapist with more than a decade of experience supporting children and adolescents across education, social care, and CAMHS settings. Their clinical work is grounded in trauma-informed practice, with specialist training in EMDR and narrative-based approaches. They are the founder of Next Chapter Therapy, an organisation dedicated to helping young people process traumatic experiences through structured trauma narratives and EMDR-informed interventions. A lifelong tabletop role-playing game enthusiast, they have spent over 15 years playing and running Dungeons & Dragons games, an interest that now informs their work exploring how TTRPGs can offer safe, engaging pathways for young people to build agency, connection, and emotional resilience.",
      },
    ],
    title: "Healing Trauma wounds with a long rest - Using TTRPs to treat trauma",
    abstract: "There is growing recognition that tabletop role-playing games (TTRPGs) offer meaningful mental health benefits. Their blend of collaborative storytelling, imaginative immersion, and shared problem-solving naturally supports social connection, emotional expression, and a sense of belonging. These elements align closely with what many young people seek in therapeutic work: safety, creativity, and opportunities to explore identity and agency in a contained way. At the same time, play and narrative-based approaches have long been established within therapeutic practice, demonstrating their value in helping children and adolescents process experiences that may be difficult to articulate directly. While play therapy's openness is one of its strengths, more structured models can provide clearer containment, predictable boundaries, and a stronger sense of safety for both the young person and the therapist, not to mention a model which is easier to teach and practice consistently. This is particularly important when working with trauma, where consistency and collaborative control are essential. Yet most therapeutic frameworks are designed for adults and only later adapted for adolescents, often leaving developmental needs unmet and limiting the accessibility of the work. In response to these gaps, I have been collaborating with colleagues in CAMHS and academic settings to develop a therapeutic model that uses the TTRPG format intentionally and systematically. The model aims to help young people explore, reprocess, and integrate traumatic experiences through character-based narratives, guided world-building, and structured reflective practice. Early conceptual work suggests that the combination of imaginative distance and collaborative play may offer a uniquely engaging and tolerable route into trauma-focused work for this age group. This presentation outlines the emerging model, the theoretical foundations informing it, and the proposal for an initial therapeutic trial. Attendees will be invited to ask questions, share ideas, and contribute to shaping the next phase of development, particularly around implementation, evaluation, and safeguarding considerations.",
  },
  {
    type: "talk",
    theme: "TTRPGS in Clinical/Therapeutic Settings",
    speakers: [
      {
        name: "Nan Jiang",
        affiliation: "Trainee Counselling Psychologist, The University of Manchester",
        bio: "Nan Jiang is a Trainee Counselling Psychologist and Doctoral Researcher at the University of Manchester. Their work focuses on therapeutic role-playing games (RPGs) and the intentional design of role-playing environments for therapeutic purposes, alongside broader interests in mental health and artificial intelligence. Their research includes a qualitative metasynthesis examining psychological processes in RPG participation, the development of a self-designed therapeutic RPG, and work on inequality and discrimination in AI-driven mental health systems. This presentation forms part of their doctoral research, translating findings from the metasynthesis into a conceptual framework to inform the design of therapeutic role- playing interventions. With clinical experience working directly with clients in bereavement support, eating disorder services, and university counselling, they bring an applied understanding of client needs and therapeutic aims that informs their approach to designing therapeutic RPGs. A background in engineering and business supports an interdisciplinary approach that bridges research, design, and practice.",
      },
    ],
    title: "A Conceptual Model for the Intentional Design of Therapeutic Role-Playing Games: Insights from a Qualitative Metasynthesis",
    abstract: "Role-playing games, including tabletop and live-action formats, are increasingly being explored for educational, therapeutic, and psychosocial applications. While existing research suggests potential benefits for wellbeing and personal development, little synthesis has examined the underlying psychological and psychosocial processes through which such therapeutic change may occur during gameplay or how these processes are described in empirical studies examining participation in role-playing games. This study aimed to explore how psychological processes associated with therapeutic change are described in empirical research involving participation in role- playing game sessions. A systematic qualitative metasynthesis was conducted to integrate findings from primary empirical studies examining active engagement in tabletop and live-action role-playing games. Twelve studies involving diverse populations and contexts were identified through systematic searches and screening. Findings were analysed using thematic synthesis to interpret processes associated with therapeutic change during gameplay. This review synthesises qualitative evidence on psychological and psychosocial processes associated with therapeutic change during participation in role-playing games. Analysis identified several interrelated experiential processes, including interpersonal engagement during gameplay, experiential challenges within narrative scenarios, decision-making opportunities, motivational engagement, immersive role- play, and character shaping. Understanding these processes may help inform future therapeutic applications of role-playing approaches while highlighting areas for further research. Building on these process themes, a three-dimensional conceptual framework was proposed to understand therapeutic processes in RPG participation and to provide a basis for future work on the intentional design of therapeutic role-playing games, offering guidance for practitioners, designers, and facilitators working across applied settings.",
  },
  {
    type: "talk",
    theme: "TTRPGS in Clinical/Therapeutic Settings",
    speakers: [
      {
        name: "Professor Ian C. Smith",
        affiliation: "Primary Care & Mental; Health, University of Liverpool",
        bio: "Ian C. Smith is a Clinical Psychologist who has practised in the NHS for more than 20 years in adult intellectual disability, severe mental health and forensic services. He is now a Professor of Clinical Psychology at The University of Liverpool, where he works as Programme Director of the Doctorate in Clinical Psychology. Amongst other areas, he has a special interest in how therapy processes work, in NHS staff resilience and wellbeing, and in researching the experience, use and role of playfulness in promoting psychological wellbeing in both clinical services and ‘in the wild'. He has been a part-time GM & RPG player since 1984.",
      },
      {
        name: "Mr. Philip Dakin (TBC)",
        affiliation: "Entrepreneur and Local Independent Games Café founder",
        bio: "Phil Dakin is a sociology graduate and professional GM who founded, owned and ran Lancaster's independent games café 'Board and Sword' for nine years, building a strong, supportive local community of gamers, many of whom experience significant mental health difficulties.",
      },
      {
        name: "Presenting on behalf of their Research Team:",
        affiliation: "Jenny Allen, Trainee Clinical Psychologist at Lancaster University, Dr Miriam Sturdee, Senior Lecturer at the University of St. Andrews",
      },
    ],
    title: "A Positive Modifier for Life: How Bad Dogs, Little Brothers and Cool Confident Liam can make a big difference",
    abstract: "Tabletop roleplaying game (TTRPG) players have increasingly claimed the mental health and psychological wellbeing benefits of playing. In this talk we will provide first-hand accounts and describe our qualitative research exploring the experiences of adults with mental health problems who play TTRPGs socially and the impact of playing on their psychological wellbeing. Eight adults who self-identified as experiencing mental health problems and had played TTRPGs for at least a year took part in semi-structured interviews. Interviews were transcribed and analysed using interpretive phenomenological analysis (IPA). All participants reported that playing TTRPGs had improved their mental health and wellbeing. IPA produced six group experiential themes which described the mechanisms for these improvements. The study found that playing socially contributed to psychological wellbeing, and in addition to echoing previous findings into the clinical use of TTPRGs, identified novel mechanisms by which this took place. These included factors which make the gaming environment safe enough for benefits to occur, how the specific structures of TTRPGs support initial interactions and the development and maintenance of relationships, how creative expression through TTRPGs contributes to the development of positive identities, and the ways that playing improves mood directly. We will outline clinical implications, including how to explore gamer's experiences with them in order to transfer psychological benefits to real life, recommendations for which mental health service users may benefit from being signposted to TTRPGs in the community, and guidance on how the findings could be used to develop therapeutic TTRPGs and incorporate elements of TTRPGs into group therapy for a range of mental health problems. ",
  },
  {
    type: "talk",
    theme: "TTRPGS in Clinical/Therapeutic Settings",
    speakers: [
      {
        name: "Zoe Thomas",
        affiliation: "South West London and St Georges NHS Trust ",
        bio: "Zoe is a Clinical Psychologist who trained at the University of Surrey and now works in Child and Adolescent Mental Health Services in South West London. She is a long-time player of D&D and videogames, interested in reducing barriers to mental health interventions and services. Roll for Insight was completed as part of Zoe's PsychD doctoral thesis, part of her Clinical Psychology training.",
      },
    ],
    title: "Role for Insight: An exploration of Psychological Practitioners' perceptions of Table-top Roleplaying Games",
    abstract: "Despite the historical stigma around tabletop roleplaying games (TTRPGs), TTRPGs are once again being popularised. Research indicates there are a number of benefits to playing TTRPGs, dispelling unfounded claims from the past that they were linked to mental illness. This has led to studies exploring how these games may be incorporated into psychological interventions to support recovery. However, whilst recommendations are being shared through a psychological lens in the literature available, there is a gap in knowledge about psychological practitioners' perceptions of these games, and therefore the wider psychological workforce's perceptions of what has been termed Therapeutically Applied Roleplaying Games (TARPGs). Roll for Insight will present how the study aimed to explore this gap in knowledge by surveying psychological practitioners working in the United Kingdom (UK), across a range of settings, and with a range of client groups. The findings and conclusions will be shared, including recommendations and ideas for future research.",
  },
  {
    type: "talk",
    theme: "TTRPG Design and Best Practice",
    speakers: [
      {
        name: "Ed Jollyboat ",
        affiliation: "Jollyboat",
        bio: "Ed Jollyboat is a professional comedian, storyteller, and game designer. As one half of Jollyboat, he has performed internationally at festivals including the Edinburgh Fringe, Glastonbury, and Download, and won the UK Musical Comedy Awards. Alongside his performance career, Ed has developed a distinctive approach to tabletop roleplaying focused on emotional connection, creativity, and group storytelling. Drawing on influences from improv, therapy, and narrative design, his work explores how games can help people feel seen, safe, and meaningfully connected. His design philosophy centres on empowering players to shape their own stories, fostering what he describes as “group flow” at the table. Through both play and teaching, he aims to bridge the gap between theory and lived experience—helping facilitators create games that are not just entertaining, but genuinely transformative.",
      },
    ],
    title: "Lost in the Autumn Realm - Lessons learned from a community of emotional roleplay",
    abstract: "This talk shares lessons learned from running a community for emotion-first roleplay, which has consistently led to transformative outcomes for its players. The Lost in the Autumn Realm community prioritises creating a space where people feel safe to express themselves, to listen, and to co-create from a place of authenticity. We've found that when players feel supported in bringing their inner lives into play, the fiction becomes a vehicle for self-exploration and growth, and players frequently leave a session feeling seen, understood, and connected. Ed Jollyboat draws from years of study across ludology, improv, therapy, and narrative design, to present a practical framework for bridging the roles of Games Master, facilitator, and community organiser. Through examples and guiding principles, you'll see how cultivating an emotionally attuned play culture can transform even a single session game into meaningful and transformative roleplay experience.",
  },
  {
    type: "talk",
    theme: "TTRPG Design and Best Practice",
    speakers: [
      {
        name: "Jodie Russell",
        affiliation: "Institute for Mental Health, School of Psychology, University of Birmingham",
        bio: "Jodie Russell, Institute for Mental Health, School of Psychology, University of Birmingham: Jodie Louise Russell (she/her) is a Research Fellow at the University of Birmingham on the Epistemic Injustice in Healthcare Project and Birmingham Network for Phenomenology and Mental Health. Her background is in philosophy and her research focusses on ethical dimensions of mental health research. She is also a dungeon master and long-term D&D 5E player.",
      },
      {
        name: "Eleanor Sinfield",
        affiliation: "Institute for Mental Health, School of Psychology, University of Birmingham",
        bio: "Eleanor Sinfield, Institute for Mental Health, School of Psychology, University of Birmingham: Eleanor Sinfield (she/her) is a social worker, CBT therapist and researcher currently based at the Institute of Mental Health in Birmingham. Her research interests are how to better support children in care, particularly exploring interventions that work with groups and systems. She is a 2025e Dungeons and Dragons Dungeon Master and seeks out the weird and dark forces that control our world as a player in Call of Cthulu.",
      },
    ],
    title: "Taking Play Seriously: The Value of Session 0 to Psychological Safety in D&D",
    abstract: "In this talk, we will provide the preliminary results of our study investigating how the phenomenon of “Session 0” within Dungeons & Dragons (D&D) facilitates psychologically safe play among adults, and we will lead a group discussion on the experiences of Session 0 among conference delegates. Session 0 refers to a preliminary meeting held before a campaign begins, during which players and the Dungeon Master might discuss expectations, character concepts, boundaries, and play style. While widely discussed in online communities, the impact of Session 0's on play have received limited scholarly attention. To explore this practice, we randomly selected and analysed ten posts, and their affiliated comment threads, from the online message board platform Reddit. Reflexive thematic analysis (Braun and Clarke 2006) was then used to analyse this data and coding was conducted inductively, with themes developed through iterative engagement with the dataset. We found that while there was a wide variety of reported tools and differing values relating to Session 0, five overarching themes were identified: Sparking Interest, Commitment and Expectations, Safety Tools and the Social Contract, Agency versus Collaboration, and Style of Gameplay. Preliminary findings suggest that Session 0 functions to scaffold collaborative adult play by supporting sustained engagement, reducing interpersonal conflict, and fostering shared ownership of the play experience. These sessions thus act as key ritualised mechanisms for supporting adult players to “take play seriously”. Our talk will elaborate on each of the key themes above and will culminate with our plan for future research on this topic, which we hope to be informed by a short Q&A and feedback session.",
  },
  {
    type: "talk",
    theme: "TTRPG Design and Best Practice",
    speakers: [
      {
        name: "Jemma Channing",
        affiliation: "Arts Council England",
        bio: "Jemma Channing FRSA MRCOT is a Senior Manager for Creative Health and Change at Arts Council England, specialising in the design and delivery of innovative programmes that connect culture, health, and social impact. With a professional background as an occupational therapist in NHS mental health and learning disability services, Jemma brings a unique blend of clinical expertise and creative practice to her work. Jemma is a Fellow of the Royal Society of Arts, a member of the Royal College of Occupational Therapists and sits on the editorial board for The Royal Society for Public Health.",
      },
    ],
    title: "How can play support health and wellbeing?",
    abstract: "In this keynote, Jemma Channing, Senior Manager for Creative Health and Change Programmes at Arts Council England will share insights from her work at the intersection of creativity and health. Drawing on real world examples and case studies, she will reflect on how tabletop role playing games can foster connection, creativity and care, and how partnerships across sectors including health, culture, education and community can unlock the full potential of play to create meaningful social impact.",
  },

  // ── Panels ──────────────────────────────────────────────────────────────
  {
    type: "panel",
    theme: "Industry Organisers",
    speakers: [
      {
        name: "John Dodd",
        affiliation: "Dragonmeet; UK Games Expo; Airecon; Worldcon; Eastercon; Fantasycon",
        bio: "John Dodd has been in games for more than forty years, starting with D&D and moving through the myriad of systems that came about in his life. He is the owner and Director of Dragonmeet, the Director and primary organiser of Dragonmeet: Call to Adventure, a completely free initiative aimed at bringing young people into games in a safe environment. He was the RPG manager for UK Games Expo for the first seventeen years of its existence, and the floor manager for ten years. He started the roleplaying track at Airecon and ran it for six years before handing it off to another conrunner. He has been division head at Worldcon and committee at several Eastercons and Fantasycons. He lives to give others the things that were never available to him as a child of working class parents.",
      },
      {
        name: "Ray Hodson",
        affiliation: "Dragonmeet; Consequences Larp Convention; Bristol Freeform Gamers",
        bio: "Ray Hodson is the Seminar and Live Events Manager for Dragonmeet, the Chair for Consequences Larp Convention and part of the organising committee for Bristol Freeform Gamers. She is a published writer of RPGs and Freeforms and has been running conventions for over 15 years.",
      },
      {
        name: "Adam Best",
        affiliation: "Here for Games (Herefordshire Board Gamers)",
        bio: "Founder and Chair of Here for Games (Herefordshire Board Gamers). I've been personally being running RPGs since primary school (Dungeoneer and Blacksand from Fighting Fantasy) I've run nearly 50 different systems. I love sharing the hobby so I founded Here for Games a not for profit volunteer group which focuses on running free inclusive events, fundraising for Mental health and sharing knowledge. We've run free events regularly since 2015, including Here for Games a free three day convention. Our focus is welcoming, inclusive events and taking games into the community, with a focus on supporting vulnerable and minority groups. We've raised over £32,000 for Herefordshire Mind (from free events!) Our lending library includes over 700 games, RPGs tables chairs, lifesize games and a full collection of Visual impairment friendly games. We've run Seminars at UKGE and Airecon on running inclusive and accessible events and communities since 2022.",
      },
    ],
    title: "Building Community through Play: Organising Inclusive TTRPG Events",
    abstract: "This panel brings together experienced organisers from across the tabletop role-playing game (TTRPG) community to explore the practical realities of designing, running, and sustaining inclusive gaming events. Drawing on experience from conventions, community groups, and outreach initiatives, the panel will examine how TTRPG spaces are created, maintained, and adapted to meet the needs of diverse audiences.  Discussion will focus on three key areas: the organisation of large- and small-scale events, inclusive practice in game facilitation and community management, and strategies for engaging new and underrepresented participants. Panel members will reflect on their experiences working with different groups, including young people, neurodivergent players, and community organisations, highlighting both successes and ongoing challenges.  The session will address practical questions such as: what makes a gaming space feel safe and accessible; how organisers balance structure with flexibility; how events can support positive social interaction; and how TTRPGs can be used to build community and promote wellbeing.  By sharing real-world insights and approaches, this panel aims to move beyond theory and offer concrete guidance for anyone interested in using games to foster inclusive, community-driven spaces.",
  },
  {
    type: "panel",
    theme: "Policy",
    speakers: [
      {
        name: "Dr Gray Atherton",
        affiliation: "Neuroplay lab; University of Plymouth",
        bio: mainOrganisers.find(
          (mo) => mo.name === "Dr Gray Atherton & Dr Liam Cross"
        )?.bio ||
          "" +
          mainOrganisers.find(
            (mo) => mo.name === "Dr Gray Atherton & Dr Liam Cross"
          )?.bio2 ||
          "",
      },
      {
        name: "Jeremy Kimmel",
        affiliation: "The Amelia Scott, Tunbridge Wells",
        bio: venueOrganisers.find((vo) => vo.name === "Jeremy Kimmel")?.bio || "" + venueOrganisers.find((vo) => vo.name === "Jeremy Kimmel")?.bio2 || "",
      }
    ],
    title: "Play as Prevention: Integrating Games-Based Approaches into Wellbeing Services",
    abstract: "This interactive policy workshop will bring together researchers, practitioners, and decision-makers to explore how games-based approaches can be integrated into existing wellbeing systems as scalable, preventative interventions. Positioned within the context of rising demand on mental health services, the session focuses on the role of structured play, particularly tabletop role-playing and social games, in supporting social, emotional, and cognitive wellbeing outside of formal clinical pathways. Drawing on current practice across NHS partnerships, school-based programmes, and community settings, the session will situate games as low-threshold, accessible tools that can complement stepped care models. Rather than replacing clinical provision, games-based interventions offer opportunities for early engagement, skill development, and social connection in familiar, non-stigmatising environments. The session will combinine short provocations with facilitated discussion. Perspectives from healthcare, education, community and government sectors will highlight key challenges and opportunities, including implementation within CAMHS-adjacent services, alignment with social and emotional learning in schools, and delivery through libraries, museums, and local hubs Participants will work collaboratively to address core questions around feasibility, evidence requirements, barriers to adoption, and routes to implementation. Particular attention will be given to safeguarding, evaluation, and the practicalities of embedding games-based approaches within existing systems without increasing pressure on frontline staff. The session will generate concrete outputs, including priority actions, identified evidence gaps, and potential pilot pathways. These will inform a post-event summary, contributing to a developing best-practice framework and supporting future funding applications. The seminar aims to move beyond advocacy toward actionable policy thinking, positioning play as a credible component of preventative wellbeing infrastructure.",
  },

  // ── WORKSHOPS ──────────────────────────────────────────────────────────────
  {
    type: "workshop",
    title: "Hands on with Social Deduction Games (BotCT) as Therapeutic and Pedagogical Tools.",
    speakers: [
      {
        name: "Matthew Murphy",
        affiliation: "BlueStem",
        bio: "I have a background in geochemistry with a focus on using trace elements for the geochemical exploration of orebodies. I started a small R&D company (BlueStem) and we conduct research on a number of process technologies with a broad focus on energy, water, resources, agriculture and automation. I am a long-time board gamer and an avid BotC player and storyteller. I have recently discovered a passion (I didn't know existed in me) in the intersection of psychology and board gaming.",
      },
      {
        name: "Veda Tester",
        affiliation: "BlueStem",
        bio: "I am practicing counsellor and group facilitator with over 8 years' experience. I specialize in supporting and working with neurominority groups and am passionate about finding ways to affirm diverse ways of being in this world. Researching SDGs and their potential therapeutic effects is super exciting as it has potential to be an incredibly accessible (and fun) form of collective therapy.",
      },
    ],
    abstract: "In the literature, Social Deduction Games (SDGs) have been shown to have positive therapeutic and learning outcomes for players. Blood on the Clocktower (BotC) is a SDG with an emphasis on role playing, player agency, and storytelling. We believe that these unique elements of BotC make for not only fun and engaging gameplay but also serves as therapeutic and pedagogical tools for players, especially neurodivergent and queer players. We observed this phenomenon first- hand during hundreds (if not thousands) of hours of gameplay. This is also not a novel observation for many in the BotC community. To this end, Dr. Cross, Dr. Atherton, Dr. Mountford-Brown, Dr. Nicholson, and ourselves are working together to research the therapeutic and pedagogical effects of BotC and how elements of the game can be used in therapeutic and teaching settings. In this workshop, we will run a game of BotC for new and seasoned players alike, we will act as “Storytellers” (a third-party player who runs the game and tries to make enjoyable player experiences (somewhat like a dungeon master)). After the game, we will have an extended session to debrief, let off some steam, and process the collective inter-, and intra-personal experiences. Additionally, we will explore if players felt like any aspects of the gameplay may be therapeutic or teaching in nature. We will also discuss some of our hypotheses further with the group.",
  },
  {
    type: "workshop",
    title: "Who Are You Playing? Zine-Making and the Creative Life of RPG Characters",
    speakers: [
      {
        name: "Professor Paul Wake",
        affiliation: "The Game Centre, Manchester Metropolitan University",
        bio: mainOrganisers.find((mo) => mo.name === "Professor Paul Wake")?.bio ||
          "",
      },
      {
        name: "Dr Chloé Germaine",
        affiliation: "The Game Centre, Manchester Metropolitan University",
        bio: mainOrganisers.find((mo) => mo.name === "Dr Chloé Germaine")?.bio ||
          "" +
          mainOrganisers.find((mo) => mo.name === "Dr Chloé Germaine")
            ?.bio2 ||
          "",
      },
    ],
    abstract: "Roleplaying is about more than rolling dice. When it comes to our characters, we write backstories, keep journals, and even make playlists. This workshop investigates the creative practices of TTRPG character creation and performance as a site for the exploration of identity and the building of relationships both within and without the game world. Using zine-making as our method, we will reflect on the characters we imagine and play in TTRPGs, exploring how they come into being, what they give us, how they exist in relation to others, and where the line between player and character gets blurred. The zines we make are both the record of that reflection and the method for doing it. No craft experience needed. You'll leave with a finished zine and, we hope, ideas about the creative work of roleplaying.",
  },
  {
    type: "workshop",
    title: "Using Games in Neurodiversity Research",
    speakers: [
      {
        name: "Dr Liam Cross & Dr Gray Atherton",
        affiliation: "Neuroplay lab; University of Plymouth",
        bio: mainOrganisers.find(
          (mo) => mo.name === "Dr Gray Atherton & Dr Liam Cross"
        )?.bio ||
          "" +
          mainOrganisers.find(
            (mo) => mo.name === "Dr Gray Atherton & Dr Liam Cross"
          )?.bio2 ||
          "",
      },
    ],
    abstract: "This co-deign session for an upcoming new cooperative board game (NeuroGenesis) will explore how we can sensitively and accurately embed neurodivergent traits as game mechanics, encouraging players to collaborate by recognising and valuing different ways of thinking. \nAlongside the co-design session, participants will take part in a facilitated discussion of neurodiversity using Dixit Elicitation. Originally developed as a research method to explore responses to complex social and interpersonal issues, Dixit Elicitation has evolved into an educational approach that gamifies discussion of topics that are often difficult to talk about. Now used in UK primary schools within the PSHE curriculum, the method supports reflection, empathy, and shared meaning making. Together, the playtest and elicitation activities offer an engaging framework for exploring neurodiversity, cooperation, and inclusive dialogue.",
  },
  {
    type: "workshop",
    title: "Bash Orks, Find Treasure.",
    speakers: [
      {
        name: "Frank Cotterell-Snow",
        affiliation: "Deputy Manager, Shore House, BHT Sussex",
        bio: "I have over 20 years' experience working in frontline homelessness services as a case worker, supporting people individually and through facilitating groups, one of which used computer games to improve wellbeing. I am now the Deputy Manager at Shore House, working with people with a dual diagnosis of mental health issues and substance use. I have a lifelong passion for Dungeons & Dragons and role playing games, and I am a strong advocate for the importance of play which is often missing from adult life.",
      },
      {
        name: "Nils Visser",
        affiliation: "Support Worker, Shore House, BHT Sussex ",
        bio: "I've worked for BHT Sussex for over ten years in various roles at projects in Brighton & Hastings. Afore that, I experienced a stint of 2.5 years being homeless and unemployed, a slight inconvenience at that time (or rather, devastating for my own mental health), but a useful life experience in my current role. Before that I had a nineteen-year career in secondary and higher education in the Netherlands. A highlight was running a school Live Action Role Play club for four years, translating my interest in fantasy and fantasy games into an educational asset, for which I was awarded a prize for educational innovation and invited to participate in the Ministry of Education's think tank for creative policy development. I was chuffed to discover a kindred soul in Frank and delighted that BHT Sussex encouraged us to translate our own interests into a meaningful activity for our residents.",
      },
    ],
    abstract: "This proposal is based on the specific request to include hands-on workshops, as we initially intended to propose only a talk/seminar on the practical implementation of RPG/tabletop activities within a supported accommodation for people with a varied range of mental health diagnoses setting. However, considering that the criteria we devised for an appropriate game included the flexibility to let people join or leave the game at a moment's notice without hampering the (narrative) flow of the game (no restarts required), as well as the ease with which the rules can be picked up, it occurred to us that bringing the game along and simply playing it, allowing multiple people a chance at 5-10 minutes of active participation might actually make for an interesting and engaging workshop. Other than the (always fun) opportunity to bash some orks and find some treasure, actually playing the game addresses a number of key concerns regarding accessibility, ease of set-up and play, a limited durations for settings where the 3-6 hour sessions more complex games can require simply isn't attainable, the reduction of impact should players wish to join or leave mid-game, manageable costs, as well as the possibility to expand the game should a campaign be running well and players want increased challenges.",
  },
  {
    type: "workshop",
    title: "Loosening up: Using lessons from improv for better role playing",
    speakers: [
      {
        name: "Dr Lior Noy",
        affiliation: "Business School, Ono Academic College",
        bio: "Lior Noy, PhD, is a Senior Lecturer at the Business School at Ono Academic College, where he leads the Creative Action Lab and, until recently, headed the Computer Science program. His research explores the dynamics of creative collaboration: how individuals discover new patterns through interaction, particularly in embodied and improvised settings. A central methodological focus of his lab is the development of “model systems” for studying creative collaboration in controlled settings, using computational and experimental paradigms such as the Mirror Game and the Creative Foraging Game. These systems are used to investigate coordination, creative exploration, and, more recently, human-AI co-creativity. Noy's work bridges cognitive science, computer science, and the performing arts, including a long-standing practice in Playback Theatre - an improvisational community theatre form centered on real-life stories.",
      },
    ],
    abstract: "An interesting session of TTRPGs unfolds through shared uncertainty, collective creativity, and the ability to build on each other's ideas. In other words: A central component of TTRPG is the ability to improvise. Although improvisation is often equated with specific forms such as Jazz or Playback Theatre, it is a much widespread phenomenon, appearing, for example, in medical (Kneebone, 2011) and managerial (Cunha et al., 1999) contexts, as well as in the natural development of playful behaviour (Benjamini et al., 2025; Kalaydjian et al., 2022). The proposed workshop suggests a first step into the practice of improvisation for TTRPG participants and educators. We will learn, experience and play with the first tenet of improvisation: the “Yes, And” principle - accepting what others propose and adding to it, and suggest this principle as a possible tool for players and game masters to co-create richer worlds, stories, and relationships.",
  },
  {
    type: "workshop",
    title: "Speech and Sorcery: Exploring vocal gender identity through role-play",
    speakers: [
      {
        name: "Kevin Pasternak",
        affiliation: "Lead Speech and Language Therapist, West of England Specialist Gender Identity Clinic, Devon Partnership NHS Trust",
        bio: "Kevin Pasternak (he/him) is a speech and language therapist specialising in clinical voice disorders and gender affirming voice care. He obtained a Bachelor of Music degree in vocal performance and later trained as a speech and language therapist at Emerson College in the United States. He has worked as lead speech and language therapist at the West of England Specialist Gender Identity Service for four years.",
      },
      {
        name: "Jonathan Bose",
        affiliation: "Lead Speech and Language Therapist, Sussex Gender Service, Sussex Partnership NHS Foundation Trust",
        bio: "Jonathan Bose (he/him) is a speech and language therapist in gender affirming voice care and is part way through his family/couples therapy training. Jonathan has a Batchelor of Music degree (trumpet performance) and later trained as a speech and language therapist at UCL in the UK. He has been leading the voice pathway at Sussex Gender Service since it opened in 2023.",
      },
      {
        name: "Mary Moos",
        affiliation: "Advanced Specialist Speech and Language Therapist, West of England Specialist Gender Identity Clinic, Devon Partnership NHS Trust",
        bio: "Mary Moos (she/her) has been working in gender-affirming voice since training as a speech and language therapist in 2018. Although a complete novice to tabletop roleplaying, she is passionate about all avenues of voice exploration and the possibilities of therapeutic gaming.",
      },
      {
        name: "Jessica Pettitt",
        affiliation: " Sussex Gender Service, Sussex Partnership NHS Foundation Trust",
        bio: "Jessica Pettitt (she/her) is an experienced games master and hobbyist game designer and graphic designer. She was invited to work with the Sussex Gender Service following conversations about her interests in tabletop role-playing games, as a service user. She takes a collaborative storytelling approach as a games master, focusing on delivering cinematic, immersive, and highly interactive sessions, inspired by her love of video games and animation, that encourage player agency and expression. She leverages her experience self-training her voice and the support she received as a service user to create gameplay systems that adapt voice training exercises and scenarios into novel experiences. In her spare time, she's currently designing a dark, science fiction, role-playing game inspired by Japanese mecha animation and video games from the turn of the millennium.",
      },
      {
        name: "Terram Thrace",
        affiliation: "University of East Anglia",
        bio: "Terram Thrace (he/him) is a Natural Sciences undergraduate student at the University of East Anglia and a keen advocate for invertebrates and ecological preservation. He is also a lifelong gamer with a strong interest in game design and development and got involved in tabletop starting in 2020 by creating his own TTRPG system for a group of friends. He has continued to play in, develop, and GM, various games and systems. He received voice therapy at the Laurels GIC, Exeter, and while there developed an interest in the idea of using TTRPG systems in that context.",
      },
    ],
    abstract: "Speech and Sorcery is a short-duration speech and language therapy group intervention for transgender and non-binary (TNB) service users, created and offered at two gender identity clinics in England, the West of England Specialist Gender Identity Clinic in Exeter and Sussex Gender Service in Brighton. Gender affirming voice and communication therapy is offered to TNB service users to improve their comfort and confidence in communication. This workshop will briefly describe a pilot of a bespoke tabletop roleplaying game (TTRPG) created to give players the opportunity to explore vocal identity after individual voice therapy. Delegates will have the opportunity to explore aspects of their own vocal identity in a brief Speech and Sorcery roleplay. Delegates will create characters using the Speech and Sorcery character sheet, which focuses not only on traditional areas of strength and weakness but also on specific vocal attributes. These include rich descriptions (e.g., ‘cunning', ‘wily') and specific technical aspects related to pitch and other vocal gender markers. Our Expert by Experience game masters (GMs) will explain some of the background of the game mechanics, including important aspects of GMing a game focused on voice use. Delegates then will then be given 30 minutes to briefly explore a voice-rich scenario with their characters on tables of 3-4 players. Finally, delegates will be invited to reflect on their experiences, including any learning about their own vocal identity.",
  },
  {
    type: "workshop",
    title: "Therapeutic Mini Painting",
    sponsors: [
      {
        name: "Modular Worlds",
        url: "https://www.etsy.com/uk/shop/ModularWorlds",
      },
      {
        name: "Trans Atlantis Games - Two Thin Coats",
        url: "https://transatlantisgames.com/two-thin-coats/",
      },
    ],
    abstract: "Miniature painting has emerged as a meaningful therapeutic practice, combining focused attention, creativity, and tactile engagement in ways that support mental wellbeing. The deliberate, repetitive actions involved in painting miniature figures encourage mindfulness, helping individuals remain present, regulate attention, and reduce stress through immersion in the process rather than the outcome. This slow, intentional form of creative practice mirrors established mindfulness techniques, offering a calming structure that can be particularly beneficial for emotional regulation and anxiety reduction. Within tabletop role playing game cultures, miniature painting has also become a key point of connection and engagement. Painting miniatures allows players to express identity, personality, and narrative intent through colour, style, and detail, transforming game pieces into personal artefacts rather than generic components. This act of personalisation deepens emotional investment in play while supporting self-expression and a sense of ownership. As such, miniature painting functions both as an individual therapeutic activity and as a social bridge, linking creativity, storytelling, and community participation within the wider TTRPG hobby. Custom Rolling well miniatures were very kindly designed and donated by Modular Worlds, and Two thin Coats kindly donated all of the paints.",
  },
];
