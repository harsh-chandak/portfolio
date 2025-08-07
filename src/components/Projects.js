import { useState, useRef, useEffect } from "react";
// projects.js (or define at top of Projects.jsx)
export const projects = [
    {
        name: "job-alerts.json",
        title: "Web-scraping Tool for Job Alerts + Application Tracker",
        context: "A personal project born from job hunt frustration.",
        period: "Summer 2025",
        stack: ["Next.js", "MongoDB", "Puppeteer", "Discord Webhook", "JWT Auth", "Tailwind CSS"],
        summary:
            "Built a full-stack platform automating job alerts via Discord and tracking applications with filters and follow-ups.",
        highlights: [
            "Created Puppeteer scraper for API/static pages with JSON mapping and cron alerts.",
            "Designed app tracker with status workflows, filters, and Discord notifications.",
            "Implemented multi-tenant JWT auth, user-specific MongoDB, and secured API endpoints."
        ],
        github: null,
        demo: "https://job-alerts-xg3m.vercel.app/",
        report: null,
        screenshot: null
    },
    {
        name: "streamflow.json",
        title: "Kafka + Neo4j Streaming Pipeline",
        context: "ASU course project on distributed systems",
        period: "Spring 2025",
        stack: ["Kafka", "Neo4j", "Kubernetes", "Docker", "Python", "Spark"],
        summary:
            "Developed a real-time graph analytics pipeline processing dynamic user event streams efficiently.",
        highlights: [
            "Engineered Kafka-to-Neo4j stream handlers using BFS and PageRank models.",
            "Deployed pipeline on Kubernetes with Docker containers via Minikube.",
            "Optimized throughput by benchmarking and tuning batch processing sizes."
        ],
        github: null,
        demo: null,
        report: null,
        screenshot: "/images/streamflow-pipeline.png"
    },
    {
        name: "asp-clingo.json",
        title: "Warehouse Robot Optimization using Clingo",
        context: "ASU Knowledge Representation and Resoning project",
        period: "Fall 2024",
        stack: ["Clingo", "Answer Set Programming", "Python"],
        summary:
            "Modeled multi-agent warehouse robot paths with declarative logic and ASP planning.",
        highlights: [
            "Defined frame axioms and rules simulating autonomous robot navigation.",
            "Built Python wrapper to iteratively run Clingo with dynamic horizons.",
            "Benchmarked performance across various warehouse grid layouts."
        ],
        github: null,
        demo: "https://krr-project.onrender.com",
        report: null,
        screenshot: "/images/clingo-warehouse.gif"
    },
    {
        name: "spatial-sql.json",
        title: "Spatial Data Analysis using Apache Spark and Scala",
        context: "ASU big data and geospatial analytics course",
        period: "Spring 2025",
        stack: ["Apache Spark", "Scala", "Java", "Spatial SQL Queries"],
        summary:
            "Analyzed large spatial datasets using distributed Spark pipelines and custom Scala transformations.",
        highlights: [
            "Implemented partitioning and filters to speed up spatial join operations.",
            "Visualized clusters using Spark SQL and Geohash aggregations.",
            "Created custom RDD transformations for advanced analytics workflows."
        ],
        github: null,
        demo: null,
        report: null,
        screenshot: "/images/spatial-sql.png"
    },
    {
        name: "data-vis.json",
        title: "Mapping Accident Trends & Patterns",
        context: "ASU D3.js data storytelling project",
        period: "Spring 2025",
        stack: ["D3.js", "JavaScript", "Node.js", "GeoJSON"],
        summary:
            "Built interactive visualizations to reveal temporal and spatial accident patterns.",
        highlights: [
            "Processed 185K+ records using Node.js and Turf.js spatial grouping.",
            "Created six D3.js charts including heatmaps, timelines, and cluster views.",
            "Secured 3rd place in class competition for clear and engaging storytelling."
        ],
        github: null,
        demo: "https://data-vis-0eqs.onrender.com/",
        report: null,
        screenshot: null
    },
    {
        name: "blockchain-ai.json",
        title: "Blockchain & AI for Detecting Financial Data Breaches",
        context: "ASU research project exploring AI and blockchain synergy in cybersecurity",
        period: "Fall 2024",
        stack: ["Blockchain", "AI", "Smart Contracts", "Machine Learning", "NLP"],
        summary:
            "Led a case study on combining AI and blockchain to strengthen financial data breach defenses.",
        highlights: [
            "Analyzed 15+ major breaches and surveyed 30+ papers on fraud detection and smart contracts.",
            "Proposed a dual-layer framework combining anomaly detection with immutable Ethereum logs.",
            "Compiled findings into a 60-page report featuring security models and future insights."
        ],
        github: null,
        demo: null,
        report: null,
        screenshot: null
    },
    {
        name: "property-chain.json",
        title: "Property Registration System Using Blockchain",
        context: "Undergraduate academic project focused on secure property ownership management.",
        period: "Spring 2023",
        stack: ["Flutter", "Ethereum", "Ganache", "Truffle Suite", "Solidity"],
        summary:
            "Developed a decentralized app to automate and secure property registration using blockchain technology.",
        highlights: [
            "Built smart contracts in Solidity to manage ownership and transfer records immutably.",
            "Created Flutter front-end for user-friendly interaction with the blockchain backend.",
            "Tested deployment on local Ethereum networks using Ganache and Truffle."
        ],
        github: null,
        demo: null,
        report: "/prop-chain.pdf",
        screenshot: null
    },
    {
        name: "bubble-scan.json",
        title: "OMR Sheets Evaluation Using Image Processing",
        context: "Undergraduate academic project",
        period: "Spring 2022",
        stack: ["OpenCV", "Python", "HTML", "CSS"],
        summary:
            "Automated scoring of optical mark recognition sheets under varied lighting conditions.",
        highlights: [
            "Used OpenCV to detect filled bubbles and contours with accuracy.",
            "Designed scoring algorithm tuned for noisy scan variability.",
            "Implemented GUI for preview and manual corrections."
        ],
        github: null,
        demo: null,
        report: "/bubble-scan.pdf",
        screenshot: null
    },
    {
        name: "sign-lang.json",
        title: "Real-Time Sign Language Detection Using FFNN",
        context: "Undergraduate capstone project",
        period: "Fall 2021",
        stack: ["Neural Networks", "Python", "MediaPipe", "HTML", "CSS"],
        summary:
            "Developed a prototype translating hand gestures into text using feed-forward neural networks.",
        highlights: [
            "Captured hand landmarks with MediaPipe and engineered gesture features.",
            "Trained FFNN to classify 20+ signs achieving ~98% test accuracy.",
            "Applied hyperparameter tuning and regularization to prevent overfitting."
        ],
        github: null,
        demo: null,
        report: "/sign-lang.pdf",
        screenshot: null
    }
];



