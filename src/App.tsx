import React from 'react';
import ImpactCard from './components/impactCard';

const App: React.FC = () => {
  const cardData = {
    title: "Tree Planting Initiative",
    brand: "GreenEarth Foundation",
    description: "Planting trees to offset carbon emissions and promote biodiversity.",
    image: "https://via.placeholder.com/300x200.png?text=Tree+Planting",
    proofLink: "https://example.com/certificate",
    rewards: ["100 loyalty points", "10% off next purchase", "VIP access to events"],
    progress: 60,
    link: "https://example.com/project-details"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ImpactCard {...cardData} />
    </div>
  );
};

export default App;
