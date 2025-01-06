import { BackgroundBeamsDemo } from "./components/BackgroundBeams";
import { Footer } from "./components/Footer";
import MainFooter from "./components/MainFooter";
import HomeIndex from "./components/HomeIndex";
import Services from "./AnotherUi/Services";

export default function Home() {
  return (
    <>
    <HomeIndex/>
    <Services/>
    <BackgroundBeamsDemo/>
    <Footer/>
    <MainFooter/>
    </>
  );
}