function syntaxHighlight(json) {
    return json
        .replace(/("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*?"(?=\s*:))/g, '<span class="text-blue-400">$1</span>') // keys
        .replace(/(:\s*)"([^"]*)"/g, ': <span class="text-orange-300">"$2"</span>') // string values
        .replace(/(:\s*)(\d+)/g, ': <span class="text-green-400">$2</span>') // numbers
        .replace(/([{}\[\]])/g, '<span class="text-gray-400">$1</span>'); // braces
}

export default function Projects({ projectRefs }) {
    const [openDesc, setOpenDesc] = useState({});

    const toggleDesc = (name) => {
        setOpenDesc((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <section
            id="projects"
            className="w-full h-full flex flex-col justify-start overflow-hidden mt-30 min-h-screen "
            style={{ fontVariantLigatures: "none" }}
        >
            {/* Terminal style header */}
            <div className="text-sm mb-5 select-text">
                <span className="text-[#569cd6]">PS</span>{" "}
                <span className="text-white">C:\Users\Harsh\brain\src\projects&gt; </span>
                <span className="animate-pulse text-white">▍</span>
            </div>

            {projects.map((proj, index) => (
                <article
                    key={proj.name}
                    id={proj.name.toLowerCase()}
                    ref={(el) => {
                        if (projectRefs?.current) {
                            projectRefs.current[proj.name.toLowerCase()] = el;
                        }
                    }}
                    className="mb-8 border-l-4 border-[#007acc] pl-6"
                >
                    {/* Title */}
                    <h2 className="font-mono text-base text-[#c9c950] mb-1 select-text">
                        "{proj.title}"
                    </h2>

                    {/* Context as green comment */}
                    <p className="text-[#6a9955] italic text-xs mb-2 select-text cursor-default">
            // {proj.context}
                    </p>

                    {/* Period */}
                    <div className="text-sm mb-1 select-text">
                        <span className="text-[#569cd6]">const</span>{" "}
                        <span className="text-[#9cdcfe]">period</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-[#ce9178]">"{proj.period}"</span>;
                    </div>

                    {/* Stack */}
                    <div className="text-sm mb-3 select-text">
                        <span className="text-[#569cd6]">const</span>{" "}
                        <span className="text-[#9cdcfe]">stack</span>{" "}
                        <span className="text-white">=</span>{" "}
                        <span className="text-white">[</span>{" "}
                        <span className="text-[#ce9178]">
                            {proj.stack.map((tech, i) => (
                                <span key={tech}>
                                    "{tech}"
                                    {i < proj.stack.length - 1 ? <span className="text-white">, </span> : ""}
                                </span>
                            ))}
                        </span>{" "}
                        <span className="text-white">];</span>
                    </div>

                    {/* Highlights as bullet list */}
                    <ul className="list-disc list-inside text-gray-300 text-sm mb-3">
                        {proj.highlights.map((h, i) => (
                            <li key={i} className="pl-2">
                                {h}
                            </li>
                        ))}
                    </ul>

                    {/* Collapsible summary */}
                    <button
                        onClick={() => toggleDesc(proj.name)}
                        className="text-[#569cd6] text-xs mb-3 hover:underline focus:outline-none"
                        aria-expanded={!!openDesc[proj.name]}
                        aria-controls={`${proj.name}-desc`}
                    >
                        {openDesc[proj.name] ? "Hide Summary ▲" : "Show Summary ▼"}
                    </button>

                    {openDesc[proj.name] && (
                        <p
                            id={`${proj.name}-desc`}
                            className="bg-[#252526] rounded-md p-3 text-[#d4d4d4] text-sm max-w-3xl select-text whitespace-pre-wrap"
                        >
                            {proj.summary}
                        </p>
                    )}

                    {/* Links */}
                    <div className="text-sm mt-2 space-x-4 select-text">
                        {proj.github ? (
                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#3794ff] hover:underline"
                            >
                                [GitHub]
                            </a>
                        ) : (
                            <span className="text-gray-600 cursor-not-allowed">[GitHub Restricted]</span>
                        )}

                        {proj.demo ? (
                            <a
                                href={proj.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#3794ff] hover:underline"
                            >
                                [Live Demo]
                            </a>
                        ) : proj.screenshot ? (
                            <a
                                href={proj.screenshot}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#3794ff] hover:underline"
                            >
                                [Output Screenshot]
                            </a>
                        ) : (
                            <span className="text-gray-600 cursor-not-allowed">[Demo Unavailable]</span>
                        )}

                        {proj.report ? (
                            <a
                                href={proj.report}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#3794ff] hover:underline"
                            >
                                [Report]
                            </a>
                        ) : (
                            <span className="text-gray-600 cursor-not-allowed">[Report On Request]</span>
                        )}
                        {index < projects.length - 1 && (
                            <hr className="border-t border-gray-700 mb-8 max-w-7xl" />
                        )}
                    </div>
                </article>
            ))}
        </section>
    );
}
