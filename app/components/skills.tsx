import { Database, Layout, Terminal, Cpu, PenTool, Users } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <div className="text-left mb-8">
        <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase font-sans mb-3 block">
          Expertise
        </span>
        <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight font-serif italic text-zinc-900">
          My Skills
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Backend & Databases",
            icon: <Database size={18} className="text-blue-500" />,
            skills: [
              "Node.js",
              "Express.js",
              "Java",
              "Spring Boot",
              "PHP",
              "Laravel",
              "JWT (Auth)",
              "MySQL",
              "MongoDB",
              "JPA / ORM",
              "SQLBase",
            ],
          },
          {
            title: "Frontend",
            icon: <Layout size={18} className="text-blue-500" />,
            skills: [
              "JavaScript",
              "TypeScript",
              "HTML5 & CSS3",
              "Tailwind CSS",
              "React Native",
              "Angular",
              "Bootstrap",
              "WordPress",
            ],
          },
          {
            title: "DevOps & Platforms",
            icon: <Terminal size={18} className="text-blue-500" />,
            skills: [
              "AWS",
              "Vercel",
              "Render",
              "Docker",
              "Firebase",
              "Virtual Machines",
              "WAMP",
            ],
          },
          {
            title: "Software Engineering",
            icon: <Cpu size={18} className="text-blue-500" />,
            skills: [
              "POO (OOP)",
              "MVC Architecture",
              "Class Diagrams",
              "Use Case Diagrams",
              "JUnit Testing",
            ],
          },
          {
            title: "Agile & Productivity",
            icon: <PenTool size={18} className="text-blue-500" />,
            skills: [
              "Agile Methodologies",
              "User Stories",
              "Git / GitHub",
              "Project Planning",
              "Figma",
              "VS Code / IntelliJ",
            ],
          },
          {
            title: "Soft Skills & Languages",
            icon: <Users size={18} className="text-blue-500" />,
            skills: [
              "Teamwork",
              "Effective Communication",
              "Decision-Making",
              "Spanish",
              "Portuguese (Native)",
              "English B2",
            ],
          },
        ].map((cat, idx) => (
          <div
            key={idx}
            className="p-8 bg-white border border-zinc-100 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-zinc-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-zinc-50 border border-zinc-100 rounded-xl shadow-sm flex items-center justify-center">
                {cat.icon}
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-900 font-sans">
                {cat.title}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <label
                  key={sIdx}
                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50/60 border border-zinc-200/60 rounded-full cursor-pointer hover:bg-blue-50/50 hover:border-blue-200 transition-all group"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-3.5 h-3.5 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 accent-blue-600 transition-colors"
                  />
                  <span className="text-xs font-medium text-zinc-700 group-hover:text-blue-700 font-sans">
                    {skill}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
