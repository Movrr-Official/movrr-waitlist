import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary hover:text-[#1e9a3a] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Back to Movrr</span>
            </Link>
            <div className="flex items-center gap-1">
              <img
                src="/movrr-icon.png"
                alt="Movrr Icon"
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-black text-primary">MOVRR</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            <p className="text-gray-300">
              Simple rules for using Movrr before launch.
            </p>
            <p className="text-sm text-gray-400">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Sections */}
          <div className="prose prose-invert prose-lg max-w-none space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">1. Agreement</h2>
              <p className="text-gray-300">
                By joining the Movrr waitlist or using our website, you agree to
                these Terms. If you do not agree, please do not use the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">
                2. Use of Movrr
              </h2>
              <p className="text-gray-300">
                Movrr is currently in pre-launch. We provide information and
                allow you to join the rider waitlist. When live, additional
                terms may apply.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">
                3. Prohibited Use
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Do not provide false or misleading information</li>
                <li>Do not attempt to disrupt or misuse the site</li>
                <li>Do not violate applicable laws while using Movrr</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">
                4. No Guarantee
              </h2>
              <p className="text-gray-300">
                Movrr is in development. We do not guarantee when the platform
                will launch or that you will be selected for campaigns.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#23b245]">
                5. Contact Us
              </h2>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 space-y-2 text-gray-300">
                <p>
                  <strong>Email:</strong> legal@movrr.nl
                </p>
                <p>
                  <strong>Support:</strong> support@movrr.nl
                </p>
                <p>
                  <strong>Address:</strong> Movrr Legal Team
                  <br />
                  Amsterdam, Netherlands
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
