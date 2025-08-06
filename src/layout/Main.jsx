import React from "react";
import FirstSection from "../component/sections/FirstSection";
import SecondSection from "../component/sections/SecondSection";
import ThirdSection from "../component/sections/ThirdSection";

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