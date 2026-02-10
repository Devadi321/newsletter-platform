import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
            <Navbar />
            <Hero />
            <Features />
            <section className="py-24 bg-zinc-900/50 text-center border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white">Join 10,000+ Investors</h2>
                    <p className="mt-4 text-zinc-400">Sponsored by leading financial tools.</p>
                    {/* Placeholder for future ad banners or affiliate logos */}
                </div>
            </section>
            <Footer />
        </main>
    );
}
