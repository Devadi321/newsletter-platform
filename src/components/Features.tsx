import { BarChart3, Newspaper, Zap, Globe } from "lucide-react";

const features = [
    {
        name: "Daily Market Brief",
        description: "Start your day with a concise summary of the US and Asian markets. Know what's moving before the bell rings.",
        icon: Newspaper,
    },
    {
        name: "Deep Dive Analysis",
        description: "Weekly deep dives into specific stocks or sectors. We do the due diligence so you don't have to.",
        icon: BarChart3,
    },
    {
        name: "Real-time Alerts",
        description: "Get instant notifications for breakout stocks and urgent market news via email and SMS.",
        icon: Zap,
    },
    {
        name: "Macro Trends",
        description: "Understand the bigger picture. We analyze interest rates, inflation, and global events affecting your portfolio.",
        icon: Globe,
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-black/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-500">Why MarketAlpha?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need to trade smarter
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        We filter the noise and deliver high-signal intelligence directly to your inbox.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <feature.icon className="h-5 w-5 flex-none text-green-500" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
