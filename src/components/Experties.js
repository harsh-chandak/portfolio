const expertise = [
  {
    title: "ERP Management Systems",
    image: "/images/erp.png",
    description:
      `
      🐴 Taming Complexity and operations, from sales to dispatch.
      🏗️ Built inventory logic that auto-rebalanced stock across warehouses, yes, it had opinions.
      📊 Designed BI dashboards that told stories, not just numbers (hello, exec summaries).
      🛠️ Production planning? Gantt-inspired timelines that respected both dev cycles and machine breakdowns.
      🧠 Assumed failure as the default, built like it.
      ✅ If you gave me your ops chaos today, I’d model it by Monday and stress test it by Friday.
      `,
      tech: [
        "Laravel", "MySQL", "Node.js", "Angular.js", "Chart.js",
        "PHP", "SQL", "REST APIs", "System Design"
      ],
  },
  {
    title: "E-Commerce Platforms",
    image: "/images/e-com.png",
    description:
      `
      🛒 It isn't “build a store.” It is: make commerce sing.
      🧱 Shipped 15+ full-stack storefronts. From fashion, accessories, to hardware and spare parts.
      💸 Integrated payments (Razorpay/Stripe) with grace, retries, refunds, and regrets included.
      📦 Backend: custom schemas per vertical. Frontend: fast enough to feel native.
      📈 Dashboards that helped sellers sell, not confuse them.
      🤹 Juggled orders, stock, delivery, roles, and edge cases without dropping the vibe.
      `,
      tech: [
        "React.js", "Express.js", "Node.js", "MongoDB", "MySQL",
        "Payment APIs", "REST APIs", "SaaS", "CI/CD"
      ],
  },
  {
    title: "Real-Time Apps",
    image: "/images/rts.png",
    description:
      `
      ⚡ Real-time isn't speed, it's trust. And I build like I mean it.
      🚚 Location tracking with socket + fallback polling, accurate and battery-friendly.
      💬 Chat apps with sticky state, retry queues, and graceful reconnects.
      ⛑️ Built for poor networks. Always. Because people use phones, not fiber.
      🧘 UI that reacts fast but never freaks out. Real-time should feel smooth, not sweaty.
      🧪 Debugged packet drops with browser tabs and sheer will.
      `,
      tech: [
        "Socket.io", "Firebase", "Node.js", "REST APIs",
        "Debugging", "Performance Optimization", "System Design"
      ],
  },
  {
    title: "Learning & Training Systems",
    image: "/images/lms.png",
    description:
      `
      🎓 Learning platforms are a mess. I made them less so.
      📚 Built progress trackers that knew when to chill (don’t panic over skipped quizzes).
      🚀 Admin tools that didn’t require a handbook, drag-drop, done.
      🕵️ Real-time session tracking without WebSocket meltdowns.
      📦 Modular content pipelines, one backend to teach them all.
      🤔 Asked myself: “Would a teacher actually use this?”, and designed from that answer.
      `,
      tech: [
        "Node.js", "Socket.io", "Firebase", "Figma APIs",
        "React.js"
      ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-white text-center">
        <span className="relative inline-block">
          My Experties
          <span className="absolute left-0 -bottom-1 h-1 w-full bg-red-500"></span>
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {expertise.map((item, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md">
            {item.image && (
              <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-contain mb-4 rounded-md"
            />
            )}
            <h4 className="text-xl font-bold mb-2 text-red-400">{item.title}</h4>
            {item.description
              .trim()
              .split('\n')
              .map((line, i) => {
                const emoji = line.trim().slice(0, 2);
                const text = line.trim().slice(2).trim();
                const isFirst = i === 0;
                return (
                  <div key={i} className="flex items-start gap-2 mb-2">
                    <span className="w-6 text-lg">{emoji}</span>
                    <p
                      className={`text-gray-300 leading-relaxed`}
                    >
                      {text}
                    </p>
                  </div>
                );
              })}
            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
              {item.tech.map((tech, i) => (
                <span key={i} className="bg-gray-700 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
