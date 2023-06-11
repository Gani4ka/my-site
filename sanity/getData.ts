import { Project } from '@site/types/project.types';
import { Page } from '@site/types/page.types';
import { createClient, groq } from 'next-sanity';
import { Cv } from '@site/types/cv.types';

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
            "image": image.asset->url,
            "stack": stack,
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
        content,
        complexity,
        git,
        year
      }`,
        { slug }
    );
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`
    );
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "cv": cv.asset->url,
        "slug": slug.current,
        content
      }`,
        { slug }
    );
}

export async function getCV(): Promise<Cv> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "cv"][0]{
            "cv": cv.asset->url,
            title,
      }`
    );
}
