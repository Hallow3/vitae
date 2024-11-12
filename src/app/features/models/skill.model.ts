export interface Skill {
    id: number;
    name: string;
    level: number;
}

export const developerSkillList: Skill[] = [
    {
        id: 1,
        name: 'JavaScript',
        level: 85
    },
    {
        id: 2,
        name: 'TypeScript',
        level: 80
    },
    {
        id: 3,
        name: 'Angular',
        level: 75
    }
];
