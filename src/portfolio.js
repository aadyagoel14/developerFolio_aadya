/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Aadya Goel",
  title: "Hi, I'm Aadya 👋",
  subTitle: emoji(
    "An AI/ML Researcher and Biomedical Engineer 🧬 passionate about bridging artificial intelligence and medicine — from epilepsy detection and genomic analysis to multi-omic COVID research at UPMC, CMU, and beyond."
  ),
  resumeLink: "https://drive.google.com/file/d/1WzyQgD2pYswYnt64yilF0t2M3ghsv-1w/view?usp=sharing", // Add your Google Drive resume link here
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/aadyagoel", // Update with your actual LinkedIn URL
  gmail: "aadyag@andrew.cmu.edu",
  medium: "https://medium.com/@aadyagoel14", // Update with your actual Medium URL
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "AI/ML RESEARCHER AT THE INTERSECTION OF DEEP LEARNING, GENOMICS, AND BIOMEDICAL ENGINEERING",
  skills: [
    emoji(
      "⚡ Build deep learning pipelines for biomedical signal processing, genomics, and clinical data"
    ),
    emoji(
      "⚡ Develop multi-omic and systems biology models integrating transcriptomic, proteomic, and clinical datasets"
    ),
    emoji(
      "⚡ Design and deploy AI tools for healthcare — from seizure detection to cancer prognosis and genomic analysis"
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "TensorFlow / PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Microsoft Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "OpenCV / Image Processing",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "Bioinformatics (Biopython, NCBI BLAST)",
      fontAwesomeClassname: "fas fa-dna"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmuLogo.png"), // Add CMU logo to assets
      subHeader:
        "MS Artificial Intelligence Engineering – Biomedical Engineering (Research Track)",
      duration: "August 2025 – July 2027",
      desc: "GPA: 4.00 | Dean's Honors | Biomedical Engineering Department Head's Fellowship",
      descBullets: [
        "Poster Presenter at the 2025 CMU Forum on Biomedical Engineering (872+ attendees) — showcased a genetic analysis tool for understanding viral pathogenic mechanisms",
        "Emerging Leaders Mentor (2025–present), mentoring undergraduates in leadership and community engagement",
        "Graduate Student Researcher at UPMC collaborating with researchers from UPMC, NIH, and Yale on multi-omic and health technology research"
      ]
    },
    {
      schoolName: "Vellore Institute of Technology, India",
      logo: require("./assets/images/vitLogo.png"), // Add VIT logo to assets
      subHeader:
        "B.Tech Computer Science with Specialization in Bioinformatics",
      duration: "July 2021 – July 2025",
      desc: "CGPA: 8.83 | Class Rank: 15th out of 174 students (Top 8%)",
      descBullets: [
        "Courses: Artificial Intelligence, Data Analytics in Bioinformatics, Molecular Biology, Cell Biology & Genetics, Data Structures & Algorithms, Machine Learning, Probability & Statistics",
        "Capstone: Identification of Suicidal Behavior using Deep Learning Models — NLP and fMRI analysis"
      ]
    }
  ]
};

