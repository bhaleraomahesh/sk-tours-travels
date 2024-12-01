import { useState } from "react";
import { Snackbar, Alert, Button } from "@mui/material";
import { ICallProps } from "../utils/helper";
// import { useTheme } from "@mui/material";

const DiscountOffer = (props: ICallProps) => {
  const { phoneNumber, message } = props;
  //   const theme = useTheme(); // Access the theme values

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleWhatsAppClick = () => {
    // Encode the message so it can be used in the URL
    const encodedMessage = encodeURIComponent(message || "Hi");
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        //   autoHideDuration={6000} // Automatically hide after 6 seconds
        onClose={handleClose}
        sx={{
          // Customize the Snackbar's position or styles
          "& .MuiSnackbarContent-root": {
            display: "flex", // Flexbox to align items
            justifyContent: "center", // Center horizontally (optional)
            alignItems: "center", // Center vertically
            // className: "blinking-snackbar", // Apply blinking class to Snackbar content
          },

          // mb: theme.spacing(10),
        }}
      >
        <Alert
          severity="success"
          sx={{
            backgroundColor: "#f4e042", // Light yellow background for the discount offer
            fontWeight: "bold",
            width: {
              xs: "55vw",
              sm: "65vw",
              md: "70vs",
            },
          }}
          action={
            <Button color="inherit" size="small" onClick={handleWhatsAppClick}>
              Book Now
            </Button>
          }
        >
          Get 10% off on your first booking with SK Tours & Travels!
        </Alert>
      </Snackbar>
    </>
  );
};

export default DiscountOffer;
