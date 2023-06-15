import './globals.css'

export const metadata = {
    title: 'Power Tech',
    description: 'E-commerce Power tech',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    )
}
