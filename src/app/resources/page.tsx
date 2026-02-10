import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, ShieldCheck, BarChart2, Wallet } from "lucide-react";

const tools = [
    {
        name: "TradingView",
        description: "The best charting platform for technical analysis. Used by 50M+ traders.",
        icon: BarChart2,
        href: "https://www.tradingview.com/?aff_id=EXAMPLE", // Placeholder affiliate link
        cta: "Get 30 Days Free",
        popular: true,
    },
    {
        name: "Ledger Nano X",
        description: "Secure your crypto assets with the industry-standard hardware wallet.",
        icon: ShieldCheck,
        href: "https://shop.ledger.com/?r=EXAMPLE",
        cta: "Buy Now",
        popular: false,
    },
    {
        name: "Coinbase",
        description: "The most trusted place to buy and sell cryptocurrency.",
        icon: Wallet,
        href: "https://coinbase.com/join/EXAMPLE",
        cta: "Get $10 in BTC",
        popular: false,
    },
];

export default function Resources() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
            <Navbar />

            <section className="pt-32 pb-12 px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Essential <span className="text-green-500">Trading Tools</span>
                    </h1>
                    <p className="mt-4 text-xl text-zinc-400">
                        The software and hardware we use daily to analyze markets and secure profits.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {tools.map((tool) => (
                            <a
                                key={tool.name}
                                href={tool.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-green-500/50 hover:bg-white/10 transition-all"
                            >
                                {tool.popular && (
                                    <div className="absolute -top-3 left-6 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-black transition-colors">
                                        <tool.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-6 text-xl font-semibold leading-8 text-white">
                                        {tool.name}
                                    </h3>
                                    <p className="mt-2 text-base leading-7 text-zinc-400">
                                        {tool.description}
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-green-500 group-hover:text-green-400">
                                    {tool.cta}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
