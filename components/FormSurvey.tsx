"use client";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Datepicker from "react-tailwindcss-datepicker";
function FormSurvey() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center">
        Community Water Test
      </h1>
      <p className="p-12 text-center">
        Durante la proxima semana se estara realizando un examen gratuito del
        agua a residentes de su comunidad.
        <br /> Le agradecemos siga las instrucciones y complete esta corta
        encuesta.
      </p>
      <form>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="name" className="text-xl py-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name."
              className="p-2 text-black font-bold"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="address" className="text-xl py-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address."
              className="p-2 text-black font-bold"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="name" className="text-xl py-2">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              className="p-2 text-black font-bold"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="phone" className="text-xl py-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone."
              className="p-2 text-black font-bold"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="flex w-1/2 font-bold">Sample Date:</h1>
          <Datepicker
            asSingle={true}
            primaryColor={"blue"}
            // @ts-ignore
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
            containerClassName={"w-1/2"}
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="w-1/2 font-bold ">
            How would you rate your drinking water
          </h1>
          <HoverRating />
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="w-1/2 font-bold ">Have you ever experience:</h1>
          <div className="w-1/2 flex justify-between items-center">
            <label>Chlorine Smell</label>
            <input type="checkbox" />
            <label>Bad Taste</label>
            <input type="checkbox" />
            <label>Irregular Color</label>
            <input type="checkbox" />
            <label>Rust Stains</label>
            <input type="checkbox" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="w-1/2 font-bold ">Do you buy bottled water ?</h1>
          <div className="w-1/2 flex justify-between items-center">
            <label>Yes</label>
            <input type="radio" name="water" class="slectOne" />
            <label>No</label>
            <input type="radio" name="water" class="slectOne" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="w-1/2 font-bold ">
            Do you use any water filter device ?
          </h1>
          <div className="w-1/2 flex justify-between items-center">
            <label>Yes</label>
            <input type="radio" name="water" class="slectOne" />
            <label>No</label>
            <input type="radio" name="water" class="slectOne" />
            <input
              className="p-2 text-black font-bold"
              type="text"
              placeholder="If yes , What Kind"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <h1 className="w-1/2 font-bold ">
            Are you currently the home owner ?
          </h1>
          <div className="w-1/2 flex justify-between items-center">
            <label>Yes</label>
            <input type="radio" name="water" class="slectOne" />
            <label>No</label>
            <input type="radio" name="water" class="slectOne" />
          </div>
        </div>
      </form>
    </>
  );
}

export default FormSurvey;

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

export function HoverRating() {
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
