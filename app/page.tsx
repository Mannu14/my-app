import { BackgroundBeamsDemo } from "./components/BackgroundBeams";
import MainFooter from "./components/MainFooter";
import HomeIndex from "./components/HomeIndex";
import Services from "./AnotherUi/Services";
import Experience from "./components/Experience";
import EngineeringFocus from "./components/EngineeringFocus";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <HomeIndex />
      <EngineeringFocus />
      <Services />
      <Experience />
      <BackgroundBeamsDemo />
      <TechStack />
      <MainFooter />
    </>
  );
}
