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
  { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
  { icon: <FaReact />, name: "React", color: "text-blue-400" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
  { icon: <SiExpress />, name: "Express.js", color: "text-gray-400" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-300" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-500" },
  { icon: <SiMysql />, name: "MySQL", color: "text-cyan-300" },
  { icon: <FaPython />, name: "Python", color: "text-yellow-300" },
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-600" },
  { icon: <SiRedis />, name: "Redis", color: "text-red-500" },
  { icon: <FaGitAlt />, name: "Git", color: "text-red-600" },
  { icon: <FaDocker />, name: "Docker", color: "text-blue-400" },
  { icon: <FaAws />, name: "AWS", color: "text-cyan-500" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <h2 className="text-4xl font-bold mb-12 text-white text-center">
        <span className="relative inline-block">
          About
          <span className="absolute left-0 -bottom-1 h-2 w-full bg-red-500"></span>
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="text-gray-300 text-lg max-w-2xl text-justify">
          <p className="mb-6">
            An experienced Backend / Full-stack dev. I've engineered backends for 20+ Projects and SaaS systems (ERP, CRM, LMS, e-commerce). Optimized backends for horizontal scalability, multi-tenancy; isolating clients and supporting growth
          </p>

          <p className="mb-6">
            Whether I’m building APIs, cleaning legacy SQL, or containerizing microservices, I focus on clarity, performance, and purpose. I’ve been the dev who architects clean logic, the fixer who walks into messy systems, and the teammate who turns ambiguity into roadmap tickets.
          </p>

          <p className="mb-6">
            <strong>My daily set-up:</strong> Coffee, Postman, Jira, VS Code, multiple browser tabs & notes<br/> 
            <strong>What am I upto?:</strong> REST APIs, Web Dev, Data Viz & thinking of optimization
          </p>

          <p>
            I enjoy tackling tough problems, structuring messy docs, and building systems that are more than just code. If it’s chaotic, I ship it. If it’s boring, I automate it. If it scales, I’m already testing it.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
          {skills.map(({ icon, name, color }) => (
            <div
              key={name}
              className={`flex flex-col items-center justify-center w-20 h-20 rounded-full ${color} bg-[#151515] border border-pink-500 shadow-md hover:scale-110 transition-all duration-300`}
            >
              <div className="text-2xl">{icon}</div>
              <span className="text-[10px] mt-1 font-medium text-center px-1 text-white opacity-70">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}