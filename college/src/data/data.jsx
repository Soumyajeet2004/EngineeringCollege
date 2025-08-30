import { Cpu, Cog, Zap, Building2,CarFront,Computer } from "lucide-react";
const programs = [
    {
        name: "Computer Science & Engineering",
        desc: "Cutting-edge curriculum in AI, software, and data-driven technologies.",
        icon: <Cpu className="w-10 h-10 text-blue-600" />,
    },
    {
        name: "Mechanical Engineering",
        desc: "Innovative design, robotics, and automotive systems.",
        icon: <Cog className="w-10 h-10 text-green-600" />,
    },
    {
        name: "Electrical Engineering",
        desc: "Power systems, electronics, and future-ready innovations.",
        icon: <Zap className="w-10 h-10 text-yellow-600" />,
    },
    {
        name: "Civil Engineering",
        desc: "Smart infrastructure, sustainable design, and construction.",
        icon: <Building2 className="w-10 h-10 text-red-800" />,
    },

];
export { programs };
