import React from 'react';

// Define the props type for the ImpactCard component
interface ImpactCardProps {
  title: string;
  brand: string;
  description: string;
  image: string;
  proofLink: string;
  rewards: string[];
  progress?: number; // Optional progress value
  link: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  title,
  brand,
  description,
  image,
  proofLink,
  rewards,
  progress,
  link,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-8">
          <h3 className="block mt-1 text-lg leading-tight font-medium text-black">{title}</h3>
          <p className="text-sm text-gray-500">Sponsored by: {brand}</p>
          <p className="mt-2 text-gray-700">{description}</p>

          {/* Proof Section */}
          <div className="mt-4">
            <a
              href={proofLink}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Proof of Impact
            </a>
          </div>

          {/* Progress Tracker */}
          {progress !== undefined && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Progress: {progress}%</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Rewards Section */}
          <div className="mt-4">
            <h4 className="text-md font-semibold">Rewards</h4>
            <ul className="list-disc list-inside">
              {rewards.map((reward, index) => (
                <li key={index} className="text-gray-600">{reward}</li>
              ))}
            </ul>
          </div>

          {/* Call-to-Action */}
          <div className="mt-6">
            <a
              href={link}
              className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More & Track Impact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
