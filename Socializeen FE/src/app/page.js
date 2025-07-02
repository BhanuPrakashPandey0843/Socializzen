import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Testimonials from "./pages/Testimonials";
import ClassesSection from "./pages/ClassesSection";
import WaveDivider from "./pages/WaveDivider";
import WaveDividerbottom from "./pages/WaveDividerbottom";
import Hero from "./pages/Hero";
import HeroCapsules from "./pages/HeroCapsules"
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
