import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { ITourPackage } from "../utils/helper";
import { useTheme } from "@mui/material";
import { useState } from "react";
import CarList from "./CarList";

export interface IPackageCard {
  package: ITourPackage;
  phoneNumber: string;
}

const PackageCard = (props: IPackageCard) => {
  const theme = useTheme(); // Access the theme values
  const [openModal, setOpenModal] = useState(false);
  const {
    package: { name, image },
    phoneNumber,
  } = props;

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: 400,
        },
        flexShrink: 0,
        borderRadius: 2, // Rounded corners for the card
        boxShadow: 3, // Subtle shadow for depth
      }}
    >
      <CardActionArea onClick={handleOpenModal}>
        {/* Card Image */}
        <CardMedia
          component="img"
          height={300}
          image={`/sk-tours-travels/assets/images/${image}`}
          alt={name}
          sx={{
            objectFit: "cover", // Ensure the image covers the container without stretching
            objectPosition: "top", // Position the top of the image at the top of the container
            borderTopLeftRadius: 2, // Rounded top corners for the image
            borderTopRightRadius: 2, // Rounded top corners for the image
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition for hover effect
            "&:hover": {
              transform: "scale(1.05)", // Slightly increase size on hover for effect
              boxShadow: 6, // Enhance shadow on hover for focus effect
            },
          }}
        />
        {/* Card Content */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center content horizontally
            justifyContent: "center", // Center content vertically
            padding: 3,
            textAlign: "center", // Center the text
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#333", // Dark color for the text for better readability
              marginBottom: 1, // Add space between the name and any following elements
            }}
          >
            {name}
          </Typography>
          {/* "Book Now" Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "8px 16px",
              fontWeight: "bold",
              borderRadius: 1,
              "&:hover": {
                backgroundColor: theme.palette.secondary.main, // Darken button on hover
                color: theme.palette.primary.main,
              },
            }}
          >
            Book Now
          </Button>
        </CardContent>
      </CardActionArea>
      {/* Modal to Show Car Options */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            maxWidth: 500,
            backgroundColor: "white",
            padding: theme.spacing(1),
            borderRadius: 2,
            boxShadow: 3,
            overflowY: "auto",
            maxHeight: "80vh", // Ensure the modal doesn't overflow the screen
          }}
        >
          <Typography
            variant="h3"
            sx={{ mb: theme.spacing(2), textAlign: "center" }}
          >
            Select Your Car
          </Typography>
          <Typography
            variant="h4"
            sx={{ mb: theme.spacing(2), textAlign: "center" }}
          >
            {name.toUpperCase()}
          </Typography>

          {/* Car List */}
          <CarList
            package={props?.package}
            phoneNumber={phoneNumber}
            handleCloseModal={handleCloseModal}
          />

          {/* Close Modal Button */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button variant="outlined" onClick={handleCloseModal}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Card>
  );
};

export default PackageCard;
