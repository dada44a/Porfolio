import AboutSection from "~/components/AboutSection";
import HeroSection from "~/components/HeroSection";
import NavBar from "~/components/NavBar";
import PortfolioFooter from "~/components/PortfolioFooter";
import ProjectsSection from "~/components/ProjectsSection";
import ScrollProgress from "~/components/ScrollProgress";

export default function Home() {
  return (
    <div class="min-h-screen bg-base-100">
      <ScrollProgress />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PortfolioFooter />
    </div>
  );
}
