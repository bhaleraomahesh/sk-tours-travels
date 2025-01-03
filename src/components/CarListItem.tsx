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
import LazyLoad from "react-lazyload";

interface ICarItem {
  car: ICar;
  handleBookCar: (car: ICar) => void;
}
const CarListItem = (props: ICarItem) => {
  const theme = useTheme(); // Access the theme values

  const { car, handleBookCar } = props;
  return (
    <ListItem
      sx={{
        borderBottom: "1px solid #ddd",
        paddingY: theme.spacing(1),
        display: "flex",
        justifyContent: "space-between",

        pl: {
          xs: 0,
          sm: 0,
          md: theme.spacing(2),
        },
        pr: {
          xs: theme.spacing(1),
          sm: theme.spacing(1),
          md: theme.spacing(2),
        },
      }}
    >
      <ListItemAvatar sx={{ pl: 0, pr: 0 }}>
        <Avatar
          variant="square"
          sx={{ width: 100, height: 80, backgroundColor: "transparent" }}
        >
          <LazyLoad height="100%" once>
            <img
              loading="lazy"
              src={`/sk-tours-travels/assets/images/${car.image}`}
              alt={car.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </LazyLoad>
        </Avatar>
      </ListItemAvatar>
      {/* Car Name and Facilities */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          paddingLeft: theme.spacing(1),
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
            padding: "8px 8px",
            fontWeight: "bold",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: theme.palette.secondary.main, // Darken button on hover
              color: theme.palette.primary.main,
            },
          }}
          onClick={() => handleBookCar(car)}
        >
          Book
        </Button>
      </Box>
    </ListItem>
  );
};

export default CarListItem;
