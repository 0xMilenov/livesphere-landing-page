export function Roadmap() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#FDF6F4] relative" id="roadmap">
      <div className="container max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 relative z-10">
          Roadmap
        </h2>

        <div className="hidden md:block absolute left-1/2 top-[120px] bottom-[120px] w-px bg-gray-300 transform -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-24 relative">
          {/* Phase 1 */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-[#40A798] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
            <div className="text-center md:text-right md:pr-8">
              <h3 className="mb-2">
                <span className="font-covered-grace text-[#40A798] text-3xl md:text-4xl">
                  Phase 1:
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Foundation & Launch
                </span>
              </h3>
              <p className="text-gray-600">(Present – 3 Months)</p>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <p className="font-medium italic mb-2">
                      Develop and audit smart contracts for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>LS Token creation and distribution.</li>
                      <li>Broadcaster token factory.</li>
                      <li>Tipping and staking mechanisms.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium italic mb-2">
                      Build MVP features:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>
                        Broadcaster onboarding (KYC and wallet integration).
                      </li>
                      <li>Live streaming with token-gated chat.</li>
                      <li>Tipping system using LS Tokens.</li>
                      <li>Buy and sell interface for broadcaster tokens.</li>
                    </ul>
                  </div>

                  <p className="font-medium italic mb-2">
                    Launch LiveSphere Token (LS) with an initial liquidity pool.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-[#40A798] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
            <div className="md:order-1 order-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="space-y-4 md:space-y-6">
                  <p className="font-medium italic mb-2">
                    Introduce staking rewards for LS Token holders.
                  </p>

                  <div>
                    <p className="font-medium italic mb-2">
                      Implement governance system:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Community voting for platform decisions.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium italic mb-2">
                      Add analytics dashboard for broadcasters to track:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Token performance.</li>
                      <li>Viewer engagement.</li>
                    </ul>
                  </div>

                  <p className="font-medium italic mb-2">
                    Roll out marketing campaigns to onboard broadcasters and
                    viewers.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left md:pl-8 order-1 md:order-2">
              <h3 className="mb-2">
                <span className="font-covered-grace text-[#40A798] text-3xl md:text-4xl">
                  Phase 2:
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Ecosystem Growth
                </span>
              </h3>
              <p className="text-gray-600">(3 – 6 Months)</p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-[#40A798] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
            <div className="text-center md:text-right md:pr-8">
              <h3 className="mb-2">
                <span className="font-covered-grace text-[#40A798] text-3xl md:text-4xl">
                  Phase 3:
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Advanced Features
                </span>
              </h3>
              <p className="text-gray-600">(6 – 12 Months)</p>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <p className="font-medium italic mb-2">
                      Enable NFT creation milestones:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Broadcasters mint NFTs tied to their token economy.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium italic mb-2">
                      Launch a decentralized marketplace:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Trade NFTs, digital perks, and broadcaster tokens.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium italic mb-2">
                      Introduce collaborative streaming:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Allow broadcasters to co-stream and pool their
                        communities.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-[#40A798] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
            <div className="text-center md:hidden order-1">
              <h3 className="mb-2">
                <span className="font-covered-grace text-[#40A798] text-3xl md:text-4xl">
                  Phase 4:
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Gamification & Expansion
                </span>
              </h3>
              <p className="text-gray-600">(12 – 15 Months)</p>
            </div>

            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <p className="font-medium italic mb-2">
                      Add gamified milestones:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>
                        Reward broadcasters and viewers for achieving specific
                        goals (e.g., token growth or viewership milestones).
                      </li>
                    </ul>
                  </div>

                  <p className="font-medium italic mb-2">
                    Expand the platform internationally.
                  </p>

                  <p className="font-medium italic mb-2">
                    Forge strategic partnerships with blockchain and streaming
                    platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:pl-8 md:order-2">
              <h3 className="mb-2">
                <span className="font-covered-grace text-[#40A798] text-3xl md:text-4xl">
                  Phase 4:
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Gamification & Expansion
                </span>
              </h3>
              <p className="text-gray-600">(12 – 15 Months)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
