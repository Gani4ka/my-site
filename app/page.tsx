import { getProjects } from '@site/sanity/utils';
import Link from 'next/link';
import Image from 'next/image';

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
            <p className="mt-3 text-xl text-gray-600">Check out my projects!</p>
            <h2 className="mt-24 font-bold text-cyan-600 text-3xl">
                My Projects
            </h2>

            <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project._id}
                        className="border-2 border-gray-500 p-1 hover:border-cyan-500 transition"
                    >
                        {project.image && (
                            <>
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={750}
                                    height={300}
                                    className="object-cover rounded-lg border border-gray-500"
                                />
                            </>
                        )}
                        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                            {project.name}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
