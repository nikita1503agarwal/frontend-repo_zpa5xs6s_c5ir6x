import { MapPin, Clock, Compass, Zap } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Proximity matching",
    desc: "Reduce travel time and improve reliability with local talent.",
  },
  {
    icon: Compass,
    title: "Route planning",
    desc: "Turn-by-turn directions and live ETA for peace of mind.",
  },
  {
    icon: Clock,
    title: "Instant bookings",
    desc: "Confirm cover in seconds with one-tap acceptance.",
  },
  {
    icon: Zap,
    title: "Real-time availability",
    desc: "Live calendars ensure accurate matching, every time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Built for speed and reliability</h2>
          <p className="text-slate-600 mt-2">Everything you need to fill cover fast and fairly.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow transition">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600 mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
