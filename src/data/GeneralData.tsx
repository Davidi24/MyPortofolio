import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export const contactInfo = [
    {
        logo: <MapOutlinedIcon className="text-[#d33857]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "Chemnitz"
    },
    {
        logo: <LocalPhoneOutlinedIcon className="text-[#d33857]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "+4915754765394"
    },
    {
        logo: <EmailOutlinedIcon className="text-[#d33857]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "kecidavid22@gmail.com"
    }
];


export const educationInfo = [
    {
        logo: <SchoolIcon className="text-[#bb324d]" fontSize="large" />,
        title: "Web Engineering",
        school: "TU Chemnitz",
        year: "2024-2026",
        description: "I am pursuing my master’s degree in Web Engineering at TU Chemnitz in Germany. This has been a valuable experience where I am further honing my technical expertise while enjoying a collaborative and innovative academic environment."
    },
    {
        logo: <SchoolIcon className="text-[#bb324d]" fontSize="large" />,
        title: "Software Engineering",
        school: "Epoka University",
        year: "2021-2024",
        description: "I graduated as a Software Engineer at Epoka University with high honoured. During my studies, I progressed from beginner-level knowledge to mastering advanced skills, including designing real-world applications. I worked on projects that strengthened my problem-solving abilities, teamwork, and programming proficiency, building a strong foundation for my career."
    }

]


export const workInfo = [
    {
        logo: <WorkOutlineOutlinedIcon className="text-[#bb324d]" fontSize="large" />,
        title: "Software Engineer",
        company: "A.E. Distribution",
        year: "15/07/2023 - 01/07/2024",
        description: "I developed and maintained web applications, managing large datasets and implementing threading techniques to enhance efficiency. My responsibilities included debugging and resolving software issues, optimizing code performance through automated testing, and designing and integrating new features to improve functionality."
    },
    {
        logo: <WorkOutlineOutlinedIcon className="text-[#bb324d]" fontSize="large" />,
        title: "Web Developer & Social Media Manager",
        company: "Protik Innovation Center",
        year: "01/07/2023 - 01/10/2023",
        description: "I contributed as a web developer and social media manager, where I organized events, managed the company’s social media presence, and developed new components for their website to enhance user experience and functionality."
    },
];


export const personalInfo =
{
    full_name: "David Keci",
    profession: "Software Engineer",
    abautMe: "I'm a software engineer passionate about solving problems and turning ideas into impactful solutions. My core expertise includes Java (Spring Framework), React, Node.js, and PostgreSQL, but I'm always eager to explore new technologies. What excites me most about programming is transforming abstract ideas into efficient, real-world solutions. Additionally, I'm deeply interested in project management and business, driven by a passion for leadership and guiding teams toward success."
}

export const skills = [
    "Java",
    "Spring",
    "JWT/OAuth",
    "Microservices",
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "Git",
    "Github Actions (CI/CD)",
    "WebSocket/Socket.io",
    "Python",
    "C#",
    "PHP",
    "Laravel"
];
