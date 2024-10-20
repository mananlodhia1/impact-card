import React from "react";

export interface Reward {
  icon: JSX.Element;
  badgeValue?: string;
}
interface RewardSectionProps {
  rewards?: Reward[];
}

const RewardSection: React.FC<RewardSectionProps> = ({ rewards }) => {
  return (
    <div
      className="mt-4 block p-6 bg-white border border-gray-200 rounded-lg"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="grid gap-4 mt-2 grid-cols-4 items-center">
        <h4 className="text-md font-semibold">Rewards</h4>
        {rewards?.map((reward, index) => (
          <div key={index} className="flex items-center p-2 rounded-lg">
            <div className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none">
              {reward.icon}
              {reward.badgeValue && (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 rounded-full -top-2 -end-2">
                  {reward.badgeValue}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardSection;
