import React, { useEffect } from "react";

const HomeSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const h3Element = document.querySelector("#home h3");
      const h5Element = document.querySelector("#home h5");
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 275; // Adjust the value as needed

      h3Element.style.opacity = opacity.toFixed(2);
      h5Element.style.opacity = opacity.toFixed(2);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="card">
      <div>
        <h3> I s a a c ‎ B.‎ S i m </h3>
        <h5> A s p i r i n g ‎ ‎  D e v e l o p e r</h5>
        <img src="./standing.png" alt="selfie" className="home-image" />
      </div>
    </section>
  );
};

export default HomeSection;
