import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Lobster_Two, Inter, Oswald } from "next/font/google";

const heading = Lobster_Two({ subsets: ["latin"], weight: "400" });
const bodyText = Inter({ subsets: ["latin"] });
const subheading = Oswald({ subsets: ["latin"] });

const StuCouncil = () => {
  const councilMembers = [
    [
      { role: "President", name: "Mr  Hemanth V", class: "3rd B Com B" },
      {
        role: "Vice-President",
        name: "Ms Sharal Acquinas",
        class: "3rd B Com B",
      },
    ],
    [
      { role: "Secretary", name: "Mr. Nikhil Teja", class: "2nd  B Com C" },
      {
        role: "Joint  Secretary",
        name: "Mr. Vivek Kumar Mourya",
        class: "1st B Com B",
      },
    ],
    [
      { role: "Cultural Secretary", name: "Mr Shan Michael", class: "2nd B A" },
      {
        role: "Sport Secretary",
        name: "Mr Shreekanth R",
        class: "3rd B Com A",
      },
    ],
  ];

  return (
    <div
      className={`bg-[url('~/public/backgrounds/bgTwo.webp')] bg-cover bg-center bg-fixed text-black`}
    >
      <div className={`bg-emerald-100/80 px-6`}>
        <h1
          className={`${heading.className} flex justify-center text-4xl pt-5 lg:text-6xl`}
        >
          Student Council
        </h1>
        <section
          className={`${bodyText.className} text-justify mt-10 lg:px-32 lg:text-center lg:text-xl`}
        >
          Student Councils the world over is student-led civic organizations
          designed to help promote College spirit and leadership among students.
          Students benefit immensely from being involved in student councils -
          they learn leadership skills, they have an opportunity to gain
          experience in public speaking, they learn organizational skills and
          cope with challenges beyond their everyday college life, they learn
          how to resolve conflict amicably and diplomatically.
        </section>
        <h2
          className={` ${subheading.className} flex justify-center text-2xl my-5 lg:text-4xl underline underline-offset-8 lg:py-8`}
        >
          Council Members
        </h2>
        <section className={`${bodyText.className} lg:mx-96 lg:text-xl`}>
          {councilMembers.map((item, index) => {
            return (
              <div className={`grid grid-cols-2 gap-8 h-60 lg:h-48`}>
                <Card className="self-start h-5/6 text-center p-1 grid justify-center items-center bg-gradient-to-r from-green-600 to-green-400">
                  <CardContent>
                    <p className={`py-1`}>{item[0].role}</p>
                    <p className={`py-1`}>{item[0].name}</p>
                    <p className={`py-1`}>{item[0].class}</p>
                  </CardContent>
                </Card>
                <Card className="self-end h-5/6 text-center p-1 grid justify-center items-center bg-gradient-to-l from-sky-600 to-sky-400">
                  <CardContent>
                    <p className={`py-1`}>{item[1].role}</p>
                    <p className={`py-1`}>{item[1].name}</p>
                    <p className={`py-1`}>{item[1].class}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </section>

        <section
          className={` ${bodyText.className} mt-16 p-5 lg:mx-24 lg:px-8  lg:text-xl lg:py-5 bg-gradient-to-r from-green-400 to-blue-500`}
        >
          <div>
            <p>
              Students benefit immensely from being involved in student councils
              - they learn leadership skills, they have an opportunity to gain
              experience in public speaking, they learn organizational skills
              and cope with challenges beyond their everyday college life, they
              learn how to resolve conflict amicably and diplomatically.
            </p>

            <p className="mt-5">
              Most of all they learn how to make a positive impact on the
              college and community environment.
            </p>
          </div>
          <div className="mt-5 lg:mt-8">
            <Accordion>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={`${subheading.className}`}
              >
                Benefits of Student Council
              </AccordionSummary>
              <AccordionDetails>
                <ul className="list-disc p-2 space-y-3 lg:px-8 lg:text-justify">
                  <li>
                    {" "}
                    It gives students a practical, first-hand understanding of
                    how democracy functions by giving them a voice and a chance
                    to contribute to the functioning of the college.
                  </li>
                  <li>
                    A democratically elected student council allows students to
                    practice leadership and decision-making skills as well as
                    working hard for the benefit of their college community.
                  </li>
                  <li>
                    Students have to think about and communicate to the
                    electorate all the qualities that make them ideal candidates
                    for the particular post they are interested in.
                  </li>
                  <li>
                    The entire process right from submitting their candidature,
                    preparing their speech, convincing the students to vote for
                    them, getting elected, and performing their duties as
                    responsible representatives of the student body implicitly
                    helps students understand the true meaning of democracy.
                  </li>
                  <li>
                    They take responsibility for voicing the opinions and ideas
                    of the general student body, as well as informing fellow
                    students about current endeavors within the Student Council.
                  </li>
                  <li>
                    In addition to planning events that contribute to college
                    spirit, the student council is the voice of the student
                    body. They help share student ideas, interests and concerns
                    of the college community.
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div></div>
        </section>
        <div className="flex justify-center">
          <Link href="/student/student-council-report-2022">
            <Button
              variant="contained"
              color="primary"
              className={` ${subheading.className} my-10 text-white bg-gradient-to-t from-purple-700 to-purple-500 lg:text-2xl lg:p-4`}
            >
              Student Council Election Report 2022
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StuCouncil;
