"use client";
import React from "react";
import localFont from "next/font/local";
import Water from "../../images/aqua.png";
import HomeOwner from "../../images/homeowner.jpg";
import Family from "../../images/family.jpg";
import Filters from "../../images/filters.jpg";
import Facts from "../../images/facts.jpg";
import Tap from "../../images/tap-water.jpg";
import Plant from "../../images/plant.jpg";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
const gilroy = localFont({ src: "../../fonts/Gilroy-Light.otf" });
const gilroyBold = localFont({ src: "../../fonts/Gilroy-ExtraBold.otf" });
import { useSearchParams, useRouter } from "next/navigation";
function Survey(props: any) {
  const [step, setStep] = React.useState(0);
  const searchParams = useSearchParams();
  const user = searchParams.get("u");
  const router = useRouter();
  React.useEffect(()=>{
    router.push('/')
  },[])
  const users = {
    ghdtuDk: {
      name: "Andriuth Pena",
      address: "2194 W 1990 S, Woods Cross UT, 84087",
    },
  };
  // @ts-ignore
  const persona = users[user];
  const handleClick = (question: any, answer: any) => {
    console.log(`Answer for ${question} is ${answer}`);
  };
  const recycled = (
    <div className="flex flex-col justify-between w-full items-center">
      <Image
        src={Plant}
        alt="plant"
        width={350}
        className="align-center mb-4"
      />
      <div className="bg-white rounded-3xl p-4 shadow-xl">
        <h1
          className={`text-center text-gray-800 text-2xl font-bold justify-center ${gilroyBold.className}`}
        >
          Did you know your water is recycled?
        </h1>
        <div className="w-full flex items-center justify-around mt-12">
          <button
            className="px-8 py-2 bg-gray-300 text-2xl text-gray-800 rounded-lg"
            onClick={() => handleClick("recycled", "no")}
          >
            no
          </button>
          <button
            className="px-8 py-2 bg-blue-400 text-2xl text-white rounded-lg"
            onClick={() => handleClick("recycled", "yes")}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );
  const buyWater = (
    <div className="flex flex-col justify-between w-full items-center">
      <Image
        src={Water}
        alt="water"
        width={150}
        className="align-center mb-4"
      />
      <div className="bg-white rounded-3xl p-4 shadow-xl">
        <h1
          className={`text-center text-gray-800 text-2xl font-bold justify-center ${gilroyBold.className}`}
        >
          Do you buy bottled water ?
        </h1>
        <div className="w-full flex items-center justify-around mt-12">
          <button
            className="px-8 py-2 bg-gray-300 text-2xl text-gray-800 rounded-lg"
            onClick={() => handleClick("water", "no")}
          >
            no
          </button>
          <button
            className="px-8 py-2 bg-blue-400 text-2xl text-white rounded-lg"
            onClick={() => handleClick("water", "yes")}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );
  const isOwner = (
    <div className="flex flex-col justify-between w-full items-center">
      <Image
        src={HomeOwner}
        alt="water"
        width={400}
        className="align-center mb-4"
      />
      <div className="bg-white rounded-3xl p-4 shadow-xl">
        <h1
          className={`text-center text-gray-800 text-2xl font-bold justify-center ${gilroyBold.className}`}
        >
          Are you the currently home owner ?
        </h1>
        <div className="w-full flex items-center justify-around mt-12">
          <button
            className="px-8 py-2 bg-gray-300 text-2xl text-gray-800 rounded-lg"
            onClick={() => handleClick("owner", "no")}
          >
            no
          </button>
          <button
            className="px-8 py-2 bg-blue-400 text-2xl text-white rounded-lg"
            onClick={() => handleClick("owner", "yes")}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );
  const hasFilter = (
    <div className="flex flex-col justify-between w-full items-center">
      <Image
        src={Filters}
        alt="filters"
        width={400}
        className="align-center mb-4"
      />
      <div className="bg-white rounded-3xl p-4 shadow-xl">
        <h1
          className={`text-center text-gray-800 text-2xl font-bold justify-center ${gilroyBold.className}`}
        >
          Do you use any water filter device ?
        </h1>
        <div className="w-full flex items-center justify-around mt-12">
          <button
            className="px-8 py-2 bg-gray-300 text-2xl text-gray-800 rounded-lg"
            onClick={() => handleClick("filter", "no")}
          >
            no
          </button>
          <button
            className="px-8 py-2 bg-blue-400 text-2xl text-white rounded-lg"
            onClick={() => handleClick("filter", "yes")}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );

  const familyMembers = (
    <div className="flex flex-col justify-between w-full items-center">
      <Image
        src={Family}
        alt="family"
        width={400}
        className="align-center mb-4"
      />
      <div className="bg-white rounded-3xl p-4 shadow-xl">
        <h1
          className={`text-center text-gray-800 text-2xl font-bold justify-center ${gilroyBold.className}`}
        >
          Number of adults and children in house ?
        </h1>
        <div className="w-full flex items-center justify-around mt-12">
          <div className="flex flex-col items-center justify-between w-16">
            <input
              type="number"
              className="w-20 text-center h-20 text-5xl"
              placeholder="0"
              min={0}
            />
            <h1 className="text-blue-400 px-2 py-1 text-white text-2xl font-bold">
              Adults
            </h1>
          </div>
          <div className="flex flex-col items-center justify-between w-16">
            <input
              type="number"
              className="w-20 text-center h-20 text-5xl"
              placeholder="0"
              min={0}
            />
            <h1 className="text-blue-400 px-2 py-1 text-white  text-2xl font-bold">
              Children
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
  const footer = (
    <div
      className={`flex items-center justify-between  px-8 ${gilroy.className}`}
    >
      <button
        className="px-4 py-1 bg-gray-200 text-2xl text-gray-800 first-letter:font-bold rounded-lg"
        onClick={() => setStep(step <= 1 ? 0 : step - 1)}
      >
        Back
      </button>
      <button
        className="px-4 py-1  bg-blue-400 text-2xl text-white first-letter:font-bold rounded-lg"
        onClick={() => setStep(step + 1)}
      >
        Next
      </button>
    </div>
  );

  const title = (
    <h1 className="text-center text-[#456789] text-3xl justify-center">
      {"Community Water Test".toUpperCase()}
    </h1>
  );
  const intro = (
    <>
      <div className="w-full flex flex-col justify-between items-center bg-white rounded-3xl p-8">
        <Image
          src={Facts}
          alt="facts"
          width={200}
          className="align-center mb-4"
        />
        {persona && (
          <p>
            Welcome {persona.name} living at {persona.address}
          </p>
        )}
        <p className="w-full text-center">
          For the next weeks , we will be conducting a complementary water test
          for residents in your area. Please assist us by complementing this
          short survey and then following the instructions below.
        </p>
      </div>
      <ul className="list-inside">
        <li>This survey wont take more to 2 minutes to be completed</li>
      </ul>
    </>
  );

  const rating = (
    <div className="flex flex-col items-center justify-between">
      <Image
        src={Tap}
        alt="tap"
        width={400}
        className="align-center mb-4 rounded-lg"
      />
      <div className="flex flex-col items-center justify-between mt-4 px-4 py-8 bg-white rounded-2xl">
        <h1 className="w-full font-bold text-2xl text-center mb-8">
          How would you rate your drinking water
        </h1>
        <HoverRating />
      </div>
    </div>
  );

  const Information = () => {
    return (
      <form className="flex flex-col w-full items center justify-between ">
        <input placeholder="Name" className="p-3 text-lg" required />
        <input placeholder="Address" className="p-3 text-lg" required />
        <input placeholder="City" className="p-3 text-lg" required />
        <input placeholder="State" className="p-3 text-lg" required />
        <input placeholder="Zip" className="p-3 text-lg" required />
      </form>
    );
  };
  return (
    <div
      className={`h-screen w-screen flex flex-col justify-between bg-blue-200 ${gilroyBold.className} p-4`}
    >
      {title}
      {step === 0 && intro}
      {step === 1 && rating}
      {step === 2 && recycled}
      {step === 3 && buyWater}
      {step === 4 && hasFilter}
      {step === 5 && isOwner}
      {step === 6 && familyMembers}
      {step === 7 && <Information />}
      {footer}
    </div>
  );
}

export default Survey;

const labels: { [index: string]: string } = {
  0: "Terrible",
  0.5: "Terrible",
  1: "Useless",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function HoverRating() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        size="large"
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.7 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
