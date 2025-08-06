import {
  Zap,
  BookOpen,
  Rocket,
  Eye,
  Box,
  HelpCircle,
} from "lucide-react";

const iconMap = {
  "⚡": <Zap size={18} className="text-green-400" />,
  "📚": <BookOpen size={18} className="text-blue-400" />,
  "🚀": <Rocket size={18} className="text-purple-400" />,
  "🕵️": <Eye size={18} className="text-yellow-400" />,
  "📦": <Box size={18} className="text-cyan-400" />,
  "🤔": <HelpCircle size={18} className="text-red-400" />,
};

const expertise = [
  {
    title: "ERP Management Systems",
    filename: "erp-management.js",
    description: `
      🐴 Taming Complexity and operations, from sales to dispatch.
      🏗️ Built inventory logic that auto-rebalanced stock across warehouses, yes, it had opinions.
      📊 Designed BI dashboards that told stories, not just numbers (hello, exec summaries).
      🛠️ Production planning? Gantt-inspired timelines that respected both dev cycles and machine breakdowns.
      🧠 Assumed failure as the default, built like it.
      ✅ If you gave me your ops chaos today, I’d model it by Monday and stress test it by Friday.
    `,
  },
  {
    title: "E-Commerce Platforms",
    filename: "e-commerce.js",
    description: `
      🛒 It isn't “build a store.” It is: make commerce sing.
      🧱 Shipped 15+ full-stack storefronts. From fashion, accessories, to hardware and spare parts.
      💸 Integrated payments (Razorpay/Stripe) with grace, retries, refunds, and regrets included.
      📦 Backend: custom schemas per vertical. Frontend: fast enough to feel native.
      📈 Dashboards that helped sellers sell, not confuse them.
      🤹 Juggled orders, stock, delivery, roles, and edge cases without dropping the vibe.
    `,
  },
  {
    title: "Real-Time Apps",
    filename: "real-time.js",
    description: `
      ⚡ Real-time isn't speed, it's trust. And I build like I mean it.
      🚚 Location tracking with socket + fallback polling, accurate and battery-friendly.
      💬 Chat apps with sticky state, retry queues, and graceful reconnects.
      ⛑️ Built for poor networks. Always. Because people use phones, not fiber.
      🧘 UI that reacts fast but never freaks out. Real-time should feel smooth, not sweaty.
      🧪 Debugged packet drops with browser tabs and sheer will.
    `,
  },
  {
    title: "Learning & Training Systems",
    filename: "learning-platforms.js",
    description: `
      🎓 Learning platforms are a mess. I made them less so.
      📚 Built progress trackers that knew when to chill (don’t panic over skipped quizzes).
      🚀 Admin tools that didn’t require a handbook, drag-drop, done.
      🕵️ Real-time session tracking without WebSocket meltdowns.
      📦 Modular content pipelines, one backend to teach them all.
      🤔 Asked myself: “Would a teacher actually use this?”, and designed from that answer.
    `,
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-[#1e1e1e] font-mono text-[#d4d4d4] max-w-6xl py-6 px-5"
      style={{ fontVariantLigatures: "none" }}
    >
      <div className="text-sm text-green-400 mb-4">
        <span className="text-white">// </span>cat expertise.js
      </div>

      <div className="flex flex-col gap-6">
        {expertise.map((item, idx) => {
          const lines = item.description.trim().split("\n").filter(Boolean);

          return (
            <div
              key={idx}
              className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-md shadow-[0_0_0_1px_#000] overflow-hidden"
            >
              {/* VS Code filename tab */}
              <div className="flex items-center space-x-1 bg-[#2d2d2d] px-3 pt-2 pb-1 border-b border-[#3c3c3c] text-sm text-[#d4d4d4] rounded-t-md">
                <span className="text-sm">{item.filename}</span>
              </div>

              {/* Code body with line numbers + icons */}
              <div className="flex px-4 py-4 bg-[#1e1e1e] text-sm">
                {/* Line numbers (gutter) */}
                <div className="text-[#858585] pr-4 text-right select-none w-6">
                  {lines.map((_, i) => (
                    <div key={i} className="h-[28px] leading-[22px]">
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Code lines */}
                <div className="space-y-1.5 w-full">
                  {lines.map((line, i) => {
                    const emoji = line.trim().slice(0, 2);
                    const text = line.trim().slice(2).trim();

                    return (
                      <div key={i} className="flex items-start gap-2 leading-[22px]">
                        <div className="w-5">
                          {iconMap[emoji] ?? (
                            <span className="text-[#6A9955]">{emoji}</span>
                          )}
                        </div>
                        <p className="text-[#d4d4d4]">{text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
