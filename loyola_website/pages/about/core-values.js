import * as React from "react";
import { Inter, Oswald, Satisfy, Lobster_Two } from "next/font/google";

const mainHeading = Lobster_Two({ subsets: ["latin"], weight: "400" });
const valueNames = Satisfy({ subsets: ["latin"], weight: "400" });
const generalHeaders = Oswald({ subsets: ["latin"] });
const generalText = Inter({ subsets: ["latin"] });

const ValueBox = ({ valueName, valueHeading, valuePara, boxStyles }) => {
  return (
    <div>
      <li
        className={`lg:grid lg:grid-cols-10 lg:gap-0 flex flex-col items-center justify-center pl-5`}
      >
        <h2
          className={`text-shadow-black shadow-lg custom-letter-spacing text-3xl ${valueNames.className} col-span-2 text-center border lg:p-7 px-5 py-3 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm ${boxStyles}`}
        >
          {valueName}
        </h2>
        <div className={`flex flex-col gap-2 px-5 py-2 col-start-3 col-end-11`}>
          <h2
            className={`text-xl ${generalHeaders.className} underline underline-offset-4 decoration-blue-500 decoration-dotted decoration-2`}
          >
            {valueHeading}
          </h2>
          <p className={`text-m ${generalText.className} tracking-tight`}>
            {valuePara}
          </p>
        </div>
      </li>
    </div>
  );
};

const CoreValues = () => {
  return (
    <div
      className={`bg-blue-100 text-black bg-cover bg-[url('~/public/backgrounds/bgFour.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-blue-200/90`}>
        <h1
          className={`custom-letter-spacing-wider py-5 text-6xl text-center ${mainHeading.className} text-shadow-sm-blue`}
        >
          Core Values
        </h1>
        <ul className="flex flex-col gap-10 pb-5">
          <ValueBox
            valueName="Context"
            valueHeading="What needs to be known about learners (their environment, background, community, and potential) to teach them well?"
            valuePara="Cura Personalis — personal care and concern for the individual—is a hallmark of Jesuit education, and requires that teachers 
          become as conversant as possible with the context or life experience of the learner. Since human experience, always the starting point in a Jesuit education, never occurs in a vacuum, educators must know as much as possible about the actual context within which teaching and learning take place. 
          Teachers need to understand the world of the learner, including the ways in which family, friends, peers, 
          and the larger society impact that world and affect the learner for better or worse."
            boxStyles={`border-fuchsia-500 bg-fuchsia-400 shadow-fuchsia-500/50`}
          />
          <ValueBox
            valueName="Experience"
            valueHeading="What is the best way to engage learners as whole persons in the teaching and learning process?"
            valuePara="Teachers must create the conditions whereby learners gather and recollect the material of their own experience 
          in order to distil what they understand already in terms of facts, feelings, values, insights 
          and intuitions they bring to the subject matter at hand. Teachers later guide the learners in assimilating new information 
          and further experience so that their knowledge will grow in completeness and truth."
            boxStyles={`border-emerald-500 bg-teal-300 shadow-emerald-500/50`}
          />
          <ValueBox
            valueName="Reflection"
            valueHeading="What needs to be known about learners (their environment, background, community, and potential) to teach them well?"
            valuePara="Teachers lay the foundations for learning how to learn by engaging students in skills 
          and techniques of reflection. Here memory, understanding, imagination, and feelings are used to grasp the essential meaning 
          and value of what is being studied, to discover its relationship to other facets of human knowledge and activity, 
          and to appreciate its implications in the continuing search for truth."
            boxStyles={`border-blue-500 bg-sky-400 shadow-blue-500/50`}
          />
          <ValueBox
            valueName="Action"
            valueHeading="How do we compel learners to move beyond knowledge to action?"
            valuePara="Teachers provide opportunities that will challenge the imagination and exercise the will 
          of the learners to choose the best possible course of action from what they have learned. 
          What they do as a result under the teacher's direction, while it may not immediately transform the world 
          into a global community of justice, peace and love, should at least be an educational step towards that goal 
          even if it merely leads to new experiences, further reflections and consequent actions within the subject area under consideration."
            boxStyles={`border-purple-500 bg-violet-400 shadow-purple-500/50`}
          />
          <ValueBox
            valueName="Evaluation"
            valueHeading="How do we assess learners' growth in mind, heart, and spirit?"
            valuePara="Daily quizzes, weekly or monthly tests and semester examinations are familiar instruments to assess the degree of 
          mastery of knowledge and skills achieved. Ignatian pedagogy, however, aims at evaluation which includes but goes beyond academic 
          mastery to the learners' well-rounded growth as persons for others. 
          Observant teachers will perceive indications of growth or lack of growth in class discussions and students' generosity 
          in response to common needs much more frequently."
            boxStyles={`border-red-500 bg-red-400 shadow-red-500/50`}
          />
        </ul>
      </div>
    </div>
  );
};

export default CoreValues;
