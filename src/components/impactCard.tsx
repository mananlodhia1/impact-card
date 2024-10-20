import React from "react";
import ProgressBar from "./progressBar";
import ProofSection, { Proof } from "./proofSection";
import RewardSection, { Reward } from "./rewardSections";

interface ImpactCardProps {
  title?: string;
  brand?: string;
  description?: string;
  image: string;
  rewards?: Reward[];
  progress?: number;
  link?: string;
  proofs?: Proof[];
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  title,
  brand,
  description,
  image,
  rewards,
  progress,
  link,
  proofs,
}) => {
  return (
    <div
      className="border-4 border-green-300 relative w-full bg-cover bg-center max-w-sm h-[650px] mx-auto rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Faded Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-transparent"></div>

      <div className="flex flex-col relative z-10 h-full">
        {/* Content Section */}
        <div className="p-8 flex-grow">
          <h3 className="block mt-1 text-3xl leading-tight font-bold text-black">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{brand}</p>
          <p className="mt-2 text-gray-700">{description}</p>
          {/* Proof Section */}
          {proofs && <ProofSection proofs={proofs} />}

          {/* Progress Tracker */}
          {progress !== undefined && <ProgressBar progress={progress} />}

          {/* Call-to-Action (optional) */}
          {link && (
            <div className="mt-5">
              <a
                href={link}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More & Track Impact
              </a>
            </div>
          )}
        </div>

        {/* Rewards Section */}
        {rewards && (
          <div className="p-2">
            <RewardSection rewards={rewards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpactCard;
