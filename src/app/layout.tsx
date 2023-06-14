import './globals.css'

export const metadata = {
    title: 'E-commerce',
    description: 'E-commerce Gamer',
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
