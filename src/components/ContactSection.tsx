import { createSignal } from "solid-js";

const socials = [
    {
        label: "GitHub",
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.983 1.983 0 01-1.987-1.987A1.983 1.983 0 015.337 3.46a1.983 1.983 0 011.987 1.986 1.983 1.983 0 01-1.987 1.987zm1.807 13.019H3.53V9h3.614v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "Email",
        href: "mailto:hello@example.com",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

const ContactSection = () => {
    const [submitted, setSubmitted] = createSignal(false);

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" class="section-padding bg-base-200/50">
            <div class="max-w-2xl mx-auto">
                <p class="mono text-primary text-sm mb-2 tracking-widest uppercase">Get In Touch</p>
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Let's <span class="text-gradient">connect</span>
                </h2>
                <p class="text-base-content/55 mb-10">
                    Have a project in mind or just want to chat? Feel free to reach out.
                </p>

                <form onSubmit={handleSubmit} class="glass rounded-xl p-6 md:p-8 space-y-5">
                    <div>
                        <label for="name" class="label text-sm text-base-content/60 pb-1.5">Name</label>
                        <input
                            id="name"
                            type="text"
                            required
                            class="input input-bordered w-full bg-base-100 focus:input-primary"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label for="email" class="label text-sm text-base-content/60 pb-1.5">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            class="input input-bordered w-full bg-base-100 focus:input-primary"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label for="message" class="label text-sm text-base-content/60 pb-1.5">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            class="textarea textarea-bordered w-full bg-base-100 focus:textarea-primary resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <button type="submit" class="btn btn-primary w-full glow-primary">
                        {submitted() ? (
                            "Message Sent! ✓"
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Send Message
                            </>
                        )}
                    </button>
                </form>

                {/* Social links */}
                <div class="flex justify-center gap-4 mt-10">
                    {socials.map((s) => (
                        <a
                            href={s.href}
                            aria-label={s.label}
                            class="w-10 h-10 rounded-lg glass flex items-center justify-center text-base-content/50 hover:text-primary hover:border-primary/30 border border-base-300 transition-all card-hover"
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
