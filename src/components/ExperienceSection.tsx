const timeline = [
    {
        type: "work" as const,
        title: "Full Stack Developer",
        org: "Tech Solutions Inc.",
        period: "2023 — Present",
        description:
            "Building scalable web applications with React, Node.js, and cloud infrastructure. Leading frontend architecture decisions.",
    },
    {
        type: "work" as const,
        title: "Junior Web Developer",
        org: "Digital Agency",
        period: "2021 — 2023",
        description:
            "Developed responsive websites and e-commerce platforms using PHP, MySQL, and modern JavaScript frameworks.",
    },
    {
        type: "education" as const,
        title: "B.Sc. Computer Science",
        org: "University of Technology",
        period: "2017 — 2021",
        description:
            "Focused on software engineering, cybersecurity fundamentals, and database systems. Graduated with honors.",
    },
    {
        type: "education" as const,
        title: "Cybersecurity Certification",
        org: "CompTIA Security+",
        period: "2022",
        description:
            "Completed professional certification covering threat management, cryptography, and network security practices.",
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" class="section-padding bg-base-100">
            <div class="max-w-3xl mx-auto">
                <p class="mono text-primary text-sm mb-2 tracking-widest uppercase">My Journey</p>
                <h2 class="text-3xl md:text-4xl font-bold mb-12">
                    Experience &amp; <span class="text-gradient">Education</span>
                </h2>

                <div class="relative">
                    {/* Vertical line */}
                    <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-base-300 md:-translate-x-px" />

                    {timeline.map((item, i) => (
                        <div
                            class={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Dot */}
                            <div class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-primary -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10" />

                            {/* Spacer for alternating layout */}
                            <div class="hidden md:block md:w-1/2" />

                            {/* Card */}
                            <div class="ml-10 md:ml-0 md:w-1/2 glass rounded-xl p-5 card-hover">
                                <div class="flex items-center gap-2 mb-2">
                                    {item.type === "work" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    )}
                                    <span class="mono text-xs text-base-content/50">{item.period}</span>
                                </div>
                                <h3 class="font-semibold text-base-content mb-0.5">{item.title}</h3>
                                <p class="text-sm text-primary mb-2">{item.org}</p>
                                <p class="text-sm text-base-content/55 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
