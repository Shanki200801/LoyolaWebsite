import React from "react";
import Counsilors from "@/components/grievances/Counsilors";
import AntiRagging from "@/components/grievances/AntiRagging";
const grievences = () => {
  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgFive.webp')] bg-right bg-fixed`}
    >
      <div className={`bg-fuchsia-100/90`}>
        <Counsilors />
        <AntiRagging />
      </div>
    </div>
  );
};

export default grievences;
