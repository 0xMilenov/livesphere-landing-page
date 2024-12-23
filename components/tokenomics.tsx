import { Card } from "@/components/ui/card";

interface TokenDistributionItem {
  name: string;
  percentage: number;
  color: string;
}

const tokenDistribution: TokenDistributionItem[] = [
  {
    name: "Platform Development and Operations",
    percentage: 30,
    color: "#40A798",
  },
  { name: "Staking Rewards", percentage: 25, color: "#E97451" },
  { name: "Marketing and Growth Fund", percentage: 20, color: "#FFD84D" },
  { name: "Liquidity Pool", percentage: 15, color: "#D32F2F" },
  { name: "Team Allocation", percentage: 10, color: "#1E40AF" },
];

export function Tokenomics() {
  const calculateArcPath = (percentage: number, offset: number): string => {
    const startAngle = offset * 3.6;
    const endAngle = (offset + percentage) * 3.6;
    const x1 = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
    const y1 = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
    const x2 = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
    const y2 = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));
    const largeArc = percentage > 50 ? 1 : 0;

    return `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  return (
    <section
      className="py-12 md:py-20 px-4 bg-gradient-to-b from-[#E5F4F1] to-white"
      id="tokenomics"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
          Tokenomics
        </h2>

        <Card className="p-6 md:p-12 max-w-4xl mx-auto bg-white shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            LS Token Distribution
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 relative shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {
                  tokenDistribution.reduce(
                    (
                      acc: { elements: JSX.Element[]; totalPercentage: number },
                      item,
                      index
                    ) => {
                      const path = calculateArcPath(
                        item.percentage,
                        acc.totalPercentage
                      );

                      acc.elements.push(
                        <path key={item.name} d={path} fill={item.color} />
                      );

                      acc.totalPercentage += item.percentage;
                      return acc;
                    },
                    { elements: [], totalPercentage: 0 }
                  ).elements
                }
              </svg>
            </div>

            <div className="flex-1 space-y-4 w-full md:w-1/2 max-w-sm">
              {tokenDistribution.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <div
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm md:text-base font-medium">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-bold ml-5 sm:ml-0">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
