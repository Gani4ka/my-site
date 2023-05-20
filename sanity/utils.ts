import { Project } from '@site/types/project.types';
import { log } from 'console';
import { createClient, groq } from 'next-sanity';

const clientConfig = {
    projectId: 'z4d8etkl',
    dataset: 'production',
    apiVersion: '2021-03-25',
};

export async function getProjects(): Promise<Project[]> {
    const client = createClient(clientConfig);
    const data = await client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            url,
            content,
            "slug": slug.current,
            "image": image.asset->url
        }`
    );

    return data;
}

export async function getProject(slug: string): Promise<Project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`,
        { slug }
    );
}