// Proficiency Section

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning & Deep Learning",
      progressPercentage: "92%"
    },
    {
      Stack: "Biomedical & Genomic Data Analysis",
      progressPercentage: "88%"
    },
    {
      Stack: "Python & Scientific Computing",
      progressPercentage: "90%"
    },
    {
      Stack: "NLP & Signal Processing",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend Development (React, Flutter)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Graduate Student Researcher",
      company: "University of Pittsburgh Medical Centre (UPMC)",
      companylogo: require("./assets/images/upmcLogo.png"), // Add UPMC logo
      date: "September 2025 – Present",
      desc: "Collaborating with Dr. Lianghui Zhang (UPMC), Dr. Siyang Zheng (CMU), and researchers from NIH and Yale on multi-omic research addressing virus-induced endothelial dysfunction.",
      descBullets: [
        "Developing AI/ML and systems biology pipelines integrating transcriptomic, proteomic, and clinical datasets",
        "Building multiscale mathematical models for acute and post-COVID chronic comorbidities",
        "Applying ML to large-scale biomedical data from NIH ACTIV4c, Pitt Long COVID, and other cohorts"
      ]
    },
    {
      role: "Head of Genomics & Lead – Elderly & Women Care Division",
      company: "SETV Global (Healthcare Technology Startup)",
      companylogo: require("./assets/images/setvLogo.png"), // Add SETV logo
      date: "February 2025 – July 2025",
      desc: "Led a team of 40 interns to refine Gene-omere, a pioneering genomic analysis tool. Conducted HMPV analysis submitted to WHO, NIH, and CEPI.",
      descBullets: [
        "Presented Gene-omere at Startup Mahakumbh 2025 in New Delhi to 50,000+ business leaders from 50+ countries",
        "Oversaw marketing and deployment of SETV solutions across Elderly and Women Care divisions"
      ]
    },
    {
      role: "Research Scholar",
      company: "Cambridge Centre for International Research (CCIR)",
      companylogo: require("./assets/images/ccirLogo.png"), // Add CCIR logo
      date: "May 2024 – June 2025",
      desc: "Worked under Dr. Shadi Ghiasi (University of Oxford) on AI in Healthcare — biomedical sensors and EEG signal processing.",
      descBullets: [
        "Authored 'Epilepsy Seizure Detection based on EEG Signals using Machine Learning' — published at ICIITCEE 2025",
        "Awarded CCIR STEM Scholarship and named CCIR Spotlight Scholar; invited to YouTube podcast series"
      ]
    },
    {
      role: "AI/ML Intern → Head of Genomics",
      company: "SETV Global",
      companylogo: require("./assets/images/setvLogo.png"),
      date: "April 2024 – February 2025",
      desc: "Developed AI solutions for chronic disease management. Built Meddonna, an intelligent generative healthcare chatbot with NLP, location-based services, and multilingual speech support.",
      descBullets: [
        "Developed breast cancer multi-class classification model using CNNs on mammography images",
        "Led a team of 25 to build Gene-omere; presented at the 2024 Global AI Summit in Hyderabad to 2,500+ industry leaders"
      ]
    },
    {
      role: "Tech Consulting Intern – Data Analytics Division",
      company: "Ernst & Young, New Delhi",
      companylogo: require("./assets/images/eyLogo.png"), // Add EY logo
      date: "August 2023 – October 2023",
      desc: "Leveraged ML algorithms to personalize a healthcare navigation app. Contributed as a frontend developer in a CDAC and EY smart city initiative.",
      descBullets: [
        "Skills: React.js, Node.js, Flutter, GitHub"
      ]
    },
    {
      role: "Research Intern",
      company: "Global Academic Internship Program, NUS Singapore",
      companylogo: require("./assets/images/nusLogo.png"), // Add NUS logo
      date: "December 2022 – June 2023",
      desc: "Completed GAIP program on 'Data Analytics using Deep Learning'. Developed an Emotion Analysis in Sports model achieving 98.22% accuracy.",
      descBullets: [
        "Collaborated on 'Detection of Stock Market Manipulation using Deep Learning' with Dr. Tan from NUS — under peer review at a Springer journal"
      ]
    },
    {
      role: "Onsite Research Intern",
      company: "Hewlett Packard Enterprise, Singapore",
      companylogo: require("./assets/images/hpeLogo.png"), // Add HPE logo
      date: "December 2022 – January 2023",
      desc: "Completed a Big Data Analytics program, migrated applications to Microsoft Azure, and implemented ML analytics on UCI Datasets."
    }
  ]
};

// Open Source / GitHub

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section

const bigProjects = {
  title: "Featured Projects",
  subtitle: "RESEARCH TOOLS AND AI SYSTEMS I'VE BUILT AT THE FRONTIER OF BIOMEDICINE",
  projects: [
    {
      image: require("./assets/images/geneomereLogo.png"), // Add project image
      projectName: "Gene-omere",
      projectDesc:
        "A pioneering genomic analysis tool capable of detecting genetic abnormalities, classifying 75 organisms, and matching pathogens using a custom RNN model. Features DNA/protein sequence visualization and targeted therapy simulation.",
      footerLink: []
    },
    {
      image: require("./assets/images/epilepsyLogo.png"), // Add project image
      projectName: "Epilepsy Seizure Detection (EEG + Deep Learning)",
      projectDesc:
        "Detecting epilepsy in patients aged 3–22 using EEG brain signals with deep learning and signal processing. Published at ICIITCEE 2025.",
      footerLink: [
        {
          name: "Published Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/10915478" // Add paper link
        }
      ]
    },
    {
      image: require("./assets/images/suicidalBehaviorLogo.png"), // Add project image
      projectName: "Suicidal Behavior Detection",
      projectDesc:
        "NLP and neural networks to identify suicidal tendencies in online social media and fMRI data, classifying adolescents at risk. College capstone project.",
      footerLink: []
    },
    {
      image: require("./assets/images/meddonna.png"), // Add project image
      projectName: "Meddonna – AI Healthcare Chatbot",
      projectDesc:
        "Intelligent generative chatbot using NLP for healthcare assistance with location-based services and multilingual speech & text support.",
      footerLink: []
    }
  ],
  display: true
};

// Achievements Section

