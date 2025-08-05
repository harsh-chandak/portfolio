'use client';
import {
  FaHtml5, FaJsSquare, FaReact, FaCss3Alt, FaNodeJs, FaGitAlt,
  FaDocker, FaPython, FaAws
} from "react-icons/fa";
import {
  SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiRedis, SiTypescript
} from "react-icons/si";
import VSCodeFileView from "./VSCodefileView";

const skills = [
  { icon: <FaJsSquare />, name: "JavaScript", color: "#f7df1e" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#3c873a" },
  { icon: <FaReact />, name: "React", color: "#61dafb" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
  { icon: <SiExpress />, name: "Express.js", color: "#d4d4d4" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#4db33d" },
  { icon: <SiMysql />, name: "MySQL", color: "#4479a1" },
  { icon: <FaPython />, name: "Python", color: "#3572A5" },
  { icon: <FaHtml5 />, name: "HTML", color: "#e34c26" },
  { icon: <FaCss3Alt />, name: "CSS", color: "#264de4" },
  { icon: <SiRedis />, name: "Redis", color: "#d82c20" },
  { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
  { icon: <FaDocker />, name: "Docker", color: "#2496ed" },
  { icon: <FaAws />, name: "AWS", color: "#ff9900" },
];

// Map skill name to skill object for quick lookup
const skillMap = Object.fromEntries(skills.map(s => [s.name, s]));

const devCodeLines = [
  { indent: 0, content: '// About Me' },
  { indent: 0, content: 'const dev = {' },
  { indent: 1, content: 'name: "Harsh N. Chandak",', isNameString: true },
  { indent: 1, content: 'title: "Full-stack | Backend Dev",' },
  { indent: 1, content: 'experience: "20+ projects (ERP, LMS, e-com)",' },
  { indent: 1, content: 'philosophy: "Ship if chaotic, automate if boring, scale before needed",' },
  { indent: 1, content: 'traits: [' },
  { indent: 2, content: '"system-thinker",' },
  { indent: 2, content: '"api-gardener",' },
  { indent: 2, content: '"legacy-fixer"' },
  { indent: 1, content: '],' },
  { indent: 1, content: 'setup: [' },
  { indent: 2, content: '"☕ Coffee",' },
  { indent: 2, content: '"Postman",' },
  { indent: 2, content: '"Jira",' },
  { indent: 2, content: '"VS Code",' },
  { indent: 2, content: '"browser tabs",' },
  { indent: 2, content: '"notes"' },
  { indent: 1, content: '],' },
  { indent: 1, content: 'focus: [' },
  // skills inside focus with isSkill:true to render icon
  ...skills.map((skill, i) => ({
    indent: 2,
    content: `"${skill.name}"${i !== skills.length - 1 ? ',' : ''}`,
    isSkill: true,
  })),
  { indent: 1, content: '],' },
  { indent: 0, content: '};' },
];

// Regex for syntax highlighting tokens
function syntaxHighlight(line, forceWhiteString = false) {
  // Check if entire line is a comment (starts with //)
  if (/^\/\/.*/.test(line)) {
    return <span className="text-[#6a9955] italic">{line}</span>;
  }

  // Otherwise do normal token-level highlighting
  const patterns = [
    { regex: /\b(const|let|var)\b/, cls: 'text-[#569cd6] font-semibold' }, // keywords
    { regex: /\b(dev|name|title|experience|philosophy|traits|setup|focus)\b/, cls: 'text-[#9cdcfe]' }, // object keys
    { regex: /"[^"]*"/, cls: forceWhiteString ? 'text-white' : 'text-[#ce9178]' }, // strings
    { regex: /[\{\}\[\]\(\)]/, cls: 'text-[#d4d4d4] font-bold' }, // brackets
    { regex: /[:,;=]/, cls: 'text-white' }, // punctuation
  ];

  // Split line by spaces and punctuation for highlighting
  const tokens = line.split(/(\s+|[:,\[\]\{\}])/).filter(Boolean);

  return tokens.map((token, i) => {
    for (const { regex, cls } of patterns) {
      if (regex.test(token)) {
        return <span key={i} className={cls}>{token}</span>;
      }
    }
    return <span key={i}>{token}</span>;
  });
}

export default function About() {
  return (
    <section
      id="about"
      className="text-gray-100 min-h-[80vh] max-w-5xl mx-auto font-mono overflow-x-auto"
    >
      <div className="bg-[#1e1e1e] rounded-lg shadow-lg">
        {devCodeLines.map((line, idx) => {
          if (line.isSkill) {
            // Render skill line with icon and colored string
            const skill = skillMap[line.content.replace(/["',]/g, '')];
            return (
              <div
                key={idx}
                className="flex items-center select-text"
              >
                <Line
                  number={idx + 1}
                  indent={line.indent} // Use actual indent here
                  content={line.content}
                  forceWhiteString={false}
                />
                <span style={{ color: skill.color }} className="text-lg ml-2">
                  {skill.icon}
                </span>
              </div>
            );
          }

          return (
            <Line
              key={idx}
              number={idx + 1}
              indent={line.indent}
              content={line.content}
              forceWhiteString={!!line.isNameString}
            />
          );
        })}
      </div>
    </section>
  );
}

function Line({ number, indent, content, forceWhiteString = false }) {
  return (
    <div className="flex select-text">
      <span
        className="text-[#858585] w-10 text-right select-none pr-4"
        style={{ userSelect: 'none' }}
      >
        {number}
      </span>

      <pre
        className="m-0"
        style={{ paddingLeft: `${indent * 1.5}rem`, color: '#ce9178' }}
      >
        {syntaxHighlight(content, forceWhiteString)}
      </pre>
    </div>
  );
}
