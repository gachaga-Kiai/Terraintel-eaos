import { Bot } from "lucide-react";

const recommendations = [
  "Increase protein feed for Group A cattle.",
  "Schedule vaccination for 6 animals this week.",
  "Rain expected within the next 48 hours.",
  "Soil moisture is below optimal level.",
];

export default function AIRecommendations() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <Bot className="h-6 w-6 text-violet-600" />

        <h2 className="text-xl font-semibold">
          TerraAI Recommendations
        </h2>
      </div>

      <div className="space-y-3">
        {recommendations.map((item) => (
          <div
            key={item}
            className="rounded-lg border bg-slate-50 p-3"
          >
            <p className="text-sm text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}