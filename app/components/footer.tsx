"use client";
import { Linkedin, Github, Hand, ThumbsUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 text-zinc-100 py-20 px-6">
      <section id="contact" className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start w-full">
            <div className="flex flex-col items-start text-left pr-4">
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase font-sans mb-3 block">
                Say Hello
              </span>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight font-serif italic text-white mb-6 flex items-center gap-3">
                Hi! <Hand size={28} className="text-blue-500 -rotate-12" />
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                To explore my projects and review my code in detail, feel free
                to check out my GitHub. You can also visit my LinkedIn profile
                for more information on my professional background. I&apos;m
                open to new opportunities—if you&apos;re interested in my
                profile, have any questions, or just want to say hello, please
                don&apos;t hesitate to contact me!
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-zinc-900 pt-8 lg:border-t-0 lg:border-l lg:border-zinc-900 lg:pt-0 lg:pl-12">
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase font-sans mb-3 block">
                Connect
              </span>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight font-serif italic text-white mb-6 flex items-center gap-3">
                Follow me <ThumbsUp size={24} className="text-blue-500" />
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/thabata-denise-monteiro-ba972a397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Linkedin
                      size={18}
                      className="text-zinc-300 group-hover:text-white"
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-blue-400 transition-colors tracking-wide font-sans">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/Thabatadm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Github
                      size={18}
                      className="text-zinc-300 group-hover:text-white"
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-blue-400 transition-colors tracking-wide font-sans">
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-zinc-900 pt-8 lg:border-t-0 lg:border-l lg:border-zinc-900 lg:pt-0 lg:pl-12 w-full">
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue-500 uppercase font-sans mb-3 block">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold tracking-tight text-zinc-200 mb-4 font-sans">
                Send a quick message
              </h3>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex flex-col gap-3 w-full"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="4ddb6616-ea50-4537-b713-a368cfdd488e"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact from Portfolio"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Thabata Portfolio"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full bg-zinc-900 text-sm text-zinc-200 rounded-xl p-3 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-zinc-800 focus:border-blue-500 transition-all font-sans"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows={3}
                  className="w-full bg-zinc-900 text-sm text-zinc-200 rounded-xl p-3 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-zinc-800 focus:border-blue-500 transition-all resize-none font-sans"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-zinc-100 text-zinc-950 hover:bg-blue-600 hover:text-white font-bold text-sm py-3 rounded-xl transition-all duration-300 shadow-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="w-full pt-8 border-t border-zinc-900/60">
            <p className="text-[10px] text-zinc-600 font-bold tracking-[0.25em] uppercase text-center font-sans">
              © {new Date().getFullYear()} — THABATA DENISE MONTEIRO DA SILVA
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
