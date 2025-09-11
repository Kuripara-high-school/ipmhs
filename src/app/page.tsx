import About from "@/components/home/about";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Info from "@/components/home/info";
import Intro from "@/components/home/intro";
import KeyInfo from "@/components/home/Key";
import Map from "@/components/home/map";
import Teacher from "@/components/home/teacher";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/nabvar";


export default function Home() {
  return (
    <div >
      <Navbar />
      <div className="max-w-screen overflow-x-hidden">
        <Hero/>
        <Intro/>
        <About/>
        <KeyInfo/>
        <Info/>
        <Teacher/>
        <Gallery/>
        <Map/>
      </div>
      <Footer />
    </div>
  );
}
