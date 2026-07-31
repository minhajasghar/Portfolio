export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Minhaj Asghar. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
