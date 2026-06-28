const projects = [
    {
        emoji: "📊",
        title: "Movie Ticketing System",
        description:
            "A movie ticketing system, built with React and Hono.JS. Is a very efficient and user-friendly platform for booking movie tickets.",
        tags: ["React", "TypeScript", "Hono.JS"],
        demo: "https://fie-x2-0-ijmr.vercel.app/",
        github: "#",
    },
    {
        emoji: "🛒",
        title: "Floe 1.0",
        description:
            "An initial prototype of an online HTTP client",
        tags: ["Vue JS"],
        demo: "https://floeapp.vercel.app/",
        github: "#",
    },
    {
        emoji: "🛒",
        title: "Mansara Books",
        description:
            "An initial prototype of an online shopping site",
        tags: ["React Js"],
        demo: "https://mansarastore.vercel.app/",
        github: "#",
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects" class="section-padding bg-base-200/50">
            <div class="max-w-6xl mx-auto">
                <p class="mono text-primary text-sm mb-2 tracking-widest uppercase">My Work</p>
                <h2 class="text-3xl md:text-4xl font-bold mb-12">
                    Featured <span class="text-gradient">Projects</span>
                </h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div class="glass rounded-xl overflow-hidden card-hover group flex flex-col">
                            {/* Thumbnail */}
                            <div class="h-44 bg-base-200 flex items-center justify-center relative overflow-hidden">
                                <span class="text-6xl group-hover:scale-110 transition-transform duration-500 select-none z-10">
                                    {project.emoji}
                                </span>
                                <div class="absolute inset-0 bg-gradient-to-t from-base-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div class="p-5 flex flex-col flex-1">
                                <h3 class="text-lg font-semibold mb-2 text-base-content">{project.title}</h3>
                                <p class="text-sm text-base-content/55 mb-4 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div class="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span class="badge badge-outline badge-primary text-xs mono">{tag}</span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div class="flex gap-4">
                                    <a
                                        href={project.demo}
                                        class="flex items-center gap-1.5 text-sm text-base-content/50 hover:text-primary transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        class="flex items-center gap-1.5 text-sm text-base-content/50 hover:text-primary transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
