import Link from "next/link";
import type { Dictionary } from "@/locales/en";
import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";

interface FooterProps {
  locale: Locale;
  copy: Dictionary["footer"];
  brandName: string;
}

export function Footer({ locale, copy, brandName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-1">
              <img
                src="/movrr-icon.png"
                alt={copy.logoAlt}
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <h3 className="text-2xl md:text-3xl font-black text-white">{brandName}</h3>
            </div>
            <p className="text-white/70 mt-2">{copy.tagline}</p>
          </div>
          <div className="flex space-x-8 text-sm text-white/70 uppercase tracking-wider">
            <Link href={withLocalePath(locale, "/privacy")} className="hover:text-white transition-colors">
              {copy.privacy}
            </Link>
            <Link href={withLocalePath(locale, "/terms")} className="hover:text-white transition-colors">
              {copy.terms}
            </Link>
          </div>
        </div>
        <div className="text-center mt-24 text-xs text-white/70">
          © {currentYear} {copy.copyrightSuffix}
        </div>
      </div>
    </footer>
  );
}

