import { getCV } from '@site/sanity/getData';
import { Page } from '@site/types/page.types';
import Link from 'next/link';

interface HeaderProps {
    pages: Page[];
}

export async function Header({ pages }: HeaderProps): Promise<JSX.Element> {
    const cv = await getCV();

    return (
        <header className="flex items-center justify-between pr-10 pl-10">
            <nav>
                <ul className="flex items-center gap-5 text-sm text-gray-600">
                    {pages.map((page) => (
                        <li className="pt-5 pb-5">
                            <Link
                                key={page._id}
                                href={`/${page.slug}`}
                                className="hover:underline height-100 display-inline-block"
                            >
                                {page.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="text-sm text-gray-600">
                <a
                    href={cv.cv}
                    title="Download my CV"
                    download="CV_Anna_Yefimova_FE"
                    target="_blank"
                >
                    Download my CV
                </a>
            </div>
        </header>
    );
}
