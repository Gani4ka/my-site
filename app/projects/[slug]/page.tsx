import { PortableText } from '@portabletext/react';
import { getProject } from '@site/sanity/utils';
import Image from 'next/image';
import { ComplexityRating } from './components/ComplexityRating/ComplexityRating';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProject(params.slug);

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-cyan-50 via-cyan-500 to-cyan-900 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
                    {project.name}
                </h1>
            </div>

            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content} />
                <p>Year: {project.year}</p>
                <p>
                    Github:{' '}
                    <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.git}
                    </a>
                </p>
            </div>
            <ComplexityRating rating={project.complexity} />
            <div className="grid grid-cols-1 md:grid-cols-3">
                <a
                    href={project.url}
                    title="view project"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={1920}
                        height={1080}
                        className="mt-10 border-2 border-cyan-600 object-cover"
                    />
                    <p className="bg-cyan-600 text-cyan-100 font-bold py-3 px-4 whitespace-nowrap hover:bg-cyan-100 hover:text-cyan-400 transition">
                        View Project
                    </p>
                </a>
            </div>
        </>
    );
}
