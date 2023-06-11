import { notFound } from 'next/navigation';

import { getPage } from '@site/sanity/getData';

export default async function Home({ params }) {
    const page = await getPage(params.slug);

    if (!page) {
        notFound();
    }

    return <p>{page.title}</p>;
}
