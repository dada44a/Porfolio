import { createSignal, onMount, onCleanup } from "solid-js";

const ScrollProgress = () => {
    const [progress, setProgress] = createSignal(0);

    const handleScroll = () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        onCleanup(() => window.removeEventListener("scroll", handleScroll));
    });

    return (
        <div class="fixed top-0 left-0 w-full h-[3px] z-[100]">
            <div
                class="h-full scroll-progress transition-[width] duration-100"
                style={{ width: `${progress()}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
