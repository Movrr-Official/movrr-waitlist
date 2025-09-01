export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-black text-white">MOVRR</h3>
            <p className="text-white/70 mt-2">
              Transform your ride. Transform your life.
            </p>
          </div>
          <div className="flex space-x-8 text-sm text-white/70 uppercase tracking-wider">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center mt-24 text-xs text-white/70">
          © {currentYear} Movrr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
