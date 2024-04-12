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
      <div className="">
        {/* CMT text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 zl:gap-64">
          {/* CMT biography */}
          <div className="">
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                harum quibusdam cupiditate nobis accusamus sed aut aperiam,
                reiciendis numquam! Voluptas voluptatibus obcaecati dolore
                itaque suscipit! Vel doloremque numquam quam nihil.
              </p>
              <span className="italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <div className="self-end">
                <svg
                  width="151"
                  height="60"
                  viewBox="0 0 151 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 7C21.6198 7 66.4751 1.41799 66.5556 2.22222C66.8095 4.76149 60.0318 9.96818 58.8333 11.1667C45.3004 24.6996 30.6855 37.2356 16.0556 49.5556C15.2582 50.227 0.640619 62.8672 2.05556 56.5C2.94108 52.5151 7.31735 52.0728 10.6667 52C19.5407 51.8071 28.7439 48.2229 37.2778 46.0556C43.6365 44.4406 50.1259 43.5329 56.4445 41.7778C68.489 38.4321 81.8706 32.7814 90.2222 23.1111C97.7346 14.4126 77.0755 15.1747 73.2778 16.6667C68.6613 18.4803 65.6335 27.61 63.7778 31.6667C63.2216 32.8824 57.8861 41.1076 59.2222 42.7778C61.0648 45.081 66.0405 44.0547 68.4445 43.8889C77.6362 43.255 86.8322 40.5481 94.8889 36C100.204 32.9994 104 30.1529 104 23.5C104 19.7047 101 17.2186 101 22.5556C101 35.115 111.748 40.5126 124 39C133.381 37.8419 145.852 26.6627 149.222 17.7778C150.833 13.532 141.577 15 139.222 15C133.856 15 134.178 22.89 138.056 25.5556C140.731 27.3946 143.427 29.2737 143.778 32.7778C144.368 38.6762 123.687 45.1523 119.944 46.4444C104.316 51.8399 87.6167 56 71 56"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* CMT skills */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </div>
            <svg
              width="151"
              height="60"
              viewBox="0 0 151 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 7C21.6198 7 66.4751 1.41799 66.5556 2.22222C66.8095 4.76149 60.0318 9.96818 58.8333 11.1667C45.3004 24.6996 30.6855 37.2356 16.0556 49.5556C15.2582 50.227 0.640619 62.8672 2.05556 56.5C2.94108 52.5151 7.31735 52.0728 10.6667 52C19.5407 51.8071 28.7439 48.2229 37.2778 46.0556C43.6365 44.4406 50.1259 43.5329 56.4445 41.7778C68.489 38.4321 81.8706 32.7814 90.2222 23.1111C97.7346 14.4126 77.0755 15.1747 73.2778 16.6667C68.6613 18.4803 65.6335 27.61 63.7778 31.6667C63.2216 32.8824 57.8861 41.1076 59.2222 42.7778C61.0648 45.081 66.0405 44.0547 68.4445 43.8889C77.6362 43.255 86.8322 40.5481 94.8889 36C100.204 32.9994 104 30.1529 104 23.5C104 19.7047 101 17.2186 101 22.5556C101 35.115 111.748 40.5126 124 39C133.381 37.8419 145.852 26.6627 149.222 17.7778C150.833 13.532 141.577 15 139.222 15C133.856 15 134.178 22.89 138.056 25.5556C140.731 27.3946 143.427 29.2737 143.778 32.7778C144.368 38.6762 123.687 45.1523 119.944 46.4444C104.316 51.8399 87.6167 56 71 56"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* CMT experience */}
          <div className="">EXPERIENCE</div>
        </div>
        {/*CMT  SVG */}
        <div className="hidden "></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
