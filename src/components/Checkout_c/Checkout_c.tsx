"use client";

import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface popupProps {
  open: boolean;
  onClose: () => void;
}

const Checkout_c: React.FC<popupProps> = ({ open, onClose }) => {
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          className="w-auto md:max-w-90 md:px-9 md:py-9"
        >
          <DialogTitle className="font-extrabold font-Roboto_Slab md:flex md:justify-center md:items-center md:text-3xl">
            Thank You For Shopping With Us!
          </DialogTitle>
          <DialogContent>
            <p>Your order is accepted. The manager will contact you shortly.</p>
          </DialogContent>
          <DialogActions className="flex justify-center items-center">
            <Button
              onClick={onClose}
              className="bg-yellow-500 text-black capitalize font-bold mb-5"
            >
              Back To Home
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Checkout_c;
