'use client';
import { motion } from 'framer-motion';

const fakeHashes = [
  "d129bea", "c3dd2f2", "6ea7bd3", "b61862f", "cd96a2c",
  "79b5dd7", "1a3fe94", "44c29b8", "98c1032", "af31bce"
];

const education = [
  {
    title: "M.S. in Computer Science @ Arizona State University",
    school: "Arizona State University",
    period: "Aug 2024 – May 2026",
    projects: [
      "Kafka + Neo4j Streaming Pipeline",
      "Warehouse Robot Optimization using Clingo",
      "Spatial Data Analysis with Spark and Scala",
      "Mapping Accident Trends & Patterns",
      "Blockchain & AI for Detecting Data Breaches"
    ]
  },
  {
    title: " Bachelor of Technology @ Pune University",
    school: "Pune University",
    period: "Jul 2019 – May 2023",
    projects: [
      "Real Time Sign Language Detection",
      "OMR Sheets Evaluation Using Image Processing",
      "Real-time Patient Monitoring System"
    ]
  }
];

const experience = [
  {
    title: "Backend Developer @ Neuromonk",
    period: "Jan 2023 – Jun 2024",
    message: "feat(api): scale multi-tenant backend for 70+ clients",
    narrative: "From clean code shipper to product shaper, I thrive on turning ideas into scalable backend systems.",
    details: [
      "Engineered and optimized backends for 20+ SaaS platforms (ERP, CRM, LMS), supporting 70+ clients.",
      "Designed REST APIs with Node.js & Laravel; revamped auth/session logic, cutting client issues by 35%.",
      "Tuned PostgreSQL & MySQL queries with Redis caching, improving data ops speed by 40%.",
      "Collaborated with design, product, and QA to deliver features aligned with client workflows.",
      "Shaped product logic with PMs and designers, ensuring UX and engineering worked hand in hand.",
      "Mentored junior devs, boosting code quality and velocity through structured PR reviews.",
      "Proactively debugged and resolved edge-case failures across multi-tenant environments."
    ],
    end_creds: "As Neuromonk being a competitive start-up, every day was a puzzle: juggling urgent client fixes while building scalable features for the next release, and stepping into multiple roles."
  },
  {
    title: "Freelance Web Dev",
    period: "Jul 2022 – Dec 2023",
    message: "chore(freelance): delivered multiple production builds",
    narrative: "In the whirlwind world of freelance, I learned that clarity is king and delivering with precision is the crown jewel.",
    details: [
      "Scoped and shipped full-stack builds that solved real client problems with no hand-holding.",
      "Worked directly with founders, transforming vague ideas into clear technical requirements.",
      "Delivered responsive, performant websites using React/Next.js and Node.js backends.",
      "Merged ideas into production-ready sites that felt effortless (spoiler: they weren’t)."
    ],
    end_creds: "Fast-paced freelance work taught me the value of clarity, pushback, and delivering production-ready solutions."
  },
  {
    title: "Intern @ ISOBEX LLP",
    period: "Jul 2021 – Aug 2021",
    message: "refactor(sql): cut report load time by 1s",
    narrative: "Dove into legacy code, refactored slow queries, and built tools that eased the dev team’s workflow.",
    details: [
      "Refactored slow SQL queries; cut report latency from 2.5s to almost 1.5s for legacy \"Lead Generation\" tool",
      "Replaced hard-coded joins by ORM models, improving data consistency and feature agility.",
      "Participated in sprint planning, reviews, and pair coding with senior engineers.",
      "Gained exposure to production-grade delivery cycles with industry standards."
    ],
    end_creds: "That internship was my forge — where theory met practice, and I learnt the strength in small improvements and thoughtful collaboration."
  }
];

// Merge and tag entries
const combined = [...experience, ...education].map((item, idx) => ({
  ...item,
  type: education.includes(item) ? "edu" : "exp",
  hash: fakeHashes[idx] || Math.random().toString(16).slice(2, 9)
}));

// Sort newest to oldest based on period end-year
const parseStartYear = (period) => {
  const match = period?.match(/(\\d{4})/); // gets the first 4-digit year
  return match ? parseInt(match[1], 10) : 0;
};

combined.sort((a, b) => parseStartYear(b.period) - parseStartYear(a.period));

export default function TimelineTerminal() {
  return (
    <section
      id="timeline.js"
      className="w-full h-full flex flex-col justify-start overflow-hidden min-h-screen "
    >
      <div className="flex-1 w-full px-4 sm:px-8 overflow-y-auto">
        <div className="rounded-md p-4 bg-[#1e1e1e] overflow-x-auto">
          <div className="text-green-400 mb-4 text-sm">
            <span className="text-white">&gt; </span>git log --oneline 
            <span className="animate-pulse text-white"> ▍</span>
          </div>

          {combined.map((entry, i) => (
            <motion.div
              key={i}
              className="mb-6"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-sm text-[#9cdcfe] mb-1">
                <span className="text-green-400">{entry.hash}</span>{" "}
                <span className="text-red-400">{entry.title}</span>
              </div>

              <div className="text-xs text-gray-400">
                Author: Dev Harsh &lt;harsh-chandak&gt;
              </div>
              <div className="text-xs text-gray-500 mb-2">Date: {entry.period}</div>

              <div className="pl-4 text-sm text-gray-300 space-y-2">
                {entry.type === "exp" && (
                  <div className="italic text-[#6a9955]">{entry.narrative}</div>
                )}

                <ul className="list-none mt-1 space-y-1">
                  {(entry.details || entry.projects || []).map((line, idx) => (
                    <li key={idx}>
                      <span className="text-[#d4d4d4]">•</span> {line}
                    </li>
                  ))}
                </ul>

                {entry.end_creds && (
                  <div className="italic text-[#808080] mt-2">{entry.end_creds}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}