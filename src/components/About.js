'use client';
import {
  FaHtml5, FaJsSquare, FaReact, FaCss3Alt, FaNodeJs, FaGitAlt,
  FaDocker, FaPython, FaAws
} from "react-icons/fa";
import {
  SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiRedis, SiTypescript
} from "react-icons/si";

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

const skillMap = Object.fromEntries(skills.map(s => [s.name, s]));

const devCodeLines = [
  { indent: 0, content: '// About Me' },
  { indent: 0, content: 'const dev = {' },
  { indent: 1, content: 'name: "Harsh N. Chandak",', isNameString: true },
  { indent: 1, content: 'title: "Full-stack | Backend Developer",' },
  { indent: 1, content: 'education: "MSCS @ASU",' },
  { indent: 1, content: 'philosophy: "Ship if chaotic, automate if boring, scale before needed",' },
  { indent: 1, content: 'core_skills: [' },
  { indent: 2, content: '"REST APIs",' },
  { indent: 2, content: '"Web Dev",' },
  { indent: 2, content: '"Data Viz",' },
  { indent: 2, content: '"System Optmization",' },
  { indent: 2, content: '"System Design"' },
  { indent: 1, content: '],' },
  { indent: 1, content: 'traits: [' },
  { indent: 2, content: '"system-thinker",' },
  { indent: 2, content: '"api-gardener",' },
  { indent: 2, content: '"legacy-fixer"' },
  { indent: 1, content: '],' },
  { indent: 1, content: 'daily_setup: [' },
  { indent: 2, content: '"☕ Coffee",' },
  { indent: 2, content: '"Postman",' },
  { indent: 2, content: '"Jira",' },
  { indent: 2, content: '"VS Code",' },
  { indent: 2, content: '"browser tabs",' },
  { indent: 2, content: '"notes"' },
  { indent: 1, content: '],' },
  { indent: 1, content: 'tech_stack: [' },
  ...skills.map((skill, i) => ({
    indent: 2,
    content: `"${skill.name}"${i !== skills.length - 1 ? ',' : ''}`,
    isSkill: true,
  })),
  { indent: 1, content: ']' },
  { indent: 0, content: '};' },
];

function syntaxHighlight(line, forceWhiteString = false) {
  if (/^\s*\/\/.*/.test(line)) {
    return <span className="text-[#6a9955] italic">{line}</span>;
  }

  const patterns = [
    { regex: /\b(const|let|var)\b/, cls: 'text-[#569cd6] font-semibold' },
    { regex: /\b(dev|name|title|education|philosophy|traits|daily_setup|tech_stack|core_skills)\b/, cls: 'text-[#9cdcfe]' },
    { regex: /"[^"]*"/, cls: forceWhiteString ? 'text-white' : 'text-[#ce9178]' },
    { regex: /[\{\}\(\)]/, cls: 'text-[#ee16c7] font-bold' },
    { regex: /[\[\]]/, cls: 'text-[#FFFF00] font-bold' },
    { regex: /[:,;=]/, cls: 'text-white' },
  ];

  const tokens = line.split(/(\s+|[:,\[\]\{\}])/).filter(Boolean);

  return tokens.map((token, i) => {
    // Match skills and add inline icon
    if (/^"[^"]+"$/.test(token)) {
      const skillName = token.replace(/["',]/g, '');
      const skill = skillMap[skillName];
      if (skill) {
        return (
          <span key={i} className="inline-flex items-center space-x-1 mr-2 align-middle">
            <span className={forceWhiteString ? 'text-white' : 'text-[#ce9178]'}>
              {token}
            </span>
            <span className="text-base" style={{ color: skill.color }}>
              {skill.icon}
            </span>
          </span>
        );

      }
    }

    for (const { regex, cls } of patterns) {
      if (regex.test(token)) {
        return <span key={i} className={cls}>{token}</span>;
      }
    }

    return <span key={i}>{token}</span>;
  });
}

function Line({ number, indent, content, forceWhiteString = false }) {
  return (
    <div className="flex select-text w-full">
      <span
        className="text-[#858585] w-10 text-right select-none pr-4"
        style={{ userSelect: 'none' }}
      >
        {number}
      </span>
      <pre
        className="whitespace-pre-wrap break-words w-full m-0"
        style={{ paddingLeft: `${indent * 1.5}rem`, color: '#ce9178' }}
      >
        {syntaxHighlight(content, forceWhiteString)}
      </pre>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1e1e1e] text-gray-200 font-mono flex-1 max-w-full sm:max-w-5xl px-4 sm:px-8 " 
    >
      <div className="bg-[#1e1e1e] rounded-lg shadow-lg overflow-x-auto">
        {devCodeLines.map((line, idx) => {
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
