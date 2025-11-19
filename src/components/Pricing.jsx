export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Transparent pricing</h2>
          <p className="text-slate-600 mt-2">Simple plans for schools and fair earnings for teachers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Pay-as-you-go</h3>
            <p className="text-slate-600 mt-1">Only pay when you book cover.</p>
            <div className="mt-4 text-3xl font-bold">£0</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• No monthly fees</li>
              <li>• Standard booking fee per shift</li>
              <li>• Support via chat and email</li>
            </ul>
            <a href="#signup-schools" className="mt-6 inline-block px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-blue-600 p-6 bg-white shadow-md relative">
            <div className="absolute -top-3 right-4 text-xs bg-blue-600 text-white px-2 py-1 rounded">Most popular</div>
            <h3 className="text-lg font-semibold text-slate-900">Subscription</h3>
            <p className="text-slate-600 mt-1">Lower fees and premium features.</p>
            <div className="mt-4 text-3xl font-bold">Custom</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Reduced per-shift fees</li>
              <li>• Priority matching</li>
              <li>• Dedicated support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Talk to us</a>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">For Teachers</h3>
            <p className="text-slate-600 mt-1">Keep more of what you earn.</p>
            <div className="mt-4 text-3xl font-bold">Best rates</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• No signup fees</li>
              <li>• Fast payouts</li>
              <li>• Mileage transparency</li>
            </ul>
            <a href="#signup-teachers" className="mt-6 inline-block px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Join as a teacher</a>
          </div>
        </div>
      </div>
    </section>
  );
}
