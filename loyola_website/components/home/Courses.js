import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";

//Images
import redBgImg from "../../Assets/coursesBgImage.webp";
import artsAndHumanities from "../../Assets/artsAndHumanities.webp";
import certificateCourses from "../../Assets/certificateCourses.webp";
import commerce from "../../Assets/commerce.webp";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const Courses = () => {
  return (
    <div
      className="grid place-items-center pb-4"
      style={{ backgroundImage: `url(${redBgImg.src})` }}
    >
      <Container className="grid place-items-center" maxWidth="xl">
        <TextComponent />
        <IconComponent />
        <DeptBtnComponent />
      </Container>
    </div>
  );
};

const TextComponent = () => {
  return (
    <div className={`${greatVibes.className}`}>
      <h1 className="font-bold py-8 text-center drop-shadow-xl  text-white">
        <span className="text-5xl text-center">
          Our curriculum offers a brilliant set of degree programs in{" "}
        </span>
      </h1>
      <p className=" font-mono text-center text-4xl text-white tracking-widest border-b-2 py-8 drop-shadow-xl">
        ARTS AND COMMERCE
      </p>
    </div>
  );
};

const IconComponent = () => {
  return (
    <div
      // style={{ marginTop: "10vh", marginBottom: "10vh" }}
      className="my-8 lg:my-12"
    >
      <Stack
        direction={{ lg: "row", sm: "column" }}
        spacing={{ lg: 10, sm: 15 }}
      >
        <Link href="/academics/ba">
          <div className="grid place-items-center mb-2 transition duration-300 ease-in hover:ease-in hover:scale-110">
            <div
              className="text-purple-100 font-semibold iconTxt text-3xl"
              style={{
                position: "absolute",
                zIndex: 1,
                maxWidth: 200,
                textAlign: "center",
                textShadow: "2px 0 5px #000",
              }}
            >
              Arts & Humanities
            </div>
            <Avatar
              className="opacity-95 "
              alt="Arts & Humanities"
              src={artsAndHumanities.src}
              sx={{ width: 200, height: 200 }}
            />
          </div>
        </Link>

        <Link href="/academics/bcom">
          <div className="grid place-items-center mb-2 transition duration-300 ease-in hover:ease-in hover:scale-110">
            <div
              className="text-white font-semibold iconTxt text-3xl"
              style={{
                position: "absolute",
                zIndex: 1,
                maxWidth: 200,
                textAlign: "center",
                textShadow: "2px 0 5px #000",
              }}
            >
              Commerce
            </div>
            <Avatar
              className=" opacity-95"
              alt="Arts & Humanities"
              src={commerce.src}
              sx={{ width: 200, height: 200 }}
            />
          </div>
        </Link>

        <Link href="/academics/certificate-courses">
          <div className="grid place-items-center transition mb-2 duration-300 ease-in hover:ease-in hover:scale-110">
            <div
              className="text-white font-semibold iconTxt text-3xl"
              style={{
                position: "absolute",
                zIndex: 1,
                maxWidth: 200,
                textAlign: "center",
                textShadow: "2px 0 5px #000",
              }}
            >
              Certificate Courses
            </div>
            <Avatar
              className=" saturate-200 opacity-90"
              alt="Arts & Humanities"
              src={certificateCourses.src}
              sx={{ width: 200, height: 200 }}
            />
          </div>
        </Link>
      </Stack>
    </div>
  );
};

const DeptBtnComponent = () => {
  return (
    <Button
      className=" font-mono bg-white text-deptBtnColor rounded-sm transition-colors-background-color transition-colors-color hover:bg-deptBtnColor hover:text-white"
      variant="contained"
      color="success"
      style={{
        fontSize: "1.25rem",
        fontWeight: "500",
        borderRadius: "2px",
        padding: "8px 25px 12px",
      }}
    >
      <Link href="/departments">Departments</Link>
    </Button>
  );
};

export default Courses;
