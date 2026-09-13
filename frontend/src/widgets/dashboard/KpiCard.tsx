import type { ReactNode } from "react";

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: ReactNode;
}

export default function KpiCard({
  title,
  value,
  subtitle,
  icon,
}: KpiCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-lg bg-slate-100 p-3">
          {icon}
        </div>
      </div>

      <p className="text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}