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
      "Used Puppeteer + cron + MongoDB with JWT-auth to personalize tracking and statuses. Saving hours of weekly job hunt efforts for real-time discovery.",
    highlights: [
      "Automated scraping of job boards (static + dynamic) using Puppeteer with cron jobs.",
      "Mapped scraped data into structured JSON and filtered jobs by role, remote, and stack.",
      "Sent real-time alerts via Discord Webhooks and tracked job applications with status workflows.",
      "Built secure multi-user login with JWT auth and scoped MongoDB collections with multi-tenant support."
    ],
    github: "https://github.com/harsh-chandak/job-alerts/blob/main/README.md",
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
      "Built a Kafka → Neo4j stream processor with Dockerized BFS/PageRank analytics. Enabled live user graph insights with real-time updates under load.",
    highlights: [
      "Captured live user events via Kafka and transformed them into graph structures using Python consumers.",
      "Used BFS traversal and PageRank in Neo4j to infer real-time influence scores across 1.5K+ nodes.",
      "Deployed the system on Minikube with 6 Docker containers, handling 5K+ events/min with <1s latency.",
      "Benchmarked batch sizes and thread concurrency to improve processing throughput by ~30%."
    ],
    github: null,
    demo: null,
    report: null,
    screenshot: "/images/streamflow-pipeline.gif"
  },
  {
    name: "asp-clingo.json",
    title: "Warehouse Robot Optimization using Clingo",
    context: "ASU Knowledge Representation and Reasoning project",
    period: "Fall 2024",
    stack: ["Clingo", "Answer Set Programming", "Python"],
    summary:
      "Simulated warehouse robot logic using Clingo + Python wrapper. Solved multi-agent delivery plans with optimal horizon search in ASP.",
    highlights: [
      "Encoded 4x4 grid warehouse with 2 robots, 6 shelves, and 1 picking station in ASP.",
      "Defined movement, pickup, and delivery rules with frame axioms and conflict resolution.",
      "Developed a Python-Clingo wrapper for dynamic horizon planning; minimized makespan in 80% of test cases.",
      "Verified plan validity through simulation and compared against brute-force Python baseline (~2x speedup)."
    ],
    github: null,
    demo: "https://krr-project.onrender.com",
    report: null,
    screenshot: null
  },
  {
    name: "spatial-sql.json",
    title: "Spatial Data Analysis using Apache Spark and Scala",
    context: "ASU big data and geospatial analytics course",
    period: "Spring 2025",
    stack: ["Apache Spark", "Scala", "Java", "Spatial SQL Queries"],
    summary:
      "Analyzed large spatial datasets via Spark + Scala + Spatial SQL. Optimized joins, geohash clusters, and RDDs for fast geospatial queries.",
    highlights: [
      "Processed 1M+ geospatial points using custom partitioned RDD pipelines in Scala.",
      "Used Geohash encoding to aggregate hotspots and reduced join runtime by ~40%.",
      "Implemented spatial filters (bounding box, radius, distance) with Spark SQL extensions.",
      "Visualized point clusters using Vega-lite to identify urban traffic patterns in NYC yellow cab trips dataset."
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
      "Mapped 185K+ accident records using D3.js & GeoJSON. Built six interactive charts, placing 3rd in class data storytelling showcase.",
    highlights: [
      "Parsed 185,000+ records using Node.js and grouped by spatial clusters via Turf.js.",
      "Built interactive timeline, heatmap, radial chart, and scatterplot using D3.js.",
      "Filtered by weather, time of day, and location to uncover correlations in accidents.",
      "Ranked top 3 in class competition for visual storytelling, usability, and clarity."
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
      "Studied AI + Blockchain for breach detection in fintech. Proposed verifiable audit trails using anomaly detection + smart contracts.",
    highlights: [
      "Reviewed 30+ papers on AI for fraud detection and smart contracts for auditability.",
      "Proposed a dual-layer architecture with Ethereum logs + ML models for breach detection.",
      "Simulated breach logs and anomaly scores to validate smart contract alerts.",
      "Compiled findings into a 60-page whitepaper with system architecture and evaluation metrics."
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
      "Built a DApp for property ownership using Solidity + Flutter. Tested secure record transfers on Ethereum (Ganache + Truffle).",
    highlights: [
      "Wrote Solidity contracts for property creation, transfer, and verification.",
      "Created a Flutter front-end enabling property registration with MetaMask auth.",
      "Used Truffle for testing and Ganache for local Ethereum deployment.",
      "Verified state transitions and event emissions across 10+ transaction scenarios."
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
      "Automated OMR grading with OpenCV under noisy lighting. Tuned bubble detection + GUI preview for accuracy and flexibility.",
    highlights: [
      "Used adaptive thresholding and contour filters to detect filled bubbles.",
      "Tuned image preprocessing to handle glare and scan noise from mobile captures.",
      "Achieved ~97.6% bubble detection accuracy across 120+ test sheets.",
      "Built a web-based GUI to preview sheets and allow manual corrections if needed."
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
      "Trained a FFNN to classify sign gestures using MediaPipe features. Achieved ~98% accuracy in real-time hand-to-text prototype.",
    highlights: [
      "Used MediaPipe to extract 21 keypoints and engineer gesture features.",
      "Trained FFNN classifier on 20 American Sign Language (ASL) signs.",
      "Achieved 97.8% test accuracy using 5-fold cross-validation.",
      "Developed a real-time inference GUI that converted hand signs to on-screen text."
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
                    <button
                        onClick={() => toggleDesc(proj.name)}
                        className="text-xs mb-3 px-2 py-1 rounded bg-[#007acc]/20 hover:bg-[#007acc]/40 text-[#9cdcfe] font-semibold tracking-wide transition-colors duration-150"
                        aria-expanded={!!openDesc[proj.name]}
                        aria-controls={`${proj.name}-desc`}
                    >
                        {openDesc[proj.name] ? "Hide Details ▲" : "Show Details ▼"}
                    </button>
                    {openDesc[proj.name] && (
                        <ul className="list-disc list-inside text-gray-300 text-sm mb-3">
                            {proj.highlights.map((h, i) => (
                                <li key={i} className="pl-2">
                                    {h}
                                </li>
                            ))}
                        </ul>
                    )}


                    {/* Collapsible summary */}


                    <p
                        id={`${proj.name}-desc`}
                        className="bg-[#252526] rounded-md p-3 text-[#d4d4d4] text-sm max-w-3xl select-text whitespace-pre-wrap"
                    >
                        {proj.summary}
                    </p>

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
                            <span
                                className="text-gray-600 cursor-help"
                                title="GitHub access restricted due to Academic Integrity Policy"
                            >
                                [GitHub Restricted]
                            </span>
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
