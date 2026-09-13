import {
  Activity,
  Tractor,
  Milk,
  Package,
} from "lucide-react";

const activities = [
  {
    icon: Activity,
    text: "New calf registered.",
  },
  {
    icon: Milk,
    text: "Morning milk collection completed.",
  },
  {
    icon: Tractor,
    text: "Irrigation activated for Field B.",
  },
  {
    icon: Package,
    text: "Feed inventory updated.",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Recent Farm Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.text}
              className="flex items-center gap-3 rounded-lg border p-3"
            >
              <Icon className="h-5 w-5 text-green-600" />

              <span>{activity.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
