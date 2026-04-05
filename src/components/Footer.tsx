import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-black text-primary font-headline uppercase tracking-widest">
            AudioWeave Studio
          </div>
          <p className="font-body text-sm tracking-wide text-slate-500 text-center md:text-left">
            © 2026 AudioWeave Studio.
          </p>
        </div>
        <div className="flex gap-8 font-body text-sm tracking-wide">

          <Link href="#" className="text-slate-500 hover:text-orange-400 transition-colors">
            Email: [foundrxlabs@gmail.com]
          </Link>

          <Link href="#" className="text-slate-500 hover:text-orange-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-slate-500 hover:text-orange-400 transition-colors">
            Discord
          </Link>
          <Link href="#" className="text-slate-500 hover:text-orange-400 transition-colors">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
