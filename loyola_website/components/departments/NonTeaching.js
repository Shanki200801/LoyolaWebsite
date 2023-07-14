import React from "react";
import StaffCard from "./StaffCard";

const NonTeaching = ({ data }) => {
  return (
    <>
      {/* <div className='text-2xl text-center text-navbar-theme my-2'>NON TEACHING STAFF</div> */}

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-6 place-content-center justify-evenly mt-8 lg:mx-8 mx-4">
        {data.map((data) => {
          return (
            <StaffCard
              key={data.id}
              profileimage={data.profileimage}
              name={data.name}
              designation={data.designation}
              education={data.education}
              description={data.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default NonTeaching;
