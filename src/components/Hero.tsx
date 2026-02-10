"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { subscribe } from "@/app/actions";
import { useState } from "react";

export function Hero() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        const result = await subscribe(formData);

        if (result.error) {
            setStatus("error");
            setMessage(result.error);
        } else {
            setStatus("success");
            setMessage("Check your inbox! You are in.");
        }
    }

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20 px-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex max-w-3xl flex-col items-center text-center"
            >
                <div className="mb-6 flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    Live Market Analysis Added Daily
                </div>

                <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                    Outperform the <br />
                    <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                        Market Average
                    </span>
                </h1>

                <p className="mb-10 max-w-xl text-lg text-zinc-400 md:text-xl">
                    Get institutional-grade research, stock picks, and market trends delivered to your inbox every morning. Join 10,000+ smart investors.
                </p>

                {status === "success" ? (
                    <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-6 py-4 text-green-400 border border-green-500/20">
                        <CheckCircle2 className="h-5 w-5" />
                        <p className="font-medium">{message}</p>
                    </div>
                ) : (
                    <form action={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white placeholder-zinc-500 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50"
                            required
                            disabled={status === "loading"}
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="group flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <>
                                    Subscribe Free
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>
                )}

                {status === "error" && (
                    <p className="mt-4 text-sm text-red-400">{message}</p>
                )}

                <div className="mt-8 flex items-center gap-6 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Weekly Reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>No Spam</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Unsubscribe Anytime</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
