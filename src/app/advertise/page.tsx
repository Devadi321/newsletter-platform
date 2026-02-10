import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle2, TrendingUp, Users, MousePointerClick } from "lucide-react";

export default function Advertise() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black" />

                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                        Reach Active <br />
                        <span className="text-green-500">Investors</span>
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400">
                        Partner with MarketAlpha to put your brand in front of high-net-worth individuals and active traders.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-zinc-900/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-zinc-400">Active Subscribers</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                <Users className="mx-auto mb-4 h-8 w-8 text-green-500" />
                                10,000+
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-zinc-400">Open Rate</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                <TrendingUp className="mx-auto mb-4 h-8 w-8 text-green-500" />
                                45%
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-zinc-400">Monthly Clicks</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                <MousePointerClick className="mx-auto mb-4 h-8 w-8 text-green-500" />
                                50k+
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
                        Sponsorship Formats
                    </h2>
                    <div className="space-y-8">
                        <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
                            <div className="flex-none">
                                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <span className="text-green-500 font-bold">1</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Primary Header Sponsor</h3>
                                <p className="mt-2 text-zinc-400">Top of the email placement. High visibility logo + 50 words of copy.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
                            <div className="flex-none">
                                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <span className="text-green-500 font-bold">2</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Sponsored Deep Dive</h3>
                                <p className="mt-2 text-zinc-400">Dedicated section analyzing your product or service in our weekly report.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
                            <div className="flex-none">
                                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <span className="text-green-500 font-bold">3</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Classified Ad</h3>
                                <p className="mt-2 text-zinc-400">Text-only link at the bottom of the newsletter. Cost-effective reach.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <a href="mailto:partners@marketalpha.com" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-semibold text-black hover:bg-green-400 transition-all">
                            Inquire via Email
                            <ArrowRight className="h-5 w-5" />
                        </a>
                        <p className="mt-4 text-sm text-zinc-500">
                            Or directly email partners@marketalpha.com
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
