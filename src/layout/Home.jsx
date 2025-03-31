import React from "react";
import Header from "../component/Header";
import Main from "../component/Main";
import Footer from "../component/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
