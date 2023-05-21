import '../globals.css';

export const metadata = {
    title: 'Projects site',
    description: 'Projects site',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main className="p-10">{children}</main>
            </body>
        </html>
    );
}
