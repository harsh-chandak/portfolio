import { useState } from "react";
// projects.js (or define at top of Projects.jsx)
export const projects = [
    {
        title: "Web-scraping Tool for Job Alerts + Application Tracker",
        context: "A personal project born from job hunt frustration.",
        period: "Summer 2025",
        stack: ["Next.js", "MongoDB", "Node.js", "Puppeteer", "Discord Webhook", "JWT Auth", "Tailwind CSS"],
        summary:
            "Built a full-stack platform automating job alerts via Discord and tracking applications with filters and follow-ups.",
        highlights: [
            "Created Puppeteer scraper for API/static pages with JSON mapping and cron alerts.",
            "Designed app tracker with status workflows, filters, and Discord notifications.",
            "Implemented multi-tenant JWT auth, user-specific MongoDB, and secured API endpoints."
        ]
    },
    {
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
        ]
    },
    {
        title: "Warehouse Robot Optimization using Clingo",
        context: "ASU logic programming and automation project",
        period: "Fall 2024",
        stack: ["Clingo", "Answer Set Programming", "Python"],
        summary:
            "Modeled multi-agent warehouse robot paths with declarative logic and ASP planning.",
        highlights: [
            "Defined frame axioms and rules simulating autonomous robot navigation.",
            "Built Python wrapper to iteratively run Clingo with dynamic horizons.",
            "Benchmarked performance across various warehouse grid layouts."
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
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
        ]
    },
    {
        title: "Real-Time Patient Monitoring System",
        context: "Undergraduate IoT project addressing hospital bed shortages and easing healthcare staff load during pandemics.",
        period: "Spring 2022",
        stack: ["IoT", "Embedded Systems", "Sensors", "Arduino Tech", "C++"],
        summary:
            "Designed a real-time vitals monitoring system with anomaly alerts for patient safety.",
        highlights: [
            "Integrated sensors with microcontroller and wireless modules.",
            "Developed live dashboard for vitals tracking and alerts.",
            "Tested system responses with simulated patient data scenarios."
        ]
    },
    {
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
        ]
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 text-white text-center tracking-wide">
                <span className="relative inline-block">
                    Featured Projects
                    <span className="absolute left-0 -bottom-1 h-1 w-full bg-red-500 rounded"></span>
                </span>
            </h2>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} project={proj} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            tabIndex={0}
            className="bg-gray-900 rounded-lg shadow-xl p-6 cursor-pointer hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setExpanded(!expanded)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={`Project details for ${project.title}`}
        >
            <h3 className="text-2xl font-semibold text-red-400 mb-1">{project.title}</h3>
            <p className="text-sm text-gray-400 font-mono mb-2">{project.period}</p>
            <p className="text-sm text-gray-300 italic mb-3 pl-3 border-l-2 border-red-500">
                {project.context}
            </p>
            <p className="text-sm text-gray-400 italic mb-3">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                    <span
                        key={i}
                        className="text-xs font-semibold bg-red-400/30 text-red-100 px-3 py-1 rounded-full uppercase tracking-wide select-none"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(!expanded);
                }}
                className="flex items-center text-red-400 hover:text-red-500 focus:text-red-500 focus:outline-none font-semibold"
                aria-expanded={expanded}
                aria-controls={`project-details-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
                {expanded ? "Hide Details" : "Show Details"}
                <svg
                    className={`ml-2 w-5 h-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div
                id={`project-details-${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                className={`mt-4 max-h-0 overflow-hidden transition-max-height duration-500 ease-in-out ${expanded ? "max-h-96" : ""
                    }`}
                aria-hidden={!expanded}
            >
                <ul className="list-disc ml-5 text-sm text-gray-300 space-y-2">
                    {project.highlights.map((point, i) => (
                        <li key={i} className="leading-relaxed">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}