export interface Job{
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[]
}

export const getJobs = async () => {
    const response = await fetch("./src/assets/data.json")
    const data: Job[] = await response.json()

    return data
}