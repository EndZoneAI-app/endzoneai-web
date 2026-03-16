import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import PoweredBy from '@/components/PoweredBy';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <PoweredBy />
      <Footer />
    </main>
  );
}
