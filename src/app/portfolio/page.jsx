"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import items from "./items";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  console.log(items);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative">
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center">
          {items.map((res) => {
            return (
              <div className="" key={res.id}>
                <div className="">
                  <h1>{res.title}</h1>
                  <div className="relative">
                    {/* <Image src={res.img} alt="" fill /> */}
                  </div>
                  <p>{res.desc}</p>
                  <Link href={res.link}>
                    <button>See Demo</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