const achievementSection = {
  title: emoji("Achievements & Publications 🏆"),
  subtitle:
    "Published research, awards, and recognitions across AI, biomedical engineering, and genomics.",

  achievementsCards: [
    {
      title: "CCIR Spotlight Scholar & STEM Scholarship",
      subtitle:
        "Nominated as CCIR Spotlight Scholar for exceptional research. Admitted to the highly competitive CCIR Future Scholars Program (5 students per course). Invited to the CCIR Student Research Scholars YouTube podcast.",
      image: require("./assets/images/ccirLogo.png"),
      imageAlt: "CCIR Logo",
      footerLink: [{
          name: "View Podcast",
          url: "https://youtu.be/E6tlqdBErek?si=sLnZ0OfvOsbOlqI2" // Add paper link
        }
      ]
    },
    {
      title: "IEEE ICCCNT 2024 – Published Paper",
      subtitle:
        "Published 'Enhancing Image Feature Matching Detection: ORB & HDBSCAN Algorithm Integration' at the 15th International IEEE Conference on Computing, Communication and Networking Technologies, IIT Mandi.",
      image: require("./assets/images/ieeeLogo.png"), // Add IEEE logo
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/10724016" // Add paper link
        }
      ]
    },
    {
      title: "IEEE ICCCIT 2025 – Published Paper",
      subtitle:
        "Published 'Leveraging Artificial Neural Networks for Breast Cancer Detection and Prognosis' at the IEEE International Conference on Computational, Communication and Information Technology.",
      image: require("./assets/images/ieeeLogo.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/10927800" // Add paper link
        }
      ]
    },
    {
      title: "CMU Biomedical Engineering Department Head's Fellowship",
      subtitle:
        "Awarded the prestigious Department Head's Fellowship at Carnegie Mellon University's Biomedical Engineering department.",
      image: require("./assets/images/cmuLogo.png"),
      imageAlt: "CMU Logo",
      footerLink: []
    },
    {
      title: "Springer Journal – Under Peer Review",
      subtitle:
        "Research on 'Detection of Stock Market Manipulation using Deep Learning' (NUS Singapore) is under peer review at a Springer journal and available as a preprint on Research Square, ResearchGate, and OUCI.",
      image: require("./assets/images/springerLogo.png"), // Add Springer logo
      imageAlt: "Springer Logo",
      footerLink: [{
          name: "View Paper",
          url: "https://europepmc.org/article/ppr/ppr767548" // Add paper link
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Writing",
  subtitle:
    "I write about equitable healthcare, women in STEM, and the future of biomedical AI.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://aadyagoel14.medium.com/who-deserves-innovation-why-equitable-healthcare-is-the-future-49aeffca6cf3", // Update with actual URL
      title: "Who Deserves Innovation? Why Equitable Healthcare Is the Future",
      description:
        "Exploring why equitable access to healthcare innovation is not just a moral imperative but a scientific one."
    },
    {
      url: "https://medium.com/illumination/why-coffee-hits-you-differently-and-its-not-your-personality-2e0f1619a375", // Update with actual URL
      title: "Why Coffee Hits You Differently (and It’s Not Your Personality)",
      description:
        "Unpacking the science of what makes us weird, wired, and wonderful in analogies."
    }
  ],
  display: true
};

// Talks Section

const talkSection = {
  title: "Talks & Presentations",
  subtitle: emoji("SHARING RESEARCH AT CONFERENCES AND SUMMITS AROUND THE WORLD 🌏"),

  talks: [
    {
      title: "Gene-omere: Revolutionizing Genomic Research",
      subtitle: "2024 Global AI Summit, Hyderabad — 2,500+ industry leaders",
      slides_url: "",
      event_url: ""
    },
    {
      title: "Genetic Analysis Tool for Viral Pathogenic Mechanisms",
      subtitle: "2025 Carnegie Mellon Forum on Biomedical Engineering — 872+ attendees",
      slides_url: "",
      event_url: ""
    },
    {
      title: "Gene-omere at Startup Mahakumbh 2025",
      subtitle: "New Delhi — 50,000+ global business leaders, part of 'Startup India @ 2047'",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true
};

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "FEATURED ON THE CCIR STUDENT RESEARCH SCHOLARS YOUTUBE SERIES",
//   podcast: [
//     "https://youtu.be/E6tlqdBErek?si=isT1DGPFWvxm6zPe" // Add your CCIR podcast/YouTube embed link here
//   ],
//   display: true
// };

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaboration or just want to connect? My inbox is open!",
  number: "+1 412 616 5863",
  email_address: "aadyag@andrew.cmu.edu"
};

// Twitter Section (hidden — not in resume)

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true; // Open to research collaborations and opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
