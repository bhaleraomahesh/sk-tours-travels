import { List } from "@mui/material";
import { IPackageCard } from "./PackageCard";
import CarListItem from "./CarListItem";
import { DEFAULT_WHATSAPP_MSG, ICar } from "../utils/helper";

interface iModalClose {
  handleCloseModal: () => void;
}

const CarList = (props: IPackageCard & iModalClose) => {
  const {
    package: { name, cars },
    phoneNumber,
    handleCloseModal,
  } = props;
  const handleBookCar = (car: ICar) => {
    const message = `Name: ?\nPackage: ${name}\ncar: ${car.name}\nDate: ?\nTime: ?\nNumber of Passengers: ?\nPickup: ?`;

    // Encode the message so it can be used in the URL
    const encodedMessage = encodeURIComponent(message || DEFAULT_WHATSAPP_MSG);
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");
    handleCloseModal();
  };

  return (
    <List>
      {cars.map((car, index) => (
        <CarListItem car={car} key={index} handleBookCar={handleBookCar} />
      ))}
    </List>
  );
};

export default CarList;
