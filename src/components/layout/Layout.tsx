import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { SkipToContent } from '../ui/SkipToContent';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
