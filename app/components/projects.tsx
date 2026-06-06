import {
  ExternalLink,
  Github,
  Key,
  Server,
  Layout,
  ShieldCheck,
  Calendar,
  Move,
  Settings,
} from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-8 bg-zinc-50/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-left mb-8">
          <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase font-sans mb-3 block">
            Featured Work
          </span>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight font-serif italic text-zinc-900">
            My Projects
          </h3>
        </div>

        <div className="space-y-16">
          <div className="bg-white rounded-2xl border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4 font-sans">
                  Kanban Task Manager - Client App
                </h4>

                <div className="space-y-4 text-zinc-700 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  <p>
                    This project is a full-stack Task Manager (Kanban)
                    application built with React, TypeScript, and Tailwind CSS,
                    and deployed on Vercel.
                  </p>
                  <p>
                    It features a modern, responsive interface fully integrated
                    with a REST API backend, allowing users to manage projects
                    and tasks efficiently in real time.
                  </p>
                  <p>
                    The frontend was designed with a modular and scalable
                    architecture, using reusable components, custom hooks, and
                    centralized state management with Context API. It also
                    includes secure authentication handling via JWT, role-based
                    access control (RBAC), and optimized API communication
                    through a centralized Axios service.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3 items-start">
                    <div className="bg-blue-50 p-2 rounded-xl text-blue-600 shrink-0">
                      <Move size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-zinc-800 text-sm">
                        Interactive Workspace
                      </h5>
                      <p className="text-xs text-zinc-500">
                        Fluid card lifecycle movements with immediate
                        client-side validation updates.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-blue-50 p-2 rounded-xl text-blue-600 shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-zinc-800 text-sm">
                        Global Deadlines Calendar
                      </h5>
                      <p className="text-xs text-zinc-500">
                        Aggregates tasks directly onto a scheduling grid view
                        with direct card access links.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-3">
                    Frontend Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React 18",
                      "TypeScript",
                      "Tailwind CSS",
                      "React Router DOM",
                      "Axios Interceptors",
                      "Context API",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-50 text-zinc-700 text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-100">
                <a
                  href="https://kanban-task-manager-frontend.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-sm"
                >
                  <Layout size={16} /> Launch Live App on Vercel{" "}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="bg-zinc-950 text-zinc-100 p-8 md:p-12 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-900">
              <div>
                <div className="flex items-center gap-2 mb-6 text-blue-400">
                  <Key size={20} />
                  <h4 className="text-lg font-bold tracking-tight">
                    Test environment
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                  Log in using this profile to inspect the Role-Based Access
                  Control matrix directly without registering:
                </p>
                <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 mb-4 font-mono text-xs">
                  <div className="mb-2 text-zinc-300">
                    <span className="text-blue-400 font-bold">Email:</span>{" "}
                    anamaria@example.co
                  </div>
                  <div className="text-zinc-300">
                    <span className="text-blue-400 font-bold">Password:</span>{" "}
                    pass1234
                  </div>
                </div>
                <div className="text-xs text-zinc-400 space-y-3 mt-4 border-t border-zinc-900 pt-4">
                  <p>
                    🔹 <strong className="text-blue-400">NEON HYDRA:</strong>{" "}
                    Developer Role (Read-only access to projects. Allows users
                    to create and edit tasks, but restricts their deletion).
                  </p>
                  <p>
                    🔹{" "}
                    <strong className="text-zinc-300">AetherScan Alpha:</strong>{" "}
                    Master role (Full admin write privileges).
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-zinc-900">
                <a
                  href="https://github.com/Thabatadm/kanban-task-manager-frontend"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-bold py-2.5 px-4 rounded-xl border border-zinc-800 transition-colors duration-200 w-full"
                >
                  <Github size={14} /> View Frontend Source & README
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-zinc-950 mb-4 font-sans">
                  Kanban Task Manager - Backend API
                </h4>

                <div className="space-y-4 text-zinc-700 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  <p>
                    This project is a RESTful Task Manager API built with Spring
                    Boot and PostgreSQL, designed and deployed in a production
                    environment using Render.
                  </p>
                  <p>
                    It provides secure authentication with JWT and follows a
                    layered architecture (Controller, Service, Repository, and
                    DTOs) to ensure clean separation of concerns, scalability,
                    and maintainability.
                  </p>
                  <p>
                    The API is fully integrated with a cloud database and
                    includes production-ready configuration, environment
                    variable management, and security filters.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex gap-3 items-start">
                    <div className="bg-blue-50 p-2 rounded-xl text-blue-600 shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-zinc-800 text-sm">
                        Security
                      </h5>
                      <p className="text-xs text-zinc-500">
                        Method-level access controls to block unprivileged role
                        actions with a 403 response.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-blue-50 p-2 rounded-xl text-blue-600 shrink-0">
                      <Settings size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-zinc-800 text-sm">
                        Configuration
                      </h5>
                      <p className="text-xs text-zinc-500">
                        Production-ready environments, CORS handling, and
                        centralized exception structures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-3">
                    Backend Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Java 21",
                      "Spring Boot 3.3.4",
                      "Spring Security",
                      "JSON Web Tokens",
                      "PostgreSQL (Supabase)",
                      "Docker",
                      "Maven",
                      "Swagger / OpenAPI",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-50 text-zinc-700 text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-100">
                <a
                  href="https://backend-de-la-api-del-gestor-de-tareas.onrender.com/swagger-ui/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-sm"
                >
                  <Server size={16} /> Explore Swagger UI Docs{" "}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="bg-zinc-950 text-zinc-100 p-8 md:p-12 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-900">
              <div>
                <div className="flex items-center gap-2 mb-6 text-blue-400">
                  <Server size={20} />
                  <h4 className="text-lg font-bold tracking-tight">
                    Cloud Infrastructure
                  </h4>
                </div>
                <div className="bg-blue-950/40 rounded-xl p-4 border border-blue-900/50 mb-6">
                  <p className="text-xs text-blue-300 leading-normal">
                    ⚠️ <strong>Render Free Tier Cold Start:</strong> The server
                    instances sleep during inactivity. The very first endpoint
                    handshake or web app login request can trigger a 30-50
                    second delay while waking up.
                  </p>
                </div>
                <div className="border-t border-zinc-900 pt-4 text-xs text-zinc-400 space-y-2">
                  <h5 className="text-xs font-bold text-zinc-300">
                    Architecture Overview:
                  </h5>
                  <p>- Model-View-Controller (MVC) layers</p>
                  <p>- Bearer token endpoint interception</p>
                  <p>- Docker automated deployment manifests</p>
                </div>
              </div>
              <div className="pt-6 border-t border-zinc-900">
                <a
                  href="https://github.com/Thabatadm/Backend-de-la-API-del-gestor-de-tareas-Kanban"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-bold py-2.5 px-4 rounded-xl border border-zinc-800 transition-colors duration-200 w-full"
                >
                  <Github size={14} /> View Backend Source & README
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-24 text-center">
          <div className="bg-zinc-50/50 rounded-2xl p-8 md:p-12 border border-zinc-100">
            <h4 className="text-xl font-bold text-zinc-950 mb-4 font-sans">
              Academic Work
            </h4>

            <div className="text-zinc-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8 text-justify md:text-center space-y-4 font-sans">
              <p>
                Beyond this featured application, my academic journey includes
                multiple hands-on projects developed both individually and
                collaboratively at the{" "}
                <strong className="font-semibold text-zinc-950">
                  Universitat Oberta de Catalunya (UOC)
                </strong>
                . These projects range from systems programming in{" "}
                <strong className="font-semibold text-zinc-950">C</strong> and
                practical{" "}
                <strong className="font-semibold text-zinc-950">
                  Python automation tools for network analysis, DNS latency
                  monitoring, automated system configuration, and dynamic report
                  generation
                </strong>
                , to responsive web interfaces built with{" "}
                <strong className="font-semibold text-zinc-950">
                  HTML5, CSS3, and Bootstrap
                </strong>
                .
              </p>

              <p>
                My experience also includes developing applications following{" "}
                <strong className="font-semibold text-zinc-950">
                  Object-Oriented Programming (OOP) principles and MVC
                  architecture
                </strong>{" "}
                using technologies such as{" "}
                <strong className="font-semibold text-zinc-950">
                  Java, JavaScript, TypeScript, React, WordPress, PHP, and
                  Laravel
                </strong>
                . Throughout these projects, I worked with both{" "}
                <strong className="font-semibold text-zinc-950">
                  relational and non-relational databases
                </strong>
                , implemented authentication systems, applied automated testing
                practices, and collaborated using Git workflows that closely
                mirror professional software development environments.
              </p>
            </div>

            <p>
              These implementations are backed by extensive data management
              layer training, utilizing both{" "}
              <strong className="font-semibold text-zinc-950">
                Relational and Non-Relational databases
              </strong>{" "}
              managed via enterprise{" "}
              <strong className="font-semibold text-zinc-950">
                ORMs and data wrappers like JPA / Hibernate
              </strong>
              . Furthermore, these codebases integrate secure{" "}
              <strong className="font-semibold text-zinc-950">
                Token Authentication modules
              </strong>{" "}
              and maintain stability through thorough{" "}
              <strong className="font-semibold text-zinc-950">
                Unit Testing
              </strong>{" "}
              coverage. In these academic workflows, we operated just like real
              agile dev teams: orchestrating GitHub Organizations, structuring
              git branching workflows, and managing multiple independent
              production repositories.
            </p>
          </div>

          <a
            href="https://github.com/Thabatadm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-950 text-zinc-800 hover:text-white font-bold text-sm px-6 py-3 rounded-xl border border-zinc-200 hover:border-zinc-950 shadow-sm transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.01.069-.01 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Explore Full GitHub Profile
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
