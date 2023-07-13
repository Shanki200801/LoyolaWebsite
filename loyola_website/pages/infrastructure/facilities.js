import React from "react";
import FacilityCard from "@/components/infrastructure/FacilityCard";
import { Lobster_Two, Oswald, Inter } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });

const infrastructure = () => {
  return (
    <>
      <div
        className={`bg-slate-300 bg-cover bg-[url('~/public/backgrounds/bgTwo.webp')] bg-center bg-fixed`}
      >
        <div className={`bg-sky-100/90 py-4`}>
          <div
            className={`custom-letter-spacing-wider lg:text-7xl text-5xl py-6 text-center text-shadow-custom-blue text-black ${lobster.className}`}
          >
            Our Infrastructure
          </div>
          <div className="">
            <InfraList />
          </div>
        </div>
      </div>
    </>
  );
};

const InfraList = () => {
  const list = [
    {
      id: 1,
      image: "/infrastructure/computerlab.jpg",
      title: "Computer Labs",
      description:
        "Loyolites are provided with well-equipped computer lab for the students to engage in in- depth research related to their respective field. Internet facilities in the lab makes their study at Loyola worthwhile. ",
    },
    {
      id: 2,
      image: "/infrastructure/Ground.jpg",
      title: "Playground",
      description:
        "Surrounded by lush green trees, the vast playground is at the heart of our sprawling campus.",
    },
    {
      id: 3,
      image: "/infrastructure/Gym.jpg",
      title: "Gym",
      description:
        "Students at Loyola are encouraged to do rigorous physical exercises in the well-equipped gym at our campus. ",
    },
    {
      id: 4,
      image: "/infrastructure/itc-classroom.png",
      title: "ITC enabled classrooms",
      description:
        "Studies show that the use of audio-visual aids catalyze the process of learning. At Loyola, students receive a comprehensive understanding of the world with smart-class enabled classrooms. We believe, this not only enhances the learning experience but also makes it innovative. ",
    },
    {
      id: 5,
      image: "/infrastructure/library.jpg",
      title: "Library",
      description:
        "From history to geography, philosophy to poetry, science, social science and politics, our library is a repository of immense knowledge and wisdom. Here, we encourage students to make reading a habit by providing a variety of newspapers and magazines to flick through. The library also provides previous year question bank featuring bot question papers from university as well as internal exams. ",
    },
    {
      id: 6,
      image: "/infrastructure/Indoor_Games.jpg",
      title: "Indoor Games",
      description:
        "Indoor games such as chess, ludo and carrom provides an immersive atmosphere for the students at Loyola to engage in during their leisure. ",
    },
    {
      id: 7,
      image: "/infrastructure/Psychology-lab.jpg",
      title: "Studio and Psychology Lab",
      description:
        "We provide the students at Loyola with cutting-edge materials and equipment to carry out their psychology experiments. The journalism students here are trained in photography, videography and reporting at the fully equipped studio in the campus. The studio contains cameras, teleprompters and other necessary devices to make a full-fledged television/radio programme for Loy TV, a channel run by the students, for students. ",
    },
  ];

  return list.map((item) => {
    return (
      <FacilityCard
        key={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
      />
    );
  });
};

export default infrastructure;
