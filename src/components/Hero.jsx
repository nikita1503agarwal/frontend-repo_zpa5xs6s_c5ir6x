export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_400px_at_80%_20%,white,transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/30 px-3 py-1 text-sm mb-6">
              Trusted by schools across the UK
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Connect with qualified teachers in minutes, not days
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              School Staff matches schools with available teachers using proximity, availability, and subject fit — enabling instant, reliable bookings.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#signup-schools" className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:shadow-md transition">Get teachers for my school</a>
              <a href="#signup-teachers" className="px-6 py-3 rounded-lg bg-blue-500/30 ring-1 ring-white/40 hover:bg-blue-500/40 transition font-semibold">I'm a teacher looking for work</a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <div className="text-3xl font-bold">3k+</div>
                <div className="text-blue-100">Shifts filled</div>
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-100">School satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">&lt;5m</div>
                <div className="text-blue-100">Avg. booking time</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-200">
              <img src="/teacher-illustration.png" alt="Teachers and schools connected" className="rounded-xl w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
