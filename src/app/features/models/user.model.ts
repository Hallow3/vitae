import { Education, educationList } from "./education.model";
import { Expertize, expertizeList } from "./expertize.model";
import { developerSkillList, Skill } from "./skill.model";

export interface User{
    id: number;
    firstName: string;
    lastName:string;
    email: string;
    password: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    about: string;
    birthDate: Date;
    expertize: Expertize[];
    education: Education[];
    skills: Skill[];
    languages: string[];
    profil: string;
}

export const userList: User[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
        phone: "+1234567890",
        address: "123 Main Street",
        city: "New York",
        country: "USA",
        postalCode: "10001",
        about: "Senior Software Developer with over 10 years of experience in full-stack development. Specialized in Java, Python, and JavaScript frameworks. Led multiple successful projects for Fortune 500 companies. Strong expertise in cloud architecture, microservices, and agile methodologies. Passionate about mentoring junior developers and implementing best practices in software development.",
        birthDate: new Date("1990-01-01"),
        expertize: expertizeList,
        education: educationList,
        skills: developerSkillList,
        languages: ["English", "French"],
        profil: "Software Developer"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: "password456",
        phone: "+0987654321",
        address: "456 Oak Avenue",
        city: "London",
        country: "UK",
        postalCode: "SW1A 1AA",
        about: "Award-winning UI/UX Designer with 8+ years of experience in creating intuitive digital experiences. Expertise in user research, wireframing, and prototyping using tools like Figma and Adobe XD. Successfully delivered projects for major tech startups and established enterprises. Skilled in accessibility design and mobile-first approaches. Regular speaker at design conferences and passionate advocate for inclusive design principles.",
        birthDate: new Date("1992-05-15"),
        expertize: expertizeList,
        education: educationList,
        skills: developerSkillList,
        languages: ["English", "Spanish"],
        profil: "UI/UX Designer"
    }
];

