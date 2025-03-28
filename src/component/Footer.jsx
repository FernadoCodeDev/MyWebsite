import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          omnis incidunt natus commodi dolorem dolore provident ratione odit
          consectetur, hic est dignissimos libero odio nemo quod, explicabo
          nostrum a quam?
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          corrupti ab nihil mollitia delectus quam? Minima dolorem commodi
          optio, fuga reiciendis deleniti ipsam repellendus nisi porro in dolore
          veritatis odio! <span className="font-bold">Lorem</span>
        </p>
      </div>

      <div className="mt-8 border-t-2 border-white opacity-50 "></div>

      <p className="mt-6 text-sm text-center">
        Lorem{" "}
        <a
          href="/"
          className="ml-1 transition duration-300 ease-in-out font-bol hover:text-lime-400 "
        >
          Lorem
        </a>
      </p>
    </footer>
  );
};

export default Footer;
