export default function Trust() {
  const testimonials = [
    {
      quote:
        "Booking cover used to take hours of calls. Now it's minutes. The matching is spot on.",
      name: "Deputy Head, Manchester",
    },
    {
      quote:
        "I can accept suitable work that fits my schedule and travel radius. It's seamless.",
      name: "Science Teacher, Birmingham",
    },
    {
      quote:
        "We've cut agency costs and reduced no-shows by focusing on proximity and fit.",
      name: "Business Manager, London Academy",
    },
  ];

  return (
    <section id="trust" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Trusted by schools and teachers</h2>
          <p className="text-slate-600 mt-2">Proven outcomes with a human-first approach.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
              <p className="text-slate-800">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-slate-500">— {t.name}</footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-70">
          <div className="h-10 bg-slate-200 rounded" />
          <div className="h-10 bg-slate-200 rounded" />
          <div className="h-10 bg-slate-200 rounded" />
          <div className="h-10 bg-slate-200 rounded" />
        </div>
      </div>
    </section>
  );
}
