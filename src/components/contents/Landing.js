import React from "react";
import hero1 from "../assets/images/image-hero-desktop.png";
import hero2 from "../assets/images/image-hero-mobile.png";
import client1 from "../assets/images/client-databiz.svg";
import client2 from "../assets/images/client-audiophile.svg";
import client3 from "../assets/images/client-maker.svg";
import client4 from "../assets/images/client-meet.svg";

const Landing = () => {
  return (
    <div className=" max-w-5xl mx-auto ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-between py-8">
        <div className="flex order-2 lg:order-1 justify-center pt-10 ">
          <div className=" flex flex-col w-4/5 text-center lg:text-left ">
            <div className="space-y-8">
              <h1 className=" font-bold text-4xl lg:text-6xl font-kumbh">
                Make remote work
              </h1>
              <p className=" font-kumbh">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>
              <button className=" outline hover:border-white rounded-xl hover:bg-black hover:text-white px-4 py-2">
                Learn more
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 pt-16">
              <img src={client1} alt="client1" className="h-5" />
              <img src={client2} alt="client2" className="h-5" />
              <img src={client3} alt="client3" className="h-5" />
              <img src={client4} alt="client4" className="h-5" />
            </div>
          </div>
        </div>

        <div className=" order-1 lg:order-2 flex justify-center pb-10 lg:pb-0">
          <img
            src={hero1}
            alt="hero"
            className=" hidden lg:block w-80 h-auto"
          />
          <img
            src={hero2}
            alt="hero"
            className=" block lg:hidden w-96 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
