/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ella's Portfolio",
  description:
    "A passionate professional, specialising in AI, Data Science, Data Analytics, Business Intelligence and Marketing.",
  og: {
    title: "Ellaendrea Tan Portfolio",
    type: "website",
    url: "https://ellaennylt.github.io",
  },
};

//Home Page
const greeting = {
  title: "Ellaendrea Tan Yee Ling",
  logo_name: "EllaTan",
  nickname: "Ella Tan",
  subTitle:
    "A Master's graduate in Artificial Intelligence and a professional Marketer👩🏻‍💻, specialising in AI, Data Science, Data Analytics, and Business Intelligence.",
  resumeLink:
    "https://drive.google.com/file/d/1S5ILsw_VkoyBu2E0gw4SaVzelooSjTAw/view?usp=drive_link",
  githubProfile: "https://github.com/ellaennylt",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/ellaennylt",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ellaendreatan/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ellaendrea.tyl@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Gathering and analysing datasets to identify trends, patterns, and insights that can help businesses make better decisions",
        "⚡ Developing and implementing machine learning models for various use cases",
        "⚡ Communicating findings through visualisations to stakeholders",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },        
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent",
          },        
        },
        {
          skillName: "Deep Learning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "devicon:matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Marketing",
      fileName: "DesignImg",
      skills: [
        "⚡ Conducting market research to understand consumer needs and analyze data to identify market trends",
        "⚡ Developing and executing strategic marketing plans and campaigns across various channels, such as digital, social media, and traditional media",
        "⚡ Building and managing a brand's image through effective messaging and communication strategies",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Office",
          fontAwesomeClassname: "mdi:microsoft-office",
          style: {
            color: "#ea3e23",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
        },
        {
          skillName: "GIMP",
          fontAwesomeClassname: "devicon:gimp",
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of cutting-edge technology tools, with a particular focus on pre-trained models and NLP.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "My published research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "fuzzy-logic-approach-to-predicting-rainfall-patterns",
      name: "Fuzzy Logic Approach to Predicting Rainfall Patterns",
      createdAt: "2024-05-01T00:00:00Z",
      description: "Paper published in IEEE Xplore.",
      url: "",
    },
  ],
};

const campaignsHeader = {
  title: "Campaigns & Other Initiatives",
  description: "Marketing campaigns that I have spearheaded and/or participated in.",
  avatar_image_path: "projects_image.svg",
};

const campaigns = {
  data: [
    {
      id: "whole-year-campaign",
      name: "Spread Joy, Spread Love",
      description: "A full year campaign that aimed to encourage dairy consumption.",
      url: "https://dreamwithanchor.com/",
    },
    {
      id: "cny-campaign",
      name: "New Year, Niu You",
      description: "Chinese New Year camapaign that targeted the masses.",
      url: "https://fb.watch/rL1icTGTKP/",
    },
    {
      id: "raya-campaign",
      name: "Jom Raya",
      description: "Raya camapaign that targeted the masses.",
      url: "https://fb.watch/rL1mqdQe_S/",
    },
    {
      id: "social-media",
      name: "Social Media Marketing",
      description: "Managed the full year marketing calendar and content for social outlets.",
      url: "",
    },
    {
      id: "content-writing",
      name: "Content Writing",
      description: "Write-ups on company events.",
      url: "https://ecoknights.org.my/?s=ellaendrea+tan",
    },
    {
      id: "npd-launch",
      name: "NPD Launch",
      description: "New product launch for a dairy brand in Malaysia.",
      url: "",
    },
    {
      id: "perfect-store",
      name: "Perfect Store Rollout",
      description: "Perfect Store plan execution for key customers.",
      url: "",
    },
    {
      id: "pbs",
      name: "Customised Marketing for Customers",
      description: "Digital and offline marketing efforts to drive customers' products.",
      url: "",
    }
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  publicationsHeader,
  publications,
  campaignsHeader,
  campaigns,
};
