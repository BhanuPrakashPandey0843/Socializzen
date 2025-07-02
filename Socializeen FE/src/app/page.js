import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ClassesSection from "./components/ClassesSection";
import WaveDivider from "./components/WaveDivider";
import WaveDividerbottom from "./components/WaveDividerbottom";
import Hero from "./components/Hero";
import HeroCapsules from "./components/HeroCapsules"
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroCapsules />
     
      <WaveDividerbottom  />
      <main className="flex items-center justify-center min-h-screen bg-blue-500">
        <h1 className="text-gray-50 text-5xl font-semibold">
          If you see this styled, Tailwind is working! 🚀
        </h1>
      </main>
      <ClassesSection />
      <Testimonials/>
      <Footer />
    </>
  );
}
