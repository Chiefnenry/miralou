import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Container, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <>
      <div className="md:mx-auto md:max-w-5xl">
        <Navbar />
        <div className="flex flex-col-reverse my-6 mx-3 md:flex-row md:justify-between">
          <div>
            <Image
              src="/images/faq-img.avif"
              alt="faq-img"
              width={300}
              height={500}
              className="pt-6 w-80 h-96 md:w-72 md:h-full flex-1"
            />
          </div>

          <Container className="md:mt-10 md:w-4/5 md:h-96 bg-gray-50">
            <Typography variant="h4" className="font-serif font-extrabold ">
              F.A.Q
            </Typography>
            <div className="mt-6 md:mt-4">
              <p className="font-bold font-Roboto_Slab text-gray-800 text-xl pb-4 md:text-xl">
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p className="pb-6 text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                dolor nam voluptatibus. Temporibus sunt harum dolorum
                voluptates, autem provident aspernatur modi odit corrupti
                reiciendis perferendis quos voluptatibus ipsum sequi labore?
              </p>
              <hr></hr>
              <div className="mt-3">
                <div className="flex justify-between">
                  <p className="font-bold font-Roboto_Slab text-gray-800 text-2xl pb-3 md:text-xl">
                    Amet consectetur adipisicing elit reiciendis
                  </p>
                  <p className="text-xl">+</p>
                </div>
                <hr></hr>
                <div className="flex justify-between">
                  <p className="font-bold font-Roboto_Slab text-gray-800 text-2xl pb-3 pt-3 md:text-xl">
                    Amet consectetur adipisicing elit
                  </p>
                  <p className="text-xl">+</p>
                </div>
                <hr></hr>
                <div className="flex justify-between">
                  <p className="font-bold font-Roboto_Slab text-gray-800 text-2xl pb-3 pt-3 md:text-xl">
                    Amet consectetur adipisicing
                  </p>
                  <p className="text-xl">+</p>
                </div>
                <hr></hr>
              </div>
            </div>
          </Container>
        </div>
        <div className="mx-3 my-32">
          <Box className="relative w-full h-80 flex flex-row">
            <Box className="relative w-1/4 h-full">
              <Image
                src="/images/faq-2.jpeg"
                alt="faq-sec-img"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </Box>
            <Box className="relative w-3/4 bg-green-700 z-10 flex flex-col justify-center px-2 md:pl-20">
              <Typography
                variant="h4"
                className="font-serif font-bold text-white text-3xl"
              >
                Subscribe
              </Typography>
              <p className="text-gray-300 py-3">
                Lorem ipsum dolor sit amet consectetur <br></br> adipisicing
                elit beatae molestiae
              </p>
              <div>
                <Button
                  variant="outlined"
                  className="border-gray-300 capitalize text-gray-300 w-full mb-2 md:w-1/3 md:mr-3 md:mb-0"
                >
                  Your Email
                </Button>
                <Button
                  variant="contained"
                  className="bg-yellow-400 capitalize text-black font-bold w-full md:w-1/3"
                >
                  By Now!
                </Button>
              </div>
            </Box>
          </Box>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Faq;
