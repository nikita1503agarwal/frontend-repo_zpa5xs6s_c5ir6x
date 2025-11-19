export default function HowItWorks() {
  const stepsSchools = [
    {
      title: "Post a need",
      desc: "Share subject, times, and essential requirements.",
    },
    {
      title: "Matched instantly",
      desc: "We surface qualified, nearby teachers who fit the brief.",
    },
    {
      title: "Confirm and track",
      desc: "Book in one tap and track arrival with built-in route planning.",
    },
  ];

  const stepsTeachers = [
    {
      title: "Set your preferences",
      desc: "Choose subjects, travel distance, and availability.",
    },
    {
      title: "Receive opportunities",
      desc: "Get relevant shifts matched to your profile in real time.",
    },
    {
      title: "Accept and go",
      desc: "Tap to accept, get directions, and arrive prepared.",
    },
  ];

  const Step = ({ index, title, desc }) => (
    <div className="relative bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="absolute -top-3 -left-3 h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">
        {index}
      </div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 mt-1 text-sm">{desc}</p>
    </div>
  );

  return (
    <section id="how" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <p className="text-slate-600 mt-2">A simple, transparent process for both sides.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">For Schools</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {stepsSchools.map((s, i) => (
                <Step key={i} index={i + 1} {...s} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">For Teachers</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {stepsTeachers.map((s, i) => (
                <Step key={i} index={i + 1} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
