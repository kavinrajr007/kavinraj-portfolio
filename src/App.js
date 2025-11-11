import React, { useState, useEffect } from "react";

/**
 * Portfolio App - updated
 * - distinct button actions
 * - contact modal form (client-side only)
 * - toast notification when mailto is clicked
 * - project lightbox modal (iframe for PDFs)
 */

export default function App() {
  const [open, setOpen] = useState({
    projects: true,
    experience: true,
    skills: true,
    certificates: false,
  });

  const [toast, setToast] = useState(null); // { message }
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, src: "" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const toggle = (key) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  const showToast = (message, ms = 2500) => {
    setToast({ message });
    setTimeout(() => setToast(null), ms);
  };

  const mailToWithToast = (mailto) => {
    // Show toast then open mailto; opening mailto directly is more reliable on click
    showToast("Opening email client...");
    window.location.href = mailto;
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openPdfLightbox = (path) => {
    setLightbox({ open: true, src: path });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeLightbox = () => setLightbox({ open: false, src: "" });

  const submitContact = (ev) => {
    ev.preventDefault();
    // Client-side only: show a confirmation toast and close modal
    showToast("Message recorded — please check your email for follow-up (demo).");
    setContactModalOpen(false);
    // reset form
    setForm({ name: "", email: "", message: "" });
  };

  // Escape hatch: close modals with Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setContactModalOpen(false);
        closeLightbox();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
    <div className="min-h-screen font-sans text-slate-100 antialiased p-6" style={{ background: 'radial-gradient(1200px 600px at 10% 10%, #0f172a 0%, transparent 20%), radial-gradient(900px 500px at 90% 90%, rgba(99,102,241,0.12) 0%, transparent 20%), linear-gradient(180deg,#020617 0%,#071032 45%,#0b1020 100%)' }}>

      {/* Animated decorative SVG */}
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
        </svg>
      </div>

      {/* Header */}
      <header className="relative max-w-6xl mx-auto rounded-3xl p-6 bg-gradient-to-r from-[#0b1220]/70 via-[#111827]/60 to-[#06102a]/70 ring-1 ring-white/5 shadow-2xl backdrop-blur z-20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-white text-2xl font-extrabold shadow-xl">KR</div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Kavinraj R</h1>
              <p className="text-sm text-slate-300 mt-1">Cybersecurity Student • Executive Member, Whitehatians</p>
              <p className="mt-1 text-sm text-indigo-200 font-medium">Promotional Team Manager, CSI • SRM Valliammai Engineering College</p>
              <p className="mt-2 text-sm"><a href="mailto:mrtechieguys@gmail.com" className="text-indigo-100 underline">mrtechieguys@gmail.com</a></p>
            </div>
          </div>

          <div className="ml-auto flex gap-3">
            {/* Contact (opens modal contact form for richer experience) */}
            <button onClick={() => setContactModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg shadow-lg hover:scale-[1.02]">Contact</button>

            {/* Resume open in new tab */}
            <a href="https://kavinrajr007.github.io/kavinraj-portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-white rounded-lg hover:bg-white/5">Download Resume</a>
          </div>
        </div>

        {/* Top quick-nav: scroll + toggle */}
        <div className="mt-4 flex gap-2">
          <button onClick={() => { toggle("projects"); scrollToId("projects"); }} className="px-3 py-2 bg-[#7c3aed] text-white rounded">Projects</button>
          <button onClick={() => { toggle("experience"); scrollToId("experience"); }} className="px-3 py-2 bg-[#06b6d4] text-white rounded">Experience</button>
          <button onClick={() => { toggle("skills"); scrollToId("skills"); }} className="px-3 py-2 bg-indigo-800 text-white rounded">Skills</button>
          <button onClick={() => { toggle("certificates"); scrollToId("certificates"); }} className="px-3 py-2 bg-indigo-900 text-white rounded">Certificates</button>
        </div>
      </header>

      {/* Main */}
      <main className="relative max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 z-10">
        {/* Left/center column */}
        <section id="about" className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071133]/80 to-[#06122a]/60 ring-1 ring-white/5 shadow-xl">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">About</h2>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  I am a Cybersecurity student at SRM Valliammai Engineering College focused on ethical hacking, network defense, and digital privacy. I lead club initiatives, create technical awareness content, mentor juniors, and practice hands-on security with tools like Kali Linux, Wireshark, Nmap, and Burp Suite. I build IoT and network projects and continuously learn via TryHackMe and Cisco NetAcad.
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">Availability</div>
                <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 bg-emerald-600/20 text-emerald-200 rounded-full font-medium">Open for internships</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div id="experience" className="rounded-2xl p-6 bg-gradient-to-br from-[#051226]/80 to-[#031225]/60 ring-1 ring-white/3 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Experience</h2>
            </div>

            {open.experience && (
              <div className="mt-4 space-y-4 text-slate-300">
                <div>
                  <h3 className="font-semibold text-white">Executive Member — Whitehatians Club</h3>
                  <p className="text-sm text-slate-400">Jun 2024 – Present • SRM Valliammai Engineering College</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Co-led planning and execution of cybersecurity workshops, CTFs and awareness campaigns.</li>
                    <li>Mentored juniors in hands-on labs covering Nmap, Wireshark and pentesting basics.</li>
                    <li>Prepared concise security reports and presented findings in club sessions.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white">Promotional Team Manager — CSI Club</h3>
                  <p className="text-sm text-slate-400">2024 – Present • SRM Valliammai Engineering College</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Design and publish technical awareness posts and event promotions for club channels.</li>
                    <li>Coordinate content production and ensure technical accuracy for outreach.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Projects */}
          <div id="projects" className="rounded-2xl p-6 bg-gradient-to-br from-[#041025]/80 to-[#02101b]/60 ring-1 ring-white/3 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Projects</h2>
            </div>

            {open.projects && (
              <div className="mt-4 space-y-4 text-slate-300">
                <article>
                  <h3 className="font-semibold text-white">IoT Temperature & Monitoring System</h3>
                  <p className="text-sm text-slate-400">Jul 2024 – Aug 2024</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Built an ESP32-based system using a DHT11 sensor and relay module to monitor temperature and control fan speed automatically.</li>
                    <li>Sent sensor data to ThingSpeak and built a custom dashboard for live monitoring and threshold-based automation.</li>
                    <li>Explored IoT security challenges, including secure data transmission and access control.</li>
                  </ul>
                  <div className="mt-3">
                    <button onClick={() => openPdfLightbox("/iot-project.pdf")} className="px-3 py-2 rounded bg-indigo-700">Preview Project PDF</button>
                  </div>
                </article>

                <article>
                  <h3 className="font-semibold text-white">Network Vulnerability Assessment</h3>
                  <p className="text-sm text-slate-400">Aug 2024 – Oct 2024</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Conducted vulnerability scans on simulated networks using Nmap and analyzed traffic with Wireshark.</li>
                    <li>Identified open ports and misconfigurations, documented remediation steps, and presented findings to peers.</li>
                  </ul>
                  <div className="mt-3">
                    <button onClick={() => openPdfLightbox("/portfolio/network-scan-report.pdf")} className="px-3 py-2 rounded bg-indigo-700">Preview Report</button>
                  </div>
                </article>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-4 rounded-2xl p-6 bg-gradient-to-br from-[#06102a]/70 to-[#071233]/60 ring-1 ring-white/3 text-center shadow-inner">
            <h3 className="text-lg font-semibold text-white">Interested in collaborating?</h3>
            <p className="mt-2 text-slate-300">Open for internships, project collaborations and mentorship opportunities. Let's connect and build secure systems together.</p>
            <div className="mt-4 flex justify-center gap-3">
              <button onClick={() => scrollToId("contact")} className="px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg">Get in touch</button>
              <button onClick={() => mailToWithToast("mailto:mrtechieguys@gmail.com")} className="px-4 py-2 border border-white/10 text-white rounded-lg">Email me</button>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div id="skills" className="rounded-2xl p-6 bg-gradient-to-br from-[#071225]/80 to-[#02101a]/60 ring-1 ring-white/3 shadow-xl">
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

          <div id="certificates" className="rounded-2xl p-6 bg-gradient-to-br from-[#021022]/80 to-[#02101a]/60 ring-1 ring-white/3 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Certificates</h2>
            </div>
            {open.certificates && (
              <ul className="mt-4 text-slate-300 space-y-2">
                <li>TryHackMe — Pre-Security Path (In progress)</li>
                <li>Cisco Networking Academy — Introduction to Cybersecurity</li>
                <li>Fortinet NSE 1 &amp; 2 — Security Awareness</li>
              </ul>
            )}
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071225]/80 to-[#02101a]/60 ring-1 ring-white/3 shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-white">Work Samples</h2>
            <ul className="space-y-2 text-slate-300">
              <li><a className="text-indigo-300 hover:underline" href="/portfolio/mobile-llms-poster.pdf" target="_blank" rel="noopener noreferrer">Mobile LLMs & Edge Gallery — Poster (PDF)</a></li>
              <li><a className="text-indigo-300 hover:underline" href="/portfolio/network-scan-report.pdf" target="_blank" rel="noopener noreferrer">Network Vulnerability Assessment — Report (PDF)</a></li>
              <li><button onClick={() => openPdfLightbox("/iot-project.pdf")} className="text-indigo-300 hover:underline">IoT Temperature & Monitoring — Project (PDF)</button></li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071225]/80 to-[#02101a]/60 ring-1 ring-white/3 shadow-xl">
            <h2 className="text-xl font-semibold mb-3 text-white">Contact</h2>
            <p className="text-slate-300">Email: <a className="text-indigo-300 hover:underline" href="mailto:mrtechieguys@gmail.com" aria-label="Email Kavinraj">mrtechieguys@gmail.com</a></p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/in/kavinraj-r" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white rounded-lg">LinkedIn</a>
              <a href="https://github.com/kavinrajr007" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-slate-900 text-slate-200 rounded-lg">GitHub</a>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="relative max-w-6xl mx-auto text-center text-sm text-slate-400 py-8 z-10">Designed & built by Kavinraj R — © 2025</footer>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-2 rounded shadow-lg z-50">
          {toast.message}
        </div>
      )}

      {/* Contact modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg text-slate-900">
            <h3 className="text-xl font-semibold mb-2">Contact Me</h3>
            <form onSubmit={submitContact} className="space-y-3">
              <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Your name" className="w-full border rounded px-3 py-2" />
              <input required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Your email" type="email" className="w-full border rounded px-3 py-2" />
              <textarea required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Message" className="w-full border rounded px-3 py-2" rows={4} />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setContactModalOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox modal for project PDFs */}
      {lightbox.open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden relative">
            <button onClick={closeLightbox} className="absolute right-3 top-3 z-50 bg-slate-800 text-white px-3 py-1 rounded">Close</button>
            <iframe title="Project Preview" src={lightbox.src} className="w-full h-full" />
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee { 0% { transform: translateX(100%);} 100% { transform: translateX(-100%);} }
        .animate-marquee { display: inline-block; animation: marquee 20s linear infinite; }
      `}</style>
    </div>
  );
}
