import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Trust />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} School Staff. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
