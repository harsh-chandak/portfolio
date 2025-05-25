import { motion } from "framer-motion";

const education = [
  {
    title: "M.S. in Computer Science",
    school: "Arizona State University",
    period: "Aug 2024 – May 2026",
    projects: [
      { name: "💾 Kafka + Neo4j Streaming Pipeline", tech: ["Kafka", "Neo4j", "Kubernetes", "Docker"] },
      { name: "🧠 Warehouse Robot Optimization using Clingo", tech: ["Clingo", "Answer Set Programming", "python"] },
      { name: "🧪 Spatial Data Analysis using Apache Spark and Scala", tech: ["Apache Spark", "Scala", "Java"] },
      { name: "📈 Mapping Accident Trends & Patterns", tech: ["D3.js", "Storytelling", "JavaScript", "Node.js"] },
      { name: "🔐 Blockchain & AI for Detecting Financial Data Breaches", tech: ["Blockchain", "AI"] }
    ]
  },
  {
    title: "Bachelor's in Technology",
    school: "Savitribai Phule Pune University",
    period: "July 2019 – May 2023",
    projects: [
      { name: "🧠 Real Time Sign Language Detection Using Feed-Forward Neural Network", tech: ["Neural Networks", "Python", "MediaPipe"] },
      { name: "🧪 OMR Sheets Evaluation Using Image Processing", tech: ["OpenCV", "Image Processing", "Python"] },
      { name: "🛰️ Real-time Patient Monitoring System", tech: ["IoT", "Embedded Systems", "Sensor Technologies"] }
    ]
  }
];

const experience = [
  {
    role: "Backend Developer",
    company: "Neuromonk Infotech Pvt Ltd",
    period: "Jan 2023 - June 2024",
    description:
      `
      ✨ Started by shipping clean code. Ended up shaping the whole product.
      🛠️ Built backends that scaled, APIs that sang, and systems that just worked.
      🧩 Sat with clients, asked sharp questions, and turned “I have an idea” into “here’s your login.”
      🎯 Merged dev with go-to-market thinking. Great tech deserves great timing.
      🤹‍♂️ Balanced sprints, standups, and strategy docs without dropping the ball (or the build).
      🚪 Walked into rooms as the dev. Walked out as the one who made it click.
      `,
  },
  {
    role: "Freelance Web Developer",
    company: "Freelancer",
    period: "July 2022 - Dec 2023",
    description:
      `
      🕵️‍♂️ Freelance taught me fast: the brief is never the full story.
      💬 Worked with founders who didn’t need “just code”, they needed clarity, pushback, and progress.
      🛠️ Scoped, challenged, shipped, full-stack builds with real stakes and no hand-holding.
      ⚡ Merged ideas into production-ready sites that felt effortless (spoiler: they weren’t).
      🎯 Goal? Not “done,” but right, tech that looked good, ran smooth, and actually solved something.
      `,
  },
  {
    role: "Software Engineer Intern",
    company: "ISOBEX LLP, Pune-India",
    period: "July 2021 - Aug 2021",
    description:
      `
      🧠 Walked into legacy code I didn’t write, walked out understanding why it broke (and how to fix it).
      🪄 Turned messy SQL into clean logic that made the app breathe easier.
      🧰 Built internal tools that weren’t glamorous, but the devs still thank me.
      🫱 Paired with seniors, poked holes in assumptions, and learned to ask better questions.
      🚦 It wasn’t about time, it was about momentum. I left with more than commits: I left with confidence.
      `,
  },
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

      <div className="relative flex flex-col gap-16 before:content-[''] before:absolute before:left-1/4 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-700">
        {combined.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full md:w-full pl-[calc(30%)] text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute top-1 left-[calc(25%+2px)] w-0 h-0 border-t-8 border-b-8 border-l-[12px] border-l-white border-transparent"></div>
            {item.type === "education" ? (
              <>
                <h4 className="text-lg font-semibold text-red-400">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.school}</p>
                <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                {item.projects && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-white mb-2">📚 University Projects</p>
                    <div className="space-y-2">
                      {item.projects.map((proj, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p className="text-sm text-gray-300 leading-snug" style={{ marginRight: '10px' }}>{proj.name || proj}</p>
                            {proj.tech && (
                              <div className="flex flex-wrap gap-1">
                                {proj.tech.map((tech, j) => (
                                  <span key={j} className="bg-gray-700 text-gray-300 px-0.5 py-0.2 text-xs rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <h4 className="text-lg font-semibold text-red-400">
                  {item.role} <span className="text-sm text-gray-400">@ {item.company}</span>
                </h4>
                <p className="text-sm text-gray-400 mb-2">{item.period}</p>
                {item.description.split("\n").map((line, idx) => (
                  <p key={idx} className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                    {line.trim()}
                  </p>
                ))}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}