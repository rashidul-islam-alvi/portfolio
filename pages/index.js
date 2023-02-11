import ContactSection from "../Components/ContactSection";
import Credit from "../Components/Credit";
import Intro from "../Components/Intro";
import NavBar from "../Components/NavBar";
import ProjectSection from "../Components/ProjectSection";
import Terminal from "../Components/Terminal";

export default function Home() {
  return (
    <div className="mx-[0px] md:mx-[420px] md:px-[40px]">
      <NavBar />
      <Intro />
      <Terminal />
      <ProjectSection />
      <ContactSection />
      <Credit />
    </div>
  );
}
