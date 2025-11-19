export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_300px_at_20%_80%,#60a5fa,transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Ready to fill cover faster?</h2>
            <p className="text-slate-300 mt-2">Join School Staff and get reliable, local matches with full transparency.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <a href="#signup-schools" className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold">I'm a school</a>
            <a href="#signup-teachers" className="px-6 py-3 rounded-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold">I'm a teacher</a>
          </div>
        </div>
      </div>
    </section>
  );
}
