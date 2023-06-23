import React from "react";
import Counsilors from "@/components/grievances/Counsilors";
import AntiRagging from "@/components/grievances/AntiRagging";
const grievences = () => {
  return (
    <div className="bg-gradient-to-tr from-slate-300 to-amber-50 pb-6 ">
      <Counsilors />
      <AntiRagging />
    </div>
  );
};

export default grievences;
