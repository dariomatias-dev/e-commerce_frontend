import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import ScrollUpButton from '@/components/ScrollUpButton';

import { UserPreferencesProvider } from '@/contexts/UserPreferencesContext';

export const metadata = {
  title: 'Power Tech',
  description: 'E-commerce Power tech',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt-br">
      <body>
        <UserPreferencesProvider>
          <Header />
          <NavBar />
          {children}
          <ScrollUpButton />
          <Footer />
        </UserPreferencesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
