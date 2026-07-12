import { ContentSections } from "./components/ContentSections";
import { HeroSection } from "./components/HeroSection";
import { ProjectFooter } from "./components/ProjectFooter";
import { QuickNav } from "./components/QuickNav";
import { SurveySection } from "./components/SurveySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-foreground">
      <HeroSection />
      <QuickNav />
      <ContentSections />
      <SurveySection />
      <ProjectFooter />
    </main>
  );
}
