import {
  Beef,
  Droplets,
  DollarSign,
  HeartPulse,
} from "lucide-react";

import WeatherWidget from "@/widgets/dashboard/WeatherWidget";
import AIRecommendations from "@/widgets/dashboard/AIRecommendations";
import RecentActivity from "@/widgets/dashboard/RecentActivity";
import KpiCard from "@/widgets/dashboard/KpiCard";
import MilkProductionChart from "@/widgets/dashboard/MilkProductionChart";
export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <div>
        <h1 className="text-4xl font-bold">
          TerraIntel Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Enterprise Agriculture Operating System
        </p>
      </div>
      <WeatherWidget />

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Total Livestock"
          value="248"
          subtitle="+12 this month"
          icon={<Beef className="h-6 w-6 text-blue-600" />}
        />

        <KpiCard
          title="Daily Milk"
          value="1,425 L"
          subtitle="Today's production"
          icon={<Droplets className="h-6 w-6 text-cyan-600" />}
        />

        <KpiCard
          title="Monthly Revenue"
          value="KES 1.84M"
          subtitle="Current month"
          icon={<DollarSign className="h-6 w-6 text-green-600" />}
        />

        <KpiCard
          title="Farm Health"
          value="97%"
          subtitle="Excellent"
          icon={<HeartPulse className="h-6 w-6 text-red-500" />}
        />
      </div>

      {/* Analytics + Weather */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MilkProductionChart />
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Weather Intelligence
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span>Temperature</span>
              <span className="font-semibold">24°C</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Humidity</span>
              <span className="font-semibold">73%</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Rain Chance</span>
              <span className="font-semibold">40%</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Wind</span>
              <span className="font-semibold">12 km/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI + Activities */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            TerraAI Recommendations
          </h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>🐄 Increase protein feed for Group A cattle.</li>
            <li>💉 Schedule vaccination for 6 animals this week.</li>
            <li>🌧 Rain expected within 48 hours.</li>
            <li>🌾 Soil moisture is below optimal level.</li>
          </ul>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
  <AIRecommendations />
  <RecentActivity />
</div>
<div className="grid gap-6 lg:grid-cols-3">
  <div className="lg:col-span-2">
    <MilkProductionChart />
  </div>

  <WeatherWidget />
</div>


        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Recent Farm Activity
          </h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>🐄 New calf registered.</li>
            <li>🥛 Morning milk collection completed.</li>
            <li>🚜 Irrigation activated for Field B.</li>
            <li>📦 Feed inventory updated.</li>
            <li>👨‍🌾 Worker attendance synced.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}