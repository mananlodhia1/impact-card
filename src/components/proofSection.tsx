import React from "react";

export interface Proof {
  icon: JSX.Element;
  text: string;
  value?: string;
}
interface ProofSectionProps {
  proofs?: Proof[];
}

const ProofSection: React.FC<ProofSectionProps> = ({ proofs }) => {
  return (
    <div className="mt-4 border-y-2 border-green-500">
      <div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-3 items-center justify-items-center">
        {proofs?.map((proof, index) => (
          <div key={index} className="flex flex-col items-center p-2">
            <div className="relative inline-flex items-center p-2 text-sm font-medium text-center text-green-500 rounded-lg">
              {proof.icon} {proof.value}
            </div>
            <span className="mt-2 text-xs text-center text-gray-700">
              {proof.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofSection;
