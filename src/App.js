import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [open, setOpen] = useState({
    projects: true,
    experience: true,
    skills: true,
    certificates: false,
  });

  const skills = [
    { name: "Ethical Hacking", level: 85 },
    { name: "Wireshark", level: 80 },
    { name: "Nmap", level: 78 },
    { name: "Burp Suite", level: 70 },
    { name: "Kali Linux", level: 82 },
    { name: "Python", level: 72 },
    { name: "Networking", level: 75 },
    { name: "ESP32", level: 65 },
    { name: "MATLAB", level: 58 },
    { name: "AutoCAD", level: 50 },
  ];

  return (
    <div
      className="min-h-screen font-sans text-slate-100 antialiased p-6"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% 10%, #0f172a 0%, transparent 20%), radial-gradient(900px 500px at 90% 90%, rgba(99,102,241,0.12) 0%, transparent 20%), linear-gradient(180deg,#020617 0%,#071032 45%,#0b1020 100%)",
      }}
    >
      {/* animated gradient lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <rect x="-20%" y="10%" width="140%" height="2%" fill="url(#g1)">
            <animate attributeName="x" from="-40%" to="100%" dur="18s" repeatCount="indefinite" />
          </rect>
          <rect x="100%" y="40%" width="140%" height="2%" fill="url(#g1)">
            <animate attributeName="x" from="100%" to="-40%" dur="22s" repeatCount="indefinite" />
          </rect>
          <rect x="-40%" y="70%" width="140%" height="2%" fill="url(#g1)">
            <animate attributeName="x" from="-40%" to="100%" dur="26s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>

      <header className="relative max-w-6xl mx-auto rounded-3xl p-6 bg-gradient-to-r from-[#0b1220]/70 via-[#111827]/60 to-[#06102a]/70 ring-1 ring-white/5 shadow-2xl backdrop-blur z-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-white text-2xl font-extrabold shadow-xl">
              KR
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Kavinraj R</h1>
              <p className="text-sm text-slate-300 mt-1">Cybersecurity Student â€¢ Executive Member, Whitehatians</p>
              <p className="mt-1 text-sm text-indigo-200 font-medium">Promotional Team Manager, CSI â€¢ SRM Valliammai Engineering College</p>
              <p className="mt-2 text-sm">
                <a href="mailto:mrtechieguys@gmail.com" className="text-indigo-100 underline">mrtechieguys@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="ml-auto flex gap-3">
            <a href="mailto:mrtechieguys@gmail.com?subject=Inquiry%20from%20Portfolio" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg shadow-lg hover:scale-[1.02]">Contact</a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-white rounded-lg hover:bg-white/5">Download Resume</a>
          </div>
        </div>
      </header>

      <main className="relative max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 z-10">
        {/* Main content */}
        <section className="lg:col-span-2 space-y-6">
          {/* About */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071133]/80 to-[#06122a]/60 ring-1 ring-white/5 shadow-xl backdrop-blur">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">About</h2>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  I am a Cybersecurity student at SRM Valliammai Engineering College focused on ethical hacking, network defense, and digital privacy.
                  I lead club initiatives, create technical awareness content, mentor juniors, and practice hands-on security with tools like Kali Linux, Wireshark, Nmap, and Burp Suite.
                  I build IoT and network projects and continuously learn via TryHackMe and Cisco NetAcad.
                </p>
              </div>

              <div className="text-right">
                <div className="text-sm text-slate-400">Availability</div>
                <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 bg-emerald-600/20 text-emerald-200 rounded-full font-medium">Open for internships</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#0b1530]/60 to-[#071233]/40 ring-1 ring-white/3">
                <h4 className="text-sm font-semibold text-indigo-200">Role</h4>
                <p className="text-sm text-slate-300">Student Â· Club Executive</p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#1b1436]/60 to-[#0b1a2b]/40 ring-1 ring-white/3">
                <h4 className="text-sm font-semibold text-amber-200">Interests</h4>
                <p className="text-sm text-slate-300">Ethical Hacking, IoT Security, Network Research</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#051226]/80 to-[#031225]/60 ring-1 ring-white/3 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Experience</h2>
            </div>
            <div className="mt-4 space-y-4 text-slate-300">
              <div>
                <h3 className="font-semibold text-white">Executive Member â€” Whitehatians Club</h3>
                <p className="text-sm text-slate-400">Jun 2024 â€“ Present â€¢ SRM Valliammai Engineering College</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Co-led planning and execution of cybersecurity workshops, CTFs and awareness campaigns.</li>
                  <li>Mentored juniors in hands-on labs covering Nmap, Wireshark and pentesting basics.</li>
                  <li>Prepared concise security reports and presented findings in club sessions.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white">Promotional Team Manager â€” CSI Club</h3>
                <p className="text-sm text-slate-400">2024 â€“ Present â€¢ SRM Valliammai Engineering College</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Design and publish technical awareness posts and event promotions for club channels.</li>
                  <li>Coordinate content production and ensure technical accuracy for outreach.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#041025]/80 to-[#02101b]/60 ring-1 ring-white/3 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Projects</h2>
            </div>

            <div className="mt-4 space-y-4 text-slate-300">
              <article>
                <h3 className="font-semibold text-white">IoT Temperature & Monitoring System</h3>
                <p className="text-sm text-slate-400">Jul 2024 â€“ Aug 2024</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Built an ESP32-based system using a DHT11 sensor and relay module to monitor temperature and control fan speed automatically.</li>
                  <li>Sent sensor data to ThingSpeak and built a custom dashboard for live monitoring and threshold-based automation.</li>
                  <li>Explored IoT security challenges, including secure data transmission and access control.</li>
                </ul>
              </article>

              <article>
                <h3 className="font-semibold text-white">Network Vulnerability Assessment</h3>
                <p className="text-sm text-slate-400">Aug 2024 â€“ Oct 2024</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Conducted vulnerability scans on simulated networks using Nmap and analyzed traffic with Wireshark.</li>
                  <li>Identified open ports and misconfigurations, documented remediation steps, and presented findings to peers.</li>
                </ul>
              </article>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 rounded-2xl p-6 bg-gradient-to-br from-[#06102a]/70 to-[#071233]/60 ring-1 ring-white/3 text-center shadow-inner">
            <h3 className="text-lg font-semibold text-white">Interested in collaborating?</h3>
            <p className="mt-2 text-slate-300">I'm open to internships, project collaborations, and mentorship opportunities. Let's connect and build secure systems together.</p>
            <div className="mt-4 flex justify-center gap-3">
              <a href="mailto:mrtechieguys@gmail.com?subject=Inquiry%20from%20Portfolio" className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg">Get in touch</a>
              <a href="mailto:mrtechieguys@gmail.com" className="px-4 py-2 border border-white/10 text-white rounded-lg">Email me</a>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071225]/80 to-[#02101a]/60 ring-1 ring-white/3 shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-white">Skills</h2>
            <div className="space-y-3">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm text-slate-300 mb-1">
                    <div>{s.name}</div>
                    <div>{s.level}%</div>
                  </div>
                  <div className="w-full bg-slate-900/30 h-2 rounded-full overflow-hidden">
                    <div className="h-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#021022]/80 to-[#02101a]/60 ring-1 ring-white/3 shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-white">Certificates</h2>
            <ul className="mt-4 text-slate-300 space-y-2">
              <li>TryHackMe â€” Pre-Security Path (In progress)</li>
              <li>Cisco Networking Academy â€” Introduction to Cybersecurity</li>
              <li>Fortinet NSE 1 &amp; 2 â€” Security Awareness</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071225]/80 to-[#02101a]/60 ring-1 ring-white/3 shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-white">Work Samples</h2>
            <ul className="space-y-2 text-slate-300">
              <li><a className="text-indigo-300 hover:underline" href="/portfolio/mobile-llms-poster.pdf" target="_blank" rel="noreferrer">Mobile LLMs & Edge Gallery â€” Poster (PDF)</a></li>
              <li><a className="text-indigo-300 hover:underline" href="/portfolio/network-scan-report.pdf" target="_blank" rel="noreferrer">Network Vulnerability Assessment â€” Report (PDF)</a></li>
                          <li><a className="text-indigo-300 hover:underline" href="/iot-project.pdf" target="_blank" rel="noreferrer">IoT Temperature & Monitoring — Project (PDF)</a></li></ul>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071225]/80 to-[#02101a]/60 ring-1 ring-white/3 shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-white">Contact</h2>
            <p className="text-slate-300">Email: <a className="text-indigo-300 hover:underline" href="mailto:mrtechieguys@gmail.com">mrtechieguys@gmail.com</a></p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/in/kavinraj-r" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg">LinkedIn</a>
              <a href="https://github.com/kavinrajr007" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-slate-900 text-slate-200 rounded-lg">GitHub</a>
            </div>
          </div>
        </aside>
      </main>

      <footer className="relative max-w-6xl mx-auto text-center text-sm text-slate-400 py-8 z-10">Designed & built by Kavinraj R â€” Â© 2025</footer>
    </div>
  );
}


