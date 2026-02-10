import Link from "next/link";
import { Button } from "@/components/ui/button"; // We'll create this or use a simple HTML button for now
import { TrendingUp } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span>Market<span className="text-green-500">Alpha</span></span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="/advertise" className="hover:text-white transition-colors">Advertise</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Log in
                    </Link>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </nav>
    );
}
