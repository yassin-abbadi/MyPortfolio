import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";



const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const YYY = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return YYY === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="  left-section flex  ">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node
        </button>

        <button
          onClick={() => {
            handleClick("figma");
          }}
          className={currentActive === "figma" ? "active" : null}
        >
          Figma
        </button>

        <button
          onClick={() => {
            handleClick("docker");
          }}
          className={currentActive === "docker" ? "active" : null}
        >
          Docker
        </button>

        <button
          onClick={() => {
            handleClick("AWS");
          }}
          className={currentActive === "AWS" ? "active" : null}
        >
          AWS
        </button>

        <button
          onClick={() => {
            handleClick("salesforce");
          }}
          className={currentActive === "salesforce" ? "active" : null}
        >
          Salesforce 
        </button>
      </section>

      <section className="  flex right-section  ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className=" card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className=" box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Don't forget to connect this compoent to the backend as
                    every card should independently show its own content (Title,
                    Description, and photo)
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href="#">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
