"use client";
import Link from "next/link"
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Git Bot",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl text-justify">An AI-enhanced platform offering an interactive chat application for GIT documentation, a robust text retrieval system, and a sophisticated conversation management system to optimize user interactions and information retrieval.</p>
          <Link className="text-xl" href={"#"}>
                                    Learn More
          </Link>
          <Image
          src="/personal/git.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-center h-[60%]  md:h-[100%] relative -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Audio Room Cloud Service",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl text-justify">A dynamic audio room application designed to facilitate scalable and robust content management, leveraging React.js, Spring Boot, and DynamoDB, with enhanced performance and cost efficiency through Amazon Fargate and Load Balancer integration.
          </p>
          <Link className="text-xl" href={"#"}>
                                    Learn More
          </Link>
          <Image
          src="/personal/audio.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-center h-[60%]  md:h-[100%] relative -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div>
    <h2 className="text-white text-4xl text-center">Projects</h2>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
