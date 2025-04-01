import React from "react";
import FirstSection from "../sections/FirstSection";
import SecondSection from "../sections/SecondSection";
import ThirdSection from "../sections/ThirdSection";

const Main = () => {
  return (
    <main>
      <section>
        <FirstSection/>
        <SecondSection />
        <ThirdSection />
      </section>
    </main>
  );
};

export default Main;