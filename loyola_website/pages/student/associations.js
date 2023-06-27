import * as React from "react";
import Image from "next/image";
import { Lobster_Two, Oswald, Inter } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const Block = ({ imageSrc, altText, header, para }) => {
  return (
    <>
      <li className={`grid grid-cols-10 gap-0 items-center`}>
        <Image
          src={imageSrc}
          alt={altText}
          width="120"
          height="120"
          className="col-span-1"
        />
        <div className={`flex flex-col gap-2 px-3 py-2 col-start-2 col-end-11`}>
          <h2
            className={`text-xl ${oswald.className} underline underline-offset-4 decoration-sky-500`}
          >
            {header}
          </h2>
          <p className={`text-m ${inter.className} tracking-tight`}>{para}</p>
        </div>
      </li>
    </>
  );
};

export default function Associations() {
  return (
    <div
      className={`grid grid-rows-15 items-center bg-blue-100 text-black bg-cover bg-[url('~/public/backgrounds/bgFour.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-blue-200/90`}>
        <section id="header">
          <div className={`pt-5 pb-3`}>
            <span className="flex items-center justify-center">
              <h1
                className={`custom-letter-spacing-wider text-6xl text-center ${lobster.className} text-shadow-sm-blue`}
              >
                Associations
              </h1>
            </span>
          </div>
        </section>
        <section id="introduction" className="px-10">
          <div className={`py-3`}>
            <h2
              className={`text-xl pb-2 ${oswald.className} underline underline-offset-4 decoration-sky-500`}
            >
              Why Associations @ Loyola?
            </h2>
            <ul className={`text-m ${inter.className} tracking-tight`}>
              <li className={`pb-2`}>
                Most students go to college to learn. Most know, or at least
                soon discover, that their academic work at college will be
                different than the work that they did in school. They are
                expected to spend more time studying and there is a higher level
                of thinking demanded. But the college years are also about other
                kinds of learning. Often much of this other learning happens
                outside of the classroom.
              </li>
              <li>
                Clubs at College offers students opportunities to pursue old
                interests and to discover the new ones. Unfortunately, too many
                college students pass up some of the opportunities that they
                have in college, because they are too focused on either their
                academic life or their party life. Many worry, that getting
                involved in activities or organizations on campus will distract
                them from their academic pursuits rather than enhancing their
                academics.
              </li>
            </ul>
          </div>
        </section>
        <section id="clubs" className={`px-10`}>
          <ul className={`flex flex-col gap-3 pb-3`}>
            <Block
              imageSrc="/associations/commerce.webp"
              altText="1"
              header="Commerce Association"
              para="The Commerce Association is formed to equip budding B Com
                  students with required skill-set to be the best-fit for
                  Corporate. It aims to develop sensible, responsible, seasoned
                  top professionals. This club will create an inducive
                  environment wherein our students will embrace responsibilities
                  to serve the community and the society. Our endeavor is to
                  sensitize future best mangers, towards privileged, challenged
                  class. The intention of the club is to develop relationship
                  between industry and institution in a way that students get
                  industry exposure, and tie ups for placements and projects
                  become easier. This club aims to provide information related
                  to current industry activities, innovations, technological
                  changes sharing success stories of entrepreneurs."
            />
            <Block
              imageSrc="/associations/nss.webp"
              altText="2"
              header="National Service Scheme (NSS)"
              para="The National Service Scheme (NSS) is a Central Sector
                  Scheme of Government of India, Ministry of Youth Affairs &
                  Sports. It provides opportunity to the student youth of India
                  to take part in various government led community service
                  activities & programmes. The sole aim of the NSS is to provide
                  hands on experience to young students in delivering community
                  service. The focus of the club is on the personality
                  development of the students through community service. The
                  activities of this club cover a wide range of areas. NSS
                  provides leadership training programmes as well as service
                  opportunities. It effectively channels the energy and interest
                  of the students into areas of social, cultural and community
                  development part"
            />
            <Block
              imageSrc="/associations/kannada_sanga.webp"
              altText="3"
              header="Kannada Sangha"
              para="The Kannada people or Kannadigas are speakers of Kannada
                  language and trace their ancestry to the state of Karnataka in
                  India and its surrounding regions. Modern Kannada stands among
                  30 of the most widely spoken languages of the world. Kannada
                  Sangha is established to create awareness of Kannada language
                  and culture among the youth with Objectives to create
                  awareness of Kannada language and culture, Make the students
                  aware of the rich culture and literary heritage of Karnataka
                  and make them responsible citizens of the country."
            />
            <Block
              imageSrc="/associations/aicuf.webp"
              altText="4"
              header="All India Catholic University Students Federations (A.I.C.U.F.)"
              para="All India Catholic University Students Federations (A.I.C.U.F.)
                is an organization meant to impart the values of compassion and
                service to the student community in Universities. Our aim is to
                live up to the AICUF motto- “We are born into an unjust society
                and we are determined not to leave it as we have found it”. The
                AICUF unit at St. Loyola Degree College organizes various
                socially relevant and personality development- oriented
                programmes for its members. Through the outreach programmes, by
                which the students get practical exposure to the day-to-day
                living of the underprivileged and they are sensitized about the
                socio-economic realities of our country. Motivated by these
                experiences, many of the students take up the challenging tasks
                of contributing towards the emancipation of women and the uplift
                of the deprived and needy the sections of our society."
            />
            <Block
              imageSrc="/associations/youth_redcross.webp"
              altText="5"
              header="Youth Red Cross"
              para="We are reminded of the famous quote of Late Pandit Jawaharlal
                Nehru the former Prime Minister of India that “The youth of
                today is the driving force of tomorrow”. It is our duty to mould
                the youth to become socially useful citizens of the country.
                Each generation passes on the torch of development to the next.
                Hence it becomes the challenge for the present generation to
                groom the future of tomorrow and that is the 'Youth'. Youth Red
                Cross it is a group movement organized for students in colleges"
            />
          </ul>
        </section>
      </div>
    </div>
  );
}
