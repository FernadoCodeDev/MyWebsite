import { useEffect, useState } from "react";

const useScrollAnimation = (id) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [id]);

  return isVisible;
};

export default useScrollAnimation;