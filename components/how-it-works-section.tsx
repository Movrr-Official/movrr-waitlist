export function HowItWorksSection() {
  return (
    <section className="py-32 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              HOW IT <span className="text-primary">WORKS</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Four simple steps to start earning. Join our pre-launch waitlist
              today.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-8xl font-black text-primary mb-6 leading-none">
                01
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
                Sign Up
              </h3>
              <p className="text-white/70">Join the waitlist. Be first.</p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-black text-white mb-6 leading-none">
                02
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
                Get Gear
              </h3>
              <p className="text-white/70">We equip you. You ride.</p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-black text-primary mb-6 leading-none">
                03
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
                Start Riding
              </h3>
              <p className="text-white/70">Hit the streets. Make moves.</p>
            </div>
            <div className="text-center">
              <div className="text-8xl font-black text-white mb-6 leading-none">
                04
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
                Get Paid
              </h3>
              <p className="text-white/70">Monthly rewards. Guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
