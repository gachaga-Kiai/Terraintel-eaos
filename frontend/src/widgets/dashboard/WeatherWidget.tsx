import {
  CloudSun,
  Droplets,
  Wind,
  Thermometer,
} from "lucide-react";

export default function WeatherWidget() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <CloudSun className="h-7 w-7 text-yellow-500" />

        <h2 className="text-xl font-semibold">
          Weather Intelligence
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <Thermometer size={18} />
            Temperature
          </span>

          <strong>24°C</strong>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <Droplets size={18} />
            Humidity
          </span>

          <strong>73%</strong>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            <Wind size={18} />
            Wind
          </span>

          <strong>12 km/h</strong>
        </div>

        <div className="rounded-lg bg-green-50 p-3 mt-6">
          <p className="text-sm text-green-700">
            🌧 Rain expected in the next 48 hours.
          </p>
        </div>

      </div>
    </div>
  );
}