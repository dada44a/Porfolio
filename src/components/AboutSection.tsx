import { createSignal, onMount, Show } from "solid-js";
import {
    Layout,
    Wind,
    Code,
    Braces,
    Globe,
    Server,
    Cpu,
    Database,
    Shield,
    GitBranch,
    Leaf,
    Atom,
    ShieldBan
} from "lucide-solid";

const skills = [
    { name: "HTML / CSS", Icon: Layout },
    { name: "Tailwind CSS", Icon: Wind },
    { name: "JavaScript", Icon: Code },
    { name: "TypeScript", Icon: Braces },
    { name: "React / Next.js", Icon: Globe },
    { name: "Node.js", Icon: Server },
    { name: "Laravel", Icon: Cpu },
    {name: "Rust", Icon: ShieldBan},
    { name: "Nuxt", Icon:  Atom},
    { name: "Spring Boot", Icon: Leaf }
];

const AboutSection = () => {
    return (
        <section id="about" class="section-padding bg-base-100">
            <div class="max-w-6xl mx-auto">
                <p class="mono text-primary text-sm mb-2 tracking-widest uppercase">About Me</p>
                <h2 class="text-3xl md:text-4xl font-bold mb-12">
                    Get to know <span class="text-gradient">me</span>
                </h2>

                <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Avatar */}
                    <div class="flex justify-center">
                        <div class="relative">
                            <div class="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden glow-primary border-2 border-primary/20 bg-base-200 flex items-center justify-center">
                                <span class="text-8xl select-none">👨‍💻</span>
                            </div>
                            <div class="absolute -inset-4 rounded-full border border-primary/10 anim-pulse-ring" />
                        </div>
                    </div>

                    {/* Bio */}
                    <div class="space-y-4">
                        <p class="text-base-content/60 leading-relaxed">
                            I'm a passionate full-stack developer. I love building
                            elegant, high-performance web applications and ensuring they're secure from the ground up.
                        </p>
                        <p class="text-base-content/60 leading-relaxed">
                            With experience across the entire stack — from crafting pixel-perfect UIs with React and
                            Tailwind to architecting robust backends with Node.js, Laravel, Spring Boot, etc — I bring ideas to life with
                            clean code and thoughtful design.
                        </p>
                    </div>
                </div>

                {/* Skills Grid */}
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {skills.map((skill) => (
                        <div class="glass rounded-xl p-4 text-center card-hover cursor-default group">
                            <span class="mb-2 block group-hover:scale-110 transition-transform duration-200 min-h-8">
                                <skill.Icon class="w-8 h-8 mx-auto text-primary" />
                            </span>
                            <span class="text-sm text-base-content/60 group-hover:text-base-content transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
