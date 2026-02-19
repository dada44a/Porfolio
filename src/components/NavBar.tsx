import { createSignal, onMount, onCleanup } from "solid-js";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const NavBar = () => {
    const [scrolled, setScrolled] = createSignal(false);
    const [mobileOpen, setMobileOpen] = createSignal(false);

    const onScroll = () => setScrolled(window.scrollY > 50);

    onMount(() => {
        window.addEventListener("scroll", onScroll);
        onCleanup(() => window.removeEventListener("scroll", onScroll));
    });

    return (
        <nav
            class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled() ? "glass-strong" : "bg-transparent"
                }`}
        >
            <div class="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#" class="text-xl font-bold text-gradient mono">
                    {"<Dev />"}
                </a>

                {/* Desktop links */}
                <div class="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            href={link.href}
                            class="text-sm text-base-content/60 hover:text-primary transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" class="btn btn-primary btn-sm">
                        Hire Me
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    class="md:hidden btn btn-ghost btn-square btn-sm"
                    onClick={() => setMobileOpen(!mobileOpen())}
                    aria-label="Toggle menu"
                >
                    {mobileOpen() ? (
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen() && (
                <div class="md:hidden glass-strong border-t border-base-300 anim-fade-in">
                    <div class="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                class="text-base-content/60 hover:text-primary transition-colors py-1"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#contact" class="btn btn-primary btn-sm" onClick={() => setMobileOpen(false)}>
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
