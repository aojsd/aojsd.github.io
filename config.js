const CONFIG = {
  // ============================================================
  // PERSONAL INFO
  // ============================================================
  name: "Michael Wu",
  subtitle: "CS PhD Student @ Yale",

  // ============================================================
  // CONTACT / SOCIAL LINKS
  // Update these with your actual URLs. Set to "" to hide an icon.
  // ============================================================
  links: {
    email: "mw976@yale.edu",
    github: "https://github.com/aojsd",
    linkedin: "https://www.linkedin.com/in/mic-w",
    cv: "assets/cv.pdf",                    // place your CV at assets/cv.pdf
  },

  // ============================================================
  // BIO PARAGRAPHS (shown in the About section)
  // Each string is rendered as a separate <p> tag.
  // You can use HTML inside these strings for links, etc.
  // ============================================================
  bio: [
    `Hi, I am a 4th year Ph.D. student in Computer Science at
     <a href="https://www.yale.edu/">Yale University</a>.
     I am advised by <a href="https://www.cs.yale.edu/homes/abhishek/">Prof. Abhishek Bhattacharjee</a>.
     My broad research interests are in understanding and building new algorithms
     to manage data movement for systems with memory-tiering or swapping.`,

    `I am a recipient of the <a href="https://www.nsfgrfp.org/">NSF Graduate Research Fellowship</a>.`,
  ],

  // ============================================================
  // PUBLICATIONS
  // - "link" can be a URL, a local PDF path (e.g. "assets/papers/file.pdf"), or "" for no link
  // - All links open in a new browser tab
  // ============================================================
  publications: [
    {
      title: "BulletTime: Time Dilation for High-Fidelity Tracing",
      authors: "Michael Wu, Sibren Isaacman, Anurag Khandelwal, Abhishek Bhattacharjee",
      venue: "ISCA 2026",
      link: "assets/papers/ISCA_2026_BulletTime.pdf",
    },
    {
      title: "Characterizing Emerging Page Replacement Policies for Memory-Intensive Applications",
      authors: "Michael Wu, Sibren Isaacman, Abhishek Bhattacharjee",
      venue: "IISWC 2024",
      link: "assets/papers/IISWC_2024_MGLRU.pdf",
    },
    {
      title: "Prefetching Using Principles of Hippocampal-Neocortical Interaction",
      authors: "Michael Wu, Ketaki Joshi, Andrew Sheinberg, Guilherme Cox, Anurag Khandelwal, Raghavendra Pradyumna Pothukuchi, Abhishek Bhattacharjee",
      venue: "HotOS 2023",
      link: "assets/papers/HotOS_2023_CLS_Prefetching.pdf",
    },
    {
      title: "Balancing Specialized Versus Flexible Computation in Brain-Computer Interfaces",
      authors: "Karthik Sriram, Ioannis Karageorgos, Ján Vesely, Nick Lindsay, Xiayuan Wen, Michael Wu, Marc Powell, David Borton, Rajit Manohar, Abhishek Bhattacharjee",
      venue: "IEEE Micro Top Picks 2020",
      link: "https://ieeexplore.ieee.org/document/9376262",
    },
    {
      title: "Hardware-Software Co-Design for Brain-Computer Interfaces",
      authors: "Ioannis Karageorgos*, Karthik Sriram*, Ján Veselý*, Michael Wu*, Marc Powell, David Borton, Rajit Manohar, Abhishek Bhattacharjee",
      venue: "ISCA 2020",
      link: "https://ieeexplore.ieee.org/document/9138938",
    },
  ],

  // ============================================================
  // EDUCATION
  // ============================================================
  education: [
    {
      school: "Yale University",
      degree: "Ph.D. in Computer Science",
      date: "2021 – Present",
      detail: "Advisor: Prof. Abhishek Bhattacharjee",
    },
    {
      school: "Rutgers University",
      degree: "B.S. in Computer Science & Mathematics",
      date: "2017 – 2021",
      detail: "",
    },
  ],

  // ============================================================
  // EXPERIENCE
  // ============================================================
  experience: [
    {
      org: "Google",
      role: "Software Engineering Intern (PhD)",
      date: "Summer 2025",
      detail: "TPU Firmware Optimization",
    },
    {
      org: "Yale University",
      role: "Undergraduate Research Assistant",
      date: "2019 – 2021",
      detail: "Worked on HALO, a flexible architecture for implantable Brain-Computer Interfaces",
    },
  ],
};
