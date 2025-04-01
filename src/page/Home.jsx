import React from "react";
import Header from "../component/layout/Header";
import Main from "../component/layout/Main";
import Footer from "../component/layout/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
