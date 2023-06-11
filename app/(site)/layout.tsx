import { getPages } from '@site/sanity/getData';
import '../globals.css';
import { Header } from './components/Header/Header';

export const metadata = {
    title: 'Projects site',
    description: 'Projects site',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pages = await getPages();
    return (
        <html lang="en">
            <body>
                <Header pages={pages} />
                <main className="p-10">{children}</main>
            </body>
        </html>
    );
}
