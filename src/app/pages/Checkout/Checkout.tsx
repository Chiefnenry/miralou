"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Container,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Checkbox,
} from "@mui/material";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Checkout_c from "@/components/Checkout_c/Checkout_c";

const Checkout = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    address: "",
    phone: "",
    city: "",
    email: "",
    zipCode: "",
    orderNotes: "",
    agreeToTerms: false,
  });

  interface createData {
    name: string;
    price: string | React.ReactNode;
  }

  const rows: createData[] = [
    { name: "The Ordinary", price: "$ 4.29" },
    { name: "Anti-Acne Serum", price: "$ 4.99" },
    { name: "Skin Care", price: "$ 5.99" },
    { name: "Subtotal", price: "$ 15.27" },
    { name: "Subtotal", price: "Checkout" },
  ];

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     agreeToTerms: e.target.checked,
  //   }));
  // };

  return (
    <>
      <div className="{isPopup ? 'opacity-50' : 'opacity-100'} md:mx-auto md:max-w-5xl">
        <div className="ml-5 my-10">
          <Typography
            variant="h3"
            className="text-2xl font-extrabold font-Roboto_Slab"
          >
            Billing Details
          </Typography>
          <Container className="mt-5 grid grid-cols-1 md:grid-cols-2 pr-20">
            <Box component="form">
              <TextField
                variant="outlined"
                name="firstName"
                label="First name"
                value={formData.firstName}
                required
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="lastName"
                label="Last name"
                value={formData.lastName}
                required
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="companyName"
                label="Company name (optional)"
                value={formData.companyName}
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="country"
                label="Country"
                value={formData.country}
                required
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="address"
                label="Street Address"
                value={formData.address}
                required
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="phone"
                label="Phone"
                value={formData.phone}
                required
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="city"
                label="City"
                value={formData.city}
                required
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="email"
                label="Email Address"
                value={formData.email}
                required
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="zipCode"
                label="Zip Code"
                value={formData.zipCode}
                required
                className="mb-5"
              />
              <TextField
                variant="outlined"
                name="orderNotes"
                label="Order notes (optional)"
                value={formData.orderNotes}
                required
              />
            </Box>
          </Container>

          <div className="mt-9 mr-5">
            <Typography
              variant="h4"
              className="text-2xl font-extrabold font-Roboto_Slab pb-4"
            >
              Your Order
            </Typography>
            <TableContainer component={Paper} className="mb-7">
              <Table>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell className="font-bold">{row.name}</TableCell>
                      <TableCell className="text-gray-400">
                        {row.price === "Checkout" ? (
                          <FormControl component="fieldset">
                            <RadioGroup
                              name="payment-method"
                              defaultValue="bank-transfer"
                            >
                              <FormControlLabel
                                value="bank-transfer"
                                control={<Radio />}
                                label="Direct Bank Transfer"
                              />
                              <FormControlLabel
                                value="check-payment"
                                control={<Radio />}
                                label="Check Payment"
                              />
                              <FormControlLabel
                                value="cash-on-delivery"
                                control={<Radio />}
                                label="Cash on Delivery"
                              />
                            </RadioGroup>
                          </FormControl>
                        ) : (
                          row.price
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <FormControlLabel
              control={
                <Checkbox
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  // onChange={handleCheckboxChange}
                />
              }
              label={
                <Typography variant="body2" className="text-xs text-gray-400">
                  I have read and agree to the website&nbsp;
                  <span className="text-green-600 font-bold font-Heebo">
                    terms and condition
                  </span>
                </Typography>
              }
            />
            <div>
              <Button
                variant="contained"
                type="submit"
                onClick={handleOpenPopup}
                className="bg-yellow-400 text-black text-xs font-bold capitalize w-52 h-8 mt-3"
              >
                Place Order
              </Button>
              <Checkout_c open={isPopupOpen} onClose={handleClosePopup} />
              {isPopupOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
