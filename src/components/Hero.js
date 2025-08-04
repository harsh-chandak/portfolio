'use client';
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
    const [init, setInit] = useState(false);
    const [showResume, setShowResume] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };



    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#101319]  text-white overflow-hidden relative py-40 text-center overflow-hidden flex items-center justify-center min-h-screen">
            {/* 🎇 Particles Background */}
            <div className="absolute inset-0 z-0 hidden sm:block">
                <Particles
                    id="heroParticles"
                    options={{
                        fpsLimit: 800,
                        particles: {
                            number: { value: 200 },
                            size: { value: 2 },
                            color: { value: "#ffffff" },
                            opacity: {
                                value: 0.2
                            },
                            links: {
                                enable: true,
                                distance: 50,
                                color: "#ffffff",
                                opacity: 0.1,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 0.5,
                                outModes: { default: "bounce" },
                            },
                        },
                        detectRetina: true,
                        background: { color: "transparent" },
                        fullScreen: { enable: false },
                    }}

                />
            </div>
            <motion.div
                className="[z-index:1000]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl font-bold mb-4">
                    Hello, I'm <span className="text-red-400">Harsh</span>
                </h1>
                <p className="text-gray-400 italic text-md mb-4">
                    (My name means “Happiness” in Hindi. Ironic for a bug-squashing dev, I know 😄)
                </p>
                <p className="text-4xl text-gray-300 mb-4">
                    A full-stack developer | MSCS @ASU'26
                </p>

                {/* Dev quote */}
                <motion.blockquote
                    className="text-gray-500 italic text-lg mb-8 max-w-xl mx-auto"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 1 }}
                >
                    "Good code is like a good joke, if you have to explain it, you messed up" – Harsh N. Chandak
                </motion.blockquote>

                <a
                    href="#about"
                    className="text-3xl inline-block px-6 py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition margin-10"
                >
                    More About Me ↓
                </a>

                <button
                    onClick={() => setShowResume(true)}
                    className="text-3xl inline-block px-6 py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition margin-10"
                >
                    📄 View Resume
                </button>
                {showResume && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
                        <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl h-[90vh] relative">
                            <button
                                onClick={() => setShowResume(false)}
                                className="absolute top-1 right-1 text-black hover:text-red-500 text-xl"
                            >
                                ✖
                            </button>

                            <div className="w-full h-full">
                                <iframe
                                    src="/Harsh_Chandak_Resume.pdf"
                                    className="w-full h-full hidden sm:block"
                                    frameBorder="0"
                                ></iframe>

                                {/* Mobile fallback */}
                                <div className="sm:hidden flex flex-col justify-center items-center h-full p-4 text-center">
                                    <p className="text-gray-800 mb-4">
                                        PDF preview isn't supported on some mobile devices.
                                    </p>
                                    <a
                                        href="/Harsh_Chandak_Resume.pdf"
                                        download
                                        className="px-6 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600"
                                    >
                                        📄 Download Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>

        </section>
    );
}
