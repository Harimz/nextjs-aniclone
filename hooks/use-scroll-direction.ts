import { useState, useEffect } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("UP");
  const [beyondNavbar, setBeyondNavbar] = useState(false);

  const navbarHeight = 70;

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > navbarHeight) {
        setBeyondNavbar(true);
      } else {
        setBeyondNavbar(false);
      }

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("DOWN");
      } else {
        setScrollDirection("UP");
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollDirection, beyondNavbar };
};
