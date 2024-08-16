import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 flex-grow min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse text-balance">
        <img
          className="w-64 md:w-96 lg:w-1/2" 
          src="https://i.ibb.co/Hp1tctj/452895475-492912680138603-5135836335250653271-n.png"
        />
        <div>
          <h1 className="text-5xl font-bold">Hello, I'm <a href="https://github.com/ceejpineda" className="text-primary">@ceejpineda</a>.</h1>
          <p className="py-6">
            I'm an <span className="text-accent">electronics engineer</span> turned <span className="text-accent">software developer</span>.
            <br/> 
            Currently a <span className="text-accent">Full Stack Developer</span>.
          </p>
          <button className="btn btn-primary">More About Me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
