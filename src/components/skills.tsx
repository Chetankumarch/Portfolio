'use client'
import { HoverEffect } from "../components/ui/card-hover-effect";
import { FaReact, FaNextjs } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiJavascript, SiSpringboot, SiMongodb, SiNodedotjs, SiAmazonaws,
    SiStreamlit } from 'react-icons/si';

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-white text-4xl text-center pt-10">Skills</h2>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "React",
    Icon: SiReact
  },
  {
    title: "NextJS",
    Icon: SiNextdotjs
  },
  {
    title: "NodeJS",
    Icon: SiNodedotjs
  },
  {
    title: "Springboot",
    Icon: SiSpringboot
  },
  {
    title: "Mongodb",
    Icon: SiMongodb
  },
  {
    title: "AWS",
    Icon: SiAmazonaws
  },
  {
    title: "Streamlit",
    Icon: SiStreamlit
  },
];
