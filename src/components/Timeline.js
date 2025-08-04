import { motion } from "framer-motion";

const education = [
  {
    title: "M.S. in Computer Science",
    school: "Arizona State University",
    period: "Aug 2024 – May 2026",
    projects: [
      { name: "Kafka + Neo4j Streaming Pipeline", tech: ["Kafka", "Neo4j", "Kubernetes", "Docker"] },
      { name: "Warehouse Robot Optimization using Clingo", tech: ["Clingo", "Answer Set Programming", "Python"] },
      { name: "Spatial Data Analysis using Apache Spark and Scala", tech: ["Apache Spark", "Scala", "Java"] },
      { name: "Mapping Accident Trends & Patterns", tech: ["D3.js", "JavaScript", "Node.js"] },
      { name: "Blockchain & AI for Detecting Financial Data Breaches", tech: ["Blockchain", "AI"] }
    ]
  },
  {
    title: "Bachelor's in Technology",
    school: "Savitribai Phule Pune University",
    period: "July 2019 – May 2023",
    projects: [
      { name: "Real Time Sign Language Detection Using Feed-Forward Neural Network", tech: ["Neural Networks", "Python", "MediaPipe"] },
      { name: "OMR Sheets Evaluation Using Image Processing", tech: ["OpenCV", "Python"] },
      { name: "Real-time Patient Monitoring System", tech: ["IoT", "Embedded Systems", "Sensors"] }
    ]
  }
];

const experience = [
  {
    role: "Backend Developer",
    company: "Neuromonk Infotech Pvt Ltd",
    period: "Jan 2023 - June 2024",
    narrative:
      "From clean code shipper to product shaper, I thrive on turning ideas into scalable backend systems.",
    highlights: [
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
    role: "Freelance Web Developer",
    company: "Freelancer",
    period: "July 2022 - Dec 2023",
    narrative:
      "In the whirlwind world of freelance, I learned that clarity is king and delivering with precision is the crown jewel.",
    highlights: [
      "Scoped and shipped full-stack builds that solved real client problems with no hand-holding.",
      "Worked directly with founders, transforming vague ideas into clear technical requirements.",
      "Delivered responsive, performant websites using React/Next.js and Node.js backends.",
      "Merged ideas into production-ready sites that felt effortless (spoiler: they weren’t)."
    ],
    end_creds: "Fast-paced freelance work taught me the value of clarity, pushback, and delivering production-ready solutions.",
  },
  {
    role: "Software Engineer Intern",
    company: "ISOBEX LLP, Pune-India",
    period: "July 2021 - Aug 2021",
    narrative:
      "Dove into legacy code, refactored slow queries, and built tools that eased the dev team’s workflow.",
    highlights: [
      "Refactored slow SQL queries; cut report latency from 2.5s to almost 1.5s for legacy \"Lead Generation\" tool",
      "Replaced hard-coded joins by ORM models, improving data consistency and feature agility.",
      "Participated in sprint planning, reviews, and pair coding with senior engineers.",
      "Gained exposure to production-grade delivery cycles with industry standards.",
    ],
    end_creds: "That internship was my forge — where theory met practice, and I learnt the strength in small improvements and thoughtful collaboration."
  }
];

const combined = [];
const maxLength = Math.max(experience.length, education.length);
for (let i = 0; i < maxLength; i++) {
  if (i < experience.length) combined.push({ type: "experience", ...experience[i] });
  if (i < education.length) combined.push({ type: "education", ...education[i] });
}

combined.sort((a, b) => {
  const getStart = (item) => {
    const period = item.period.split("–")[0].trim();
    const [monthStr, year] = period.split(" ");
    const months = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    return new Date(year, months[monthStr.slice(0, 3)] || 0);
  };
  return getStart(b) - getStart(a);
});

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-white text-center">
        <span className="relative inline-block">
          My Journey
          <span className="absolute left-0 -bottom-1 h-1 w-full bg-red-500"></span>
        </span>
      </h2>

      <div className="relative flex flex-col gap-16 before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-700 before:left-[calc(0%)] md:before:left-1/4">
        {combined.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full pl-6 md:pl-[calc(30%)] text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className="
                absolute top-2
                left-0.5
                md:left-[calc(25%+2px)]
                w-0 h-0
                border-t-8 border-b-8 border-l-[12px]
                border-l-white border-transparent
              "
            ></div>

            {item.type === "education" ? (
              <>
                <h4 className="text-lg font-semibold text-red-400">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.school}</p>
                <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                {item.projects && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-white mb-1">📚 University Projects</p>
                    <ul className="list-disc ml-5 text-sm text-gray-400">
                      {item.projects.map((proj, i) => (
                        <li key={i}>
                          {proj.name}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#projects"
                      className="mt-2 inline-block text-red-400 text-sm hover:underline"
                    >
                      View detailed projects →
                    </a>
                  </div>
                )}

              </>
            ) : (
              <>
                <h4 className="text-lg font-semibold text-red-400">
                  {item.role} <span className="text-sm text-gray-400">@ {item.company}</span>
                </h4>
                <p className="italic text-sm text-gray-300 mb-2">{item.narrative}</p>
                <p className="text-sm text-gray-400 mb-2">{item.period}</p>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300 max-w-2xl">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                < p className="mb-4"></p>
                <p className="italic text-sm text-gray-300 mb-2">{item.end_creds}</p>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
