const HeroSection = () => {
    return (
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-100">
            {/* Gradient mesh background */}
            <div class="absolute inset-0 gradient-mesh pointer-events-none" />

            {/* Soft glow blobs */}
            <div
                class="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none anim-pulse-ring"
                style="background: oklch(60% 0.118 184.704 / 0.07);"
            />
            <div
                class="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none anim-pulse-ring"
                style="background: oklch(51% 0.262 276.966 / 0.06); animation-delay: 1.5s;"
            />

            {/* Grid overlay */}
            <div
                class="absolute inset-0 pointer-events-none"
                style={{
                    opacity: "0.025",
                    "background-image":
                        "linear-gradient(oklch(60% 0.118 184.704) 1px, transparent 1px), linear-gradient(90deg, oklch(60% 0.118 184.704) 1px, transparent 1px)",
                    "background-size": "60px 60px",
                }}
            />

            {/* Content */}
            <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <p class="mono text-primary text-sm mb-6 tracking-widest uppercase anim-fade-up">
                    Hello, I'm
                </p>

                <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight anim-fade-up anim-delay-1">
                    <span class="text-base-content mr-3">Anish</span>
                    <span class="text-gradient">Ghimire</span>
                </h1>

                <p class="text-lg md:text-xl text-base-content/60 mb-4 font-medium anim-fade-up anim-delay-2">
                    Full Stack Developer · Problem Solver · Creator
                </p>

                <p class="text-base-content/50 max-w-xl mx-auto mb-10 leading-relaxed anim-fade-up anim-delay-3">
                    I craft secure, scalable, and beautiful web experiences. Passionate about building
                    products that make a difference — from frontend finesse to backend fortification.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center anim-fade-up anim-delay-4">
                    <a href="#projects" class="btn btn-primary glow-primary px-8">
                        View Projects
                    </a>
                    <a href="#contact" class="btn btn-outline btn-primary px-8">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Scroll arrow */}
            <div class="absolute bottom-8 left-1/2 anim-bob">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-base-content/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
