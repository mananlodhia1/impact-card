import React from "react";
import ImpactCard from "./components/impactCard";
import { cardDataArray } from "./utilities/cardObj";
import useCardNav from "./hooks/useCardNav";

const App: React.FC = () => {
  const { currentIndex, nextCard, prevCard } = useCardNav(cardDataArray.length);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg">
        <ImpactCard {...cardDataArray[currentIndex]} />

        {/* Card Controls */}
        <div className="w-full flex justify-center mt-5 gap-2">
          <button
            className="bg-green-500 text-white p-2 rounded-md"
            onClick={prevCard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="border border-green-500 p-2 rounded-md">
            {currentIndex + 1}
          </span>
          <button
            className="bg-green-500 text-white p-2 rounded-md"
            onClick={nextCard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
