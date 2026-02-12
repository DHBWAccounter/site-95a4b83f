import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { CTASection } from "@/components/cta-section";
import { LogoSection } from "@/components/logo-section";
import { PreFooter } from "@/components/pre-footer";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Mission />
        <CTASection />
        <LogoSection />
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
}
