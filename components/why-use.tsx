export function WhyUse() {
  return (
    <section className="py-20 px-4 bg-[#E5F4F1]">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Why use{" "}
          <span className="font-covered-grace text-[#009387]">LiveSphere</span>?
        </h2>

        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            It{" "}
            <span className="font-covered-grace text-[#009387]">doesn't</span>{" "}
            collect{" "}
            <span className="font-covered-grace text-[#009387] text-5xl">
              {">"}20%
            </span>{" "}
            of your earnings.
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold">
            Everything{" "}
            <span className="font-covered-grace text-[#009387]">happens</span>{" "}
            on the blockchain.{" "}
            <span className="font-covered-grace text-[#009387]">IYKYK</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-4">
            <p className="text-gray-600 text-lg">
              Most traditional platforms take a significant portion of
              broadcasters' earnings, often ranging from 20% to 70%.
            </p>
            <p className="text-gray-600 text-lg">
              This leaves creators with a fraction of what they truly earn,
              limiting their potential and independence.
            </p>
          </div>

          {/* Center Column - Fee Comparison */}
          <div className="flex items-end justify-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-32 h-48 bg-[#E97451] rounded-lg flex items-center justify-center text-white">
                <div>
                  <div className="text-2xl font-bold">70%</div>
                  <div className="text-sm">Platform</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-24 bg-[#009387] rounded-lg flex items-center justify-center text-white">
                <div>
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-sm">Broadcaster</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <p className="text-gray-600 text-lg">
              With LiveSphere, this changes. The platform charges only a 5%
              transaction fee!
            </p>
            <p className="text-gray-600 text-lg">
              The vast majority of earnings—95%—goes directly to the
              broadcaster. Not only that, blockchain transparency ensures
              everything is secure and immutable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
