// Experience data
const experienceData = [
  {
    period: "Mar 2023 - Present",
    role: "Full Stack Developer",
    company: "F22 Labs",
    companyLink: "https://www.f22labs.com",
    description:
      "Engineered a range of full-stack solutions, including a ransomware detection system, document parsing tool, and healthcare data extraction platform. Enhanced application performance and user engagement through optimized APIs and responsive designs. Implemented CI/CD pipelines and conducted technical interviews.",
    techStack: "React • Node.js • Python • AWS • Docker",
  },
  {
    period: "Jan 2022 - Jan 2023",
    role: "Software Development Engineer & Intern",
    company: "Pedals Up",
    companyLink: "https://pedalsup.com",
    description:
      "Developed an e-commerce website using Vue.js and Fynd FDK, implementing features like product listing, search, and payment flows. Built mobile applications including a fleet management app and healthcare apps using React Native, incorporating real-time tracking and user management.",
    techStack: "Vue.js • React Native • JavaScript • Socket.IO • Redux",
  },
];

// Projects data
const projectsData = [
  {
    period: "2021",
    title: "Product Review Sentiment Analysis with SmartBot",
    description:
      "Developed a chatbot for an e-commerce website that analyzes sentiment in product reviews using machine learning and PyTorch. Integrated with Flask and used Beautiful Soup for web scraping to extract product data.",
    techStack: "Python • Flask • PyTorch • Pandas • HTML • CSS",
    status: "completed",
    links: [],
  },
  {
    period: "2021",
    title: "Blueberry Yield Prediction Using RL",
    description:
      "Built a reinforcement learning model to predict blueberry yield based on environmental parameters. Developed a web app with Flask and PostgreSQL, deployed on Heroku, and visualized data using Tableau.",
    techStack:
      "Python • Flask • PostgreSQL • Heroku • Tableau • HTML • CSS",
    status: "completed",
    links: [],
  },
  {
    period: "2021",
    title: "STR-EAT",
    description:
      "Developed a web application for ordering street food, enabling users to place orders and vendors to manage outlets. Built with React JS, Express, Node JS, and MongoDB, integrating Google Maps API and SendGrid Mail API.",
    techStack:
      "MERN Stack • Google Maps API • SendGrid Mail API • Heroku",
    status: "completed",
    links: [],
  },
  {
    period: "2020",
    title: "Split ME - Money Management Tool",
    description:
      "Designed and developed an expense management tool to split expenses among friends and family, featuring money management and statistics. Used Django with MySQL as the backend.",
    techStack: "Django • MySQL • HTML • CSS • Bootstrap",
    status: "completed",
    links: [],
  },
];
// Social links data
const socialLinks = [
  {
    name: "Gmail",
    url: "mailto:connect.akshayb@gmail.com",
    icon: "fas fa-envelope",
  },
  {
    name: "Github",
    url: "https://github.com/akshaybhimani",
    icon: "fab fa-github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/akshaybhimani",
    icon: "fab fa-linkedin",
  },
  { name: "Portfolio", url: "https://akshayb.dev", icon: "fas fa-globe" },
];

// Render experience items
function renderExperience() {
  const container = document.getElementById("experience-list");

  experienceData.forEach((item) => {
    const experienceItem = document.createElement("div");
    experienceItem.className = "experience-item";

    const companyHtml = item.company
      ? `<div class="company-description">${item.company}</div>`
      : "";

    const descriptionHtml = item.description
      ? `<div class="job-description">${item.description}</div>`
      : "";

    const linkHtml = item.companyLink
      ? `<a href="${item.companyLink}" class="external-link" target="_blank" title="Open company website"><i class="fas fa-link"></i></a>`
      : "";

    experienceItem.innerHTML = `
      <div class="experience-period">${item.period}</div>
      <div class="experience-content">
        <div class="experience-role">
          <span class="role-title">${item.role}</span>
          ${linkHtml}
        </div>
        ${companyHtml}
        ${descriptionHtml}
        <div class="tech-stack">${item.techStack}</div>
      </div>
    `;

    container.appendChild(experienceItem);
  });
}

// Render project items
function renderProjects() {
  const container = document.getElementById("projects-list");

  projectsData.forEach((item) => {
    const projectItem = document.createElement("div");
    projectItem.className = `project-item ${item.status}`;

    const descriptionHtml = item.description
      ? `<div class="project-description">${item.description}</div>`
      : "";

    const linksHtml =
      item.links && item.links.length > 0
        ? `<div class="project-links">${item.links.map((link) => `<a href="#" class="project-link">${link}</a>`).join("")}</div>`
        : "";

    projectItem.innerHTML = `
      <div class="project-period">${item.period}</div>
      <div class="project-content">
        <div class="project-title-row">
          <span class="project-title">${item.title}</span>
        </div>
        ${descriptionHtml}
        <div class="tech-stack">${item.techStack}</div>
        ${linksHtml}
      </div>
    `;

    container.appendChild(projectItem);
  });
}

// Render social links
function renderSocialLinks() {
  const container = document.getElementById("social-links");

  socialLinks.forEach((link, index) => {
    const socialLink = document.createElement("a");
    socialLink.href = link.url;
    socialLink.className = "social-link";
    socialLink.target = "_blank";
    socialLink.innerHTML = `<i class='${link.icon}' style='margin-right:8px;'></i>${link.name}`;
    container.appendChild(socialLink);
  });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  renderExperience();
  renderProjects();
  renderSocialLinks();
});
