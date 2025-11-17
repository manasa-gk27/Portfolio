// Skills
const skills = [
    "Python", "SQL", "HTML", "Excel", "Machine Learning",
    "Communication", "Adaptability", "Teamwork"
];

// Work Experience
const experience = [
    "Cyber Security Intern – ISAC (Jan 2025 – May 2025): Built a Python-based tool 'Clickjacker' to detect clickjacking vulnerabilities. Gained hands-on experience with Burp Suite and Kali Linux.",
    "Salesforce Developer Trainee (Jun 2024 - Sep 2024): Developed Apex triggers and asynchronous processes. Designed and optimized Flows and Screen Flows to streamline user interactions."
];

// Projects
const projects = [
    "Sentiment Analysis Web App: Built using Python and Flask to analyze text sentiment in real-time.",
    "AI Study Buddy: Built a micro-tool to generate text summaries using JavaScript, showcasing rapid AI-first prototyping and clean front-end design",
    "Portfolio Website: Created this editable portfolio using HTML, CSS, and JavaScript."
];

// Certifications
const certifications = [
    "AWS Academy Cloud Foundations – Certified Graduate",
    "IBM SkillsBuild AI-ML Intern Certification (with CSRBOX)"
];

// Render lists dynamically
const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

const experienceList = document.getElementById("experience-list");
experience.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    experienceList.appendChild(li);
});

const projectsList = document.getElementById("projects-list");
projects.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    projectsList.appendChild(li);
});

const certificationsList = document.getElementById("certifications-list");
certifications.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    certificationsList.appendChild(li);
});
