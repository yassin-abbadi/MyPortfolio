import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./public/IMG_9001.jpeg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">Front End Developer and Designer</h1>

        <p className="sub-title">
          Junior FRONT-END developer and designer. Knowldgable in all stages of
          front-end web development and design. compoentent in the follwoing
          lanaguages and skills: Figma Ui, HTML & CSS, Javascript, react,
          typescript, git, and the follwing rUI libaraires (chakra, bootstrap,
          material, react bootstrap and otjers). willing to learn new
          technologies and coperate to build and maintain working software
        </p>
        <p style={{color: "red"}}>
          DELETE THIS PARAGRAPH: I must add dynamic animations to this site and
          all others using my own skills from the Figma course. This is to
          showcase my work and knowledge in Figma!
        </p>

        <div className="icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-github "></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <div className="developer-animation">
          <img
            style={{
              justifyContent: "space-between",
              height: 250,
              borderRadius: 20,
            }}
            src="./gif.gif"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
