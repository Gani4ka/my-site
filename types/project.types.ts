import { PortableTextBlock } from 'sanity';

export type Project = {
    _id: string;
    createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
    complexity: number;
    git: string;
    year: number;
    stack: string[];
};
