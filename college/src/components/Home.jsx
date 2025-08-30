import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    BookOpen,
    FlaskConical,
    Users,
    Facebook,
    Twitter,
    Linkedin,
    Menu,
    X,
    Sun,
    Moon,
} from "lucide-react";
import { programs } from "../data/data";
import { campuses } from "../data/Campus";

// CampusCard Component
function CampusCard({ title, desc, img }) {
    const [expanded, setExpanded] = useState(false);
    const shortText = desc.slice(0, 80) + "...";

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-blue-500">
            <div className="flex flex-col items-center">
                <img src={img} alt={title} className="w-16 h-16" />
                <h4 className="mt-4 font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {expanded ? desc : shortText}
                </p>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                >
                    {expanded ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
}

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "Programs", "About", "Admissions", "Contact"];

    return (
        <div className="font-sans text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 transition-colors duration-500">
            {/* Navigation */}
            <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-gray-800 fixed w-full top-0 z-50 transition-colors duration-500">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-700 dark:text-cyan-500">
                    EngineeringCollege
                </h1>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-bold ml-auto">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="hover:text-blue-600 dark:hover:text-cyan-400  transition"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Controls (Dark Mode + Mobile Menu) */}
                <div className="flex items-center space-x-4">
                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-200"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center md:hidden border-t border-gray-200 dark:border-gray-700 transition">
                        {navLinks.map((link) => (
                            <li
                                key={link}
                                className="w-full text-center py-3 border-b border-gray-100 dark:border-gray-700"
                            >
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 dark:text-gray-200 font-bold hover:text-blue-600 dark:hover:text-blue-400 block w-full"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="relative h-screen flex items-center justify-center pt-20 overflow-hidden"
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1630852722758-effe28684b0a?q=80&w=1170&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-md transition" />

                <div className="relative grid md:grid-cols-2 gap-16 px-8 max-w-6xl z-10">
                    <motion.div
                        className="flex flex-col justify-center pr-10"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                            Empowering Engineers of Tomorrow
                        </h2>
                        <motion.div
                            className="h-1 w-0 bg-blue-500 mt-3"
                            animate={{ width: "120px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Join one of the nation’s leading engineering colleges and build
                            the future with innovation and technology.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 w-fit transition"
                        >
                            Apply Now
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="https://www.calendar.com/wp-content/uploads/2024/05/College-Graduates-Powerful-Habits.jpg"
                            alt="Engineering"
                            className="rounded-2xl shadow-lg relative w-full h-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 relative inline-block">
                        Our Programs
                        <motion.span
                            className="absolute left-0 -bottom-4 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {programs.map((program, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: idx * 0.15,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                viewport={{ once: true }}
                                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md transition p-8 border border-gray-100 dark:border-gray-700 hover:border-blue-500 relative overflow-hidden hover:scale-105 hover:shadow-2xl  -bottom-10 "
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition" />
                                <div className="flex justify-center mb-4">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        {program.icon}
                                    </motion.div>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    {program.name}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {program.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campus Life Section */}
            <section id="about" className="py-20 px-8 relative bg-gray-50 dark:bg-gray-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#e0f2fe_0%,_transparent_50%)] dark:bg-none opacity-40 pointer-events-none"></div>

                <div className="relative max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 relative inline-block">
                        Campus Life
                        <motion.span
                            className="absolute left-0 -bottom-3 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {campuses.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative hover:scale-105 transition transform rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-2xl"
                            >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition duration-300 rounded-2xl pointer-events-none"></div>
                                <CampusCard {...item} />
                                
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative bg-gray-900 dark:bg-black text-gray-100 py-16 px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-gray-800 to-gray-900 opacity-40 pointer-events-none"></div>

                <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">
                            EngineeringCollege
                        </h4>
                        <p className="text-gray-300 text-sm">1B College Street, Kolkata, India</p>
                        <p className="text-gray-300 text-sm mt-1">
                            Established 1960 | AICTE Approved | NAAC Accredited
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
                        <p className="text-gray-300 text-sm">Email: info@engineeringcollege.edu</p>
                        <p className="text-gray-300 text-sm mt-1">Phone: +91 123-456-7890</p>
                        <p className="text-gray-300 text-sm mt-1">Fax: (123) 456-7891</p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4 text-white">Follow Us</h4>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="hover:text-blue-400 transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-400 text-sm mt-12 border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} EngineeringCollege. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Home;
