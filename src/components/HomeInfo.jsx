import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContect = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Lauren</span> 👋
      <br />A Full stack web developer
    </h1>
  ),
  2: (
    <InfoBox
      text="My mission is to bridge the gap between ideas and implementation, crafting seamless digital experiences that leave a lasting impression. Let's embark on a journey of innovation together"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Explore my digital playground, where lines of code translate into dynamic projects."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Ready to collaborate or just want to say hello? I'm just a message away. Connect with me for inquiries, opportunities, or even a casual tech chat."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContect[currentStage] || null;
};

export default HomeInfo;
