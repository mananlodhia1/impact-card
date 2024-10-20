import { useState } from "react";

const useCardNav = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : length - 1
    );
  };

  return { currentIndex, nextCard, prevCard };
};

export default useCardNav;
