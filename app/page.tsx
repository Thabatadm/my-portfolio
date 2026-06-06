import Header from "@/components/header";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Image from "next/image";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="min-h-screen text-black selection:bg-blue-900/30 selection:text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            <span className="text-[10px] font-bold tracking-[0.3em] text-blue-600 uppercase font-sans mb-3">
              Full-Stack Developer / Web Developer
            </span>

            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 leading-tight font-serif italic text-zinc-900">
              Hello, I&apos;m Thabata.
            </h1>

            <div className="space-y-4 text-base md:text-lg text-zinc-700 max-w-xl mb-8 leading-relaxed font-sans">
              <p>
                I am a <strong>Full-Stack Developer</strong> specializing in
                building robust and scalable web applications, with expertise in
                both front-end and back-end development.
              </p>

              <p>
                My academic background has provided me with a solid foundation
                in software development, including the design of relational and
                non-relational databases, the implementation of authentication
                and authorization systems, the execution of unit tests, and the
                deployment of applications in cloud environments.
              </p>

              <p>
                In addition, I have knowledge of software analysis and design,
                using class diagrams, use cases, and user stories to structure
                efficient and well-organized solutions. I apply best development
                practices and agile methodologies to ensure a clean and
                maintainable architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="/CV_Thabata_Monteiro.pdf"
                download
                  className="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-sm"
              >
                <span>Descargar CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1fnzgkfA1d0c3sNbMm9PB1mNvwc7_3nty/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-sm"
              >
                <span>View CV</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div className="relative w-[300px] h-[400px] md:w-[340px] md:h-[453px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/My_Image_2026-01-21.jpeg"
                alt="Thabata Monteiro"
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 340px"
                priority
              />
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 border-t border-zinc-900/40">
        <Skills />
        <Services />
        <Projects />
      </div>

      <Footer />
    </main>
  );
}
