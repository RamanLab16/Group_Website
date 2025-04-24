"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "SERS",
    desc: `Our group works on novel SERS substrate particularly exploring the enhancement brought about significantly by chemical effect. 
    Till now have demonstrated nano-copper(copper deposited on pencil graphite), various heterostructures of bismuth as novel SERS substrate.`,
    img: "/research/SERS.png",
    // link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Computational Chemistry",
    desc: `Ab initio conformational studies of selected alkanethiols and their clusters. 
    Conformational stability and structural analysis of methanethiol clusters: a revisit, RSC advances, 11, 2021, pp. 29207-29214. 
    Revisiting structure and conformational stability of ethanethiol, Journal of Molecular Structure, 1223, 2021, p. 28997. 
    Conformational and structural stability of n and 2-propylthiols: a revisit, RSC advances 12, 2022, pp. 10336-10344`,
    img: "/research/computational.png",
    // link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "IKS & History of Science",
    desc: `(IKS)IKS content in school textbooks under NEP 2020 and NCF 2023. Heritage of Indian Chemistry. 
    Herbomineral formulations from Siddha medicinal repertoire.        
    Antiquity of mineral acids in India(https://doi.org/10.1007/s43539-024-00143-2). 
    Tamil Astronomy. Scientific Temper in Ancient and medieval India`,
    img: "/research/IKS.png",
    // link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Sponsored Projects",
    desc: `Adani Enterprises funded Rs. 1,05,000 for research for Pb based drug formulation
    July 2022 - Sept 2024; Exploring mineral acids from ancient Indian texts; Rs. 10,00,000; MoE IKS Division, PI.
        July 2022 - Dec 2024; IKSCenter@IITBHU Varanasi; Rs. 40,00,000; MoE IKS Division, PI.
Nov 2023-Oct 2024; Developing course for higher education in chemistry in ancient India; Rs. 18,00,000; MoE IKS Division, PI.
Feb 2024-Jan 2027; Chemical screening of Rock art in Kaimur Range using Raman spectroscopy; Rs. 73,00,000; DST
TexShila: Science Heritage Center; Rs. 4.2 Cr; DST; Co-PI
IKS Center at Samvith Research Foundation; Rs. 40,00,000; MoE IKS Division, Co-PI.
I'm a Co-PI with Archeologist Dr. Sachin Kumar at BHU in an Iks funded project.`,
    img: "/research/rupee.png",
    // link: "https://lama.dev",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Publications",
    desc: "",
    img: "/research/Publications.png",
    link: "https://scholar.google.co.in/citations?user=oLHHKoAAAAAJ&hl=en",
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "Teaching Courses",
    desc: `CHI-312/313  Quantum Chemistry, Group Theory and Molecular Spectroscopy
    CHI-321 Chemical Kinetics 
    CY-101 General Chemistry
    CHI-311 Classical Thermodynamics
    CY-402 Reaction Kinetics 
    CY-406 Group Theory and Molecular Spectroscopy
    CY-351 Statistical Thermodynamics
    CY-517 Lasers and its applications in chemistry and biology`,
    img: "/research/teaching.png",
    // link: "https://scholar.google.co.in/citations?user=oLHHKoAAAAAJ&hl=en",
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "Other Responsibilities",
    desc: `Faculty Incharge: Student Counselling Services from 2020 till date
    Convener Institute Lecture Series from 2018 till date
    Admin Warden Limbdi Hostel from 2018 - 2024
    Various other committes of institute
    Chairman Position Paper Karnataka State NEP 2020
    Member Curricular Assessment Group for Science and IKS, NCF 2023
    Member of various IKs committees at national level
    Former Core Committee Member Indian National Yound Academy of Science(INYAS as body of INSA)
    Member Academic Council MahaYogi Gorakhnath University
    Member Research Council for History of Science Indian National Science Academy
    Member Curriculum Development and UGC-NET Syllabus Committee for IKS`,
    img: "/research/duty.png",
    // link: "https://scholar.google.co.in/citations?user=oLHHKoAAAAAJ&hl=en",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Extra Curriculars",
    desc: `Involved in NCERT textbook writing activities. 
    Resource person for IKS in chemistry for FDPs and Workshops. 
    Sanskrit and Tamil poetry. 
    Indian classical music, Playing badminton, Swimming.`,
    img: "/research/Extra.png",
    // link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Research Works & Teaching Courses
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex w-full max-w-6xl px-8 gap-8 text-gray-500">
                  {/* Flex container for left and right layout */}
                  <div className="flex flex-1 items-center justify-start">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.img} alt="" fill />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-4xl mb-4">
                      {item.title}
                    </h1>
                    {/* Convert description into bullet points */}
                    <ul className="list-disc list-inside text-sm md:text-lg lg:text-xl xl:text-l mb-8">
                      {item.desc.split('\n').map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                    {item.title === "Publications" && (
                      <Link href={item.link} target="_blank" className="flex justify-end">
                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                          Visit here
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
