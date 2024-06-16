"use client";

import { TextField, Typography, Button, styled } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const FormControl = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  backgroundColor: "#fff",
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <div className="md:mx-auto md:max-w-5xl">
        <div className="mx-5 my-10 flex flex-col md:flex-row md:space-x-20">
          <div className="flex-1">
            <Typography
              variant="h4"
              className="font-extrabold font-Roboto_Slab pb-5"
            >
              Get In Touch
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <FormControl>
                <TextField
                  label="Your E-mail"
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
                <TextField
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={5}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="bg-yellow-400 capitalize text-xl text-black font-bold py-5 md:w-56 md:text-sm"
                >
                  Send
                </Button>
              </FormControl>
            </form>
          </div>

          <div className="mt-7 md:mt-0 md:ml-5 flex-1">
            <Typography
              variant="h4"
              className="font-extrabold font-Roboto_Slab"
            >
              More Information
            </Typography>
            <p className="py-3 text-gray-400 md:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              ratione optio ea eligendi hic, facere maxime, quaerat, harum nulla
              necessitatibus voluptatibus. Vitae, tempora. Rerum reiciendis
              ratione ipsum possimus repellendus quidem! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Minima sapiente est maxime,
              nemo animi magnam quae atque omnis id! Nihil accusamus soluta
              exercitationem nisi similique suscipit voluptas doloremque quod
              possimus?
            </p>
            <div className="flex flex-col gap-3 text-gray-400 md:mt-7">
              <div className="space-x-3">
                <LocationOnOutlinedIcon />
                <span className="text-sm">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </span>
              </div>
              <div className="space-x-3">
                <LocalPhoneIcon />
                <span className="text-sm">(808) 555-0111</span>
              </div>
              <div className="space-x-3">
                <MailOutlineIcon />
                <span>willie.jennings@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126849.04381978732!2d3.3685503999999997!3d6.5175552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1718112475249!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full md:h-96 my-7"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
