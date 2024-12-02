import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { ICar } from "../utils/helper";

interface ICarItem {
  car: ICar;
  handleBookCar: (car: ICar) => void;
}
const CarListItem = (props: ICarItem) => {
  const theme = useTheme(); // Access the theme values

  const { car, handleBookCar } = props;
  return (
    <ListItem sx={{ borderBottom: "1px solid #ddd", paddingY: 2 }}>
      <ListItemAvatar>
        <Avatar variant="square" sx={{ width: 120, height: 80 }}>
          <img
            src={`/sk-tours-travels/assets/images/${car.image}`}
            alt={car.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Avatar>
      </ListItemAvatar>
      {/* Car Name and Facilities */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          paddingLeft: 2,
        }}
      >
        <ListItemText
          primary={car.name}
          secondary={car.type}
          sx={{ textAlign: "left" }}
        />
      </Box>

      {/* Book Now Button */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          onClick={() => handleBookCar(car)}
        >
          Book Now
        </Button>
      </Box>
    </ListItem>
  );
};

export default CarListItem;
