import { FaHtml5, FaJsSquare, FaSass, FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaCloud } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaJsSquare />, name: "JAVASCRIPT", color: "text-yellow-400" },
  { icon: <FaSass />, name: "SASS", color: "text-pink-400" },
  { icon: <FaReact />, name: "REACT", color: "text-blue-400" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-600" },
  { icon: <SiMongodb />, name: "MONGODB", color: "text-green-500" },
  { icon: <SiNextdotjs />, name: "NEXT.JS", color: "text-white" },
  { icon: <SiExpress />, name: "EXPRESS.JS", color: "text-gray-400" },
  { icon: <FaNodeJs />, name: "NODE.JS", color: "text-green-600" },
  { icon: <FaGitAlt />, name: "GIT", color: "text-red-600" },
  { icon: <SiMysql />, name: "MYSQL", color: "text-cyan-800" },
  { icon: <FaCloud />, name: "SaaS", color: "text-cyan-300" },
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
            I build systems that don’t blink when traffic spikes, and write code that still makes sense six months later. Whether it’s a multi-tenant backend, a performance-critical API, or a full-stack web app, I ship products that scale, stay clean, and solve real business problems.
          </p>
          <p className="mb-6">
            I’ve been the dev who architects, the PM who asks better questions, and the fixer who walks in mid-crisis and walks out with shipping dates. My sweet spot? Turning chaos into shipped product.
          </p>
          <p>
            If there’s ambiguity, I reduce it. If there’s friction, I debug it. If there’s a better way to solve it, I’m probably already building it.
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