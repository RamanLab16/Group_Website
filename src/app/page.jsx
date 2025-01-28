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
          <Image src="/home2.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to the RAMAN GROUP
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Our lab works in areas of surface enhanced Raman Scattering(SERS) by exploring new substrates;
          Raman Imaging for various biological applications
          and exploring non-covalent sulphur centered hydrogen bonds(HCHB) using quantum chemistry. Furthermore,
          characterization and contemporary understanding of traditional drug formulation is another active area of research.


          </p>
          {/* BUTTONS */}
          {/* <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
