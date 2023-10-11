import NavBar from "@/components/nav-bar";
import AboutMe from "@/components/about-me";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";
import EmailSection from "@/components/email-section";
import Footer from "@/components/footer";
import AnimatedNumbers from "@/components/achievement-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <AnimatedNumbers />
        <AboutMe />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
