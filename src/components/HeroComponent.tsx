import React from "react";
import { Vortex } from "../components/ui/vortex";
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Button } from "../components/ui/moving-border";

export default function VortexDemo() {
  return (
    <div className="w-auto mx-auto rounded-md  h-[46rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <img
          src="personal/myImage.jpeg" // Replace with your image path
          alt="Descriptive Text"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
        />
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Chetan Kumar Nageshwarrao Chitturi
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
            <FaGithub />
          </a>
          {/* LinkedIn icon with a link */}
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
            <FaLinkedin />
          </a>
          <a href="/path_to_resume.pdf" download="YourName_Resume.pdf" className="flex items-center px-4 py-2 bg-grey-500 hover:bg-grey-600 transition duration-200 rounded-lg text-white text-2xl">
            <FaDownload className="mr-2"/>Resume
          </a>
          <Button
            borderRadius="1.75rem" href="/path_to_resume.pdf" download="YourName_Resume.pdf"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-2xl"
        >
        <FaDownload className="mr-2"/>Resume
        </Button>
        </div>
      </Vortex>
    </div>
  );
}
