const PortfolioFooter = () => {
    return (
        <footer class="border-t border-base-300 py-8 px-4 bg-base-100">
            <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-base-content/45">
                <p class="mono">
                    © {new Date().getFullYear()}{" "}
                    <span class="text-primary">Anish Ghimire</span>. All rights reserved.
                </p>
                <p>
                    Designed &amp; built with <span class="text-primary">♥</span>
                </p>
            </div>
        </footer>
    );
};

export default PortfolioFooter;
