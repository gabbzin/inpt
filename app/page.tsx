import { About } from "./components/about";
import { Contact } from "./components/contact";
import { CookieBanner } from "./components/cookie-banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Press } from "./components/press";
import { Projects } from "./components/projects";
import { Services } from "./components/services";
import { WhatsAppButton } from "./components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Press />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <WhatsAppButton />
    </>
  );
}
