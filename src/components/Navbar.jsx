import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-blue-600 text-white grid place-items-center font-semibold">SS</div>
            <span className="font-semibold text-slate-900">School Staff</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#how" className="text-slate-600 hover:text-slate-900">How it works</a>
            <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
            <a href="#trust" className="text-slate-600 hover:text-slate-900">Trust</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#signup-teachers" className="px-4 py-2 rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors">For Teachers</a>
            <a href="#signup-schools" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">For Schools</a>
          </div>

          <button aria-label="Open menu" className="md:hidden p-2 rounded-md border border-slate-200" onClick={()=>setOpen(!open)}>
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#how" className="block px-2 py-2 rounded-md text-slate-700 hover:bg-slate-100">How it works</a>
            <a href="#features" className="block px-2 py-2 rounded-md text-slate-700 hover:bg-slate-100">Features</a>
            <a href="#pricing" className="block px-2 py-2 rounded-md text-slate-700 hover:bg-slate-100">Pricing</a>
            <a href="#trust" className="block px-2 py-2 rounded-md text-slate-700 hover:bg-slate-100">Trust</a>
            <div className="flex gap-2 pt-2">
              <a href="#signup-teachers" className="flex-1 px-4 py-2 rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors text-center">For Teachers</a>
              <a href="#signup-schools" className="flex-1 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center">For Schools</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
