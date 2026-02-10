import Link from "next/link";
import { TrendingUp, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
                            <TrendingUp className="h-6 w-6 text-green-500" />
                            <span>Market<span className="text-green-500">Alpha</span></span>
                        </Link>
                        <p className="text-sm leading-6 text-zinc-400">
                            Making institutional-grade market data accessible to everyone.
                            <br />
                            Invest smarter, not harder.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-zinc-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-zinc-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a href="#" className="text-zinc-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-5 w-5" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Daily Newsletter</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Stock Screener</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Portfolio Tracker</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-zinc-500">&copy; 2026 MarketAlpha Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
