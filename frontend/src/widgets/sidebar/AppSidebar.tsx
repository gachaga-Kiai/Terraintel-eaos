import {
  LayoutDashboard,
  Beef,
  Sprout,
  Wallet,
  Package,
  Shield,
  Bot,
  FileBarChart,
  Settings,
  Droplets,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Livestock",
    icon: Beef,
  },
  {
    name: "Dairy Management",
    icon: Droplets,
  },
  {
    name: "Crop Analytics",
    icon: Sprout,
  },
  {
    name: "Finance",
    icon: Wallet,
  },
  {
    name: "Inventory",
    icon: Package,
  },
  {
    name: "Insurance",
    icon: Shield,
  },
  {
    name: "TerraAI",
    icon: Bot,
  },
  {
    name: "Reports",
    icon: FileBarChart,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <aside className="flex w-72 flex-col border-r bg-slate-950 text-white">
      {/* Logo */}
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold tracking-wide">
          TerraIntel
        </h1>
        <p className="text-sm text-slate-400">
          Enterprise Agriculture OS
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors hover:bg-slate-800"
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4">
        <p className="text-xs text-slate-400">
          TerraIntel EAOS v1.0
        </p>
      </div>
    </aside>
  );
}