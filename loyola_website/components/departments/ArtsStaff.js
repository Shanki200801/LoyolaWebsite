import React from "react";
import StaffCard from "./StaffCard";

const ArtsStaff = ({ data }) => {
  return (
    <>
      {/* <div className='text-2xl text-center text-navbar-theme my-2'>ARTS STAFF</div> */}

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-6 place-content-center justify-evenly mt-8 lg:mx-8 mx-4">
        {data.map((staff) => {
          return (
            <StaffCard
              key={staff.id}
              profileimage={staff.profileimage}
              name={staff.name}
              designation={staff.designation}
              education={staff.education}
              description={staff.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default ArtsStaff;
