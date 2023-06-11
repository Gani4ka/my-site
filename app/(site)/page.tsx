import { getProjects } from '@site/sanity/getData';
import { ProjectCard } from './components/ProjectCard/ProjectCard';

export default async function Home() {
    const projects = await getProjects();

    return (
        <>
            <h1 className="text-7xl font-extrabold">
                Hello I&apos;m
                <span className="bg-gradient-to-r from-cyan-50 via-cyan-500 to-cyan-900 bg-clip-text text-transparent">
                    {' '}
                    Anna!
                </span>
            </h1>
            <p className="mt-3 text-xl text-gray-600">Check out my projects.</p>
            <h2 className="mt-24 font-bold text-cyan-600 text-3xl">
                My Projects
            </h2>

            <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </>
    );
}
