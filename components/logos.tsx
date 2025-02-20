import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";

const logos = [
    { 
      href: "https://www.lean-fs.ch", 
      src: "https://www.lean-fs.ch/assets/logo/white-logo-01.svg", 
      alt: "Lean FS Logo" 
    },
    { 
      href: "https://www.uzh.ch", 
      src: "https://www.cd.uzh.ch/dam/jcr:06c42b1d-c9d5-4664-adb7-89b327fafa88/uzh-logo-white.svg", 
      alt: "University of Zurich Logo" 
    },
    /*{ 
      href: "https://ethz.ch", 
      src: "https://vlg.inf.ethz.ch/assets/img/logo/logo-eth-white.png", 
      alt: "ETH Zurich Logo" 
    },
    { 
      href: "https://www.dowjones.com", 
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Dow_Jones_Newswires_Logo.png/1280px-Dow_Jones_Newswires_Logo.png", 
      alt: "Dow Jones Newswires Logo",
      className: "brightness-0 invert" // Makes the logo white
    },*/
];
  


export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
          text="Powered by"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="Simple and powerful tools that help you build faster"
          duration={0.8}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-4 grid w-full grid-cols-2 items-center justify-center gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
        {logos.map((logo, index) => (
          <Link
            key={index}
            href={logo.href}
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-24 items-center justify-center rounded-lg border bg-zinc-900 p-8 transition-all duration-150 ease-in-out md:hover:border-zinc-700 md:hover:bg-accent">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={100}
              className="h-auto w-32 opacity-85"
            />
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
