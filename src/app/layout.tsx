import "./globals.css";

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ScrollUpButton from "@/components/ScrollUpButton";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Power Tech",
    description: "E-commerce Power tech",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="pt-br">
            <body>
                <Header />
                <NavBar />
                {children}
                <ScrollUpButton />
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
