import React from "react";
import Carousel from "./components/Carousel";

const About = () => {
  return (
    <div className="min-h-screen flex items-center gap-10">
      <div className="text-pretty">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-md leading-relaxed max-w-2xl mb-8">
          I'm a <span className="text-accent">Full-Stack Developer</span> with a
          love for both backend and frontend work. I've gained experience
          working <span className="text-accent">professionally</span> and as a{" "}
          <span className="text-accent">freelance developer</span>, successfully
          completing and deploying{" "}
          <span className="text-accent">multiple projects</span> that sharpened
          my coding and problem-solving skills.
          <br />
          <br />
          My focus is on{" "}
          <span className="text-accent">backend development</span>, but I also
          have a passion for <span className="text-accent">frontend</span>,
          crafting intuitive, interfaces to match the backend functionality. I
          thrive on{" "}
          <span className="text-accent">building projects from scratch</span>{" "}
          and <span className="text-accent">exploring new technologies</span>
          .
          <br />
          <br />
          I do coding on microcontrollers like arduino and etc.
          I host my own hobby{" "}
          <span className="text-accent">projects/websites</span> on a{" "} mini{" "}
          <span className="text-accent">server</span> I manage at home, where I
          love to <span className="text-accent">tinker and optimize</span> the
          best possible way to do it. Outside of coding, I'm a{" "}
          <span className="text-accent">
            gamer, weightlifter, and CrossFit enthusiast
          </span>
          , always pushing my limits physically and mentally.
        </p>
        <button className='btn btn-primary'>Check out my projects</button>
      </div>
      <Carousel />
    </div>
  );
};

export default About;
