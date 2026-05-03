import Nav        from '@/components/Nav';
import Hero       from '@/components/Hero';
import Stats      from '@/components/Stats';
import HowItWorks from '@/components/HowItWorks';
import Features   from '@/components/Features';
import ForWho     from '@/components/ForWho';
import Quickstart from '@/components/Quickstart';
import Footer     from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <ForWho />
      <Quickstart />
      <Footer />
    </main>
  );
}
