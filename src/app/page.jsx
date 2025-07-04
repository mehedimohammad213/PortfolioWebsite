"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          MEHEDI HASAN
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Software Engineer with 3 years of experience and a passion for continuous learning and helping others.
Seeking a challenging role where I can leverage my skills to make a positive impact on both the team
and the broader community. Highly motivated and a quick learner, with a strong interest in working
with cutting-edge technologies.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
             onClick={() =>
              window.open(
                "/portfolio"
              )
            }
            >
              View My Work
            </button>
            <button
              className="p-4 rounded-lg ring-1 ring-black"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/15KrYBifxJPZ3gvvLtLgvUsAVNPZcwAL0/view?usp=sharing",
                  "_blank"
                )
              }
            >
              CV
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
