import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@site/types/project.types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
    return (
        <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 hover:border-cyan-500 transition"
        >
            {project.image && (
                <>
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={750}
                        height={300}
                        className="object-cover"
                    />
                </>
            )}
            <div className="p-1">
                <h2 className="mt-2 font-extrabold text-cyan-600">
                    {project.name}
                </h2>
                {project.stack && (
                    <p>
                        {project.stack.map((tech, idx) => (
                            <span className="text-sm text-gray-600">
                                {idx > 0 && ', '} {tech}
                            </span>
                        ))}
                    </p>
                )}
            </div>
        </Link>
    );
}
