import { getProject } from '@site/sanity/utils';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProject(params.slug);
    console.log(project, '  project');

    return (
        <main>
            <h1 className="text-7xl font-extrabold">Hello I&apos;m</h1>
        </main>
    );
}
