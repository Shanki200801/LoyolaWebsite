import * as React from "react";
import { Inter, Oswald, Satisfy, Lobster_Two } from "next/font/google";

const mainHeading = Lobster_Two({ subsets: ["latin"], weight: "400" });
const valueNames = Satisfy({ subsets: ["latin"], weight: "400" });
const generalHeaders = Oswald({ subsets: ["latin"] });
const generalText = Inter({ subsets: ["latin"] });

const Crest = () => {
  return (
    <div className={`py-3 px-12`}>
      <h2
        className={`uppercase text-xl pb-2 ${generalHeaders.className} underline underline-offset-4 decoration-blue-400 decoration-dotted decoration-2`}
      >
        College <span className={`text-cyan-800 whitespace-pre`}>Crest</span>
      </h2>
      <ul
        className={`flex flex-col gap-2 justify-center text-m ${generalText.className} tracking-tight`}
      >
        <li>
          The college crest has a rising sun that radiatethe letters "IHS" that
          is inscribed in the centre. This is the abbreviation of the name of
          Jesus {`(`}which in Greek is written as IHUS{`)`}. The name symbolizes
          deepest faith in God, commitment to humanity and the readiness to
          sacrifice one's life for others. This is also the logo of the Jesuits.
        </li>
        <li>
          On the right side is the rock which is a bed for two trees. The rock
          signifies the necessity of a strong philosophical foundation on which
          there are two trees which signify growth and development. It also
          signifies ecological concerns.
        </li>
        <li>
          The bottom of the crest has the picture of the fort that belonged to
          the family of Ignatius of Loyola. It reminds us of the inner
          transformation St. Ignatius experienced in his life, after which he
          renounced his ambitions of knightly glory and dedicated himself to
          love and serve humanity and establish His kingdom of justice.
        </li>
      </ul>
    </div>
  );
};

const Anthem = () => {
  return (
    <div className={`py-3 px-12`}>
      <h2
        className={`uppercase text-xl pb-2 ${generalHeaders.className} underline underline-offset-4 decoration-blue-400 decoration-dotted decoration-2`}
      >
        College <span className={`text-cyan-800 whitespace-pre`}>Anthem</span>
      </h2>
      <p className={`text-l ${generalText.className} whitespace-pre`}>
        {`March forth to a blissful life, 
Onward we go with inspiration.
A serene heart to light up knowledge, 
O Creator in mercy we pray. 
Rooted in God's love 
Let our heart's overflow: 
Proclaim equality embrace unity 
In our hearts let it shine 
Create a world of virtues, 
Spread faith in Truth and Justice. 
Service we do in love forever, 
Shower thy blessings 
Oh! Ignatius of Loyola`}
      </p>
    </div>
  );
};

const AnthemCredits = () => {
  return (
    <div className={`py-3 px-12`}>
      <h2
        className={`uppercase text-xl pb-2 ${generalHeaders.className} underline underline-offset-4 decoration-blue-400 decoration-dotted decoration-2`}
      >
        Anthem <span className={`text-cyan-800 whitespace-pre`}>Credits</span>
      </h2>
      <p
        className={`${generalText.className} md:whitespace-pre`}
      >{`Translated in 2019 from the original Kannada version by:
Dr Vincent A (Vice Principal), Ms Radhika Paraveen Castelino, Ms Sushmitha G.
Music Composed in 2019 by Dr Vincent A (Vice Principal)`}</p>
    </div>
  );
};

const CrestAnthem = () => {
  return (
    <div
      className={`bg-blue-100 text-black bg-cover bg-[url('~/public/backgrounds/bgFive.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-blue-200/90`}>
        <h1
          className={`custom-letter-spacing-wider py-5 text-5xl text-center ${mainHeading.className} text-shadow-sm-blue sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl xl:pb-0`}
        >
          College Crest & College Anthem
        </h1>
        <Crest />
        <Anthem />
        <AnthemCredits />
      </div>
    </div>
  );
};

export default CrestAnthem;
