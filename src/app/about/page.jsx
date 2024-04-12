"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CMT container */}
      <div>
        {/* CMT text container */}
        <div className="">
          {/* CMT biography */}
          <div className=""></div>
          {/* CMT biography */}
          <div className=""></div>
          {/* CMT biography */}
          <div className=""></div>
        </div>
        {/*CMT  SVG */}
        <div className=""></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
