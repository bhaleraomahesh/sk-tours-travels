import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { DEFAULT_WHATSAPP_MSG, ICallProps } from "../utils/helper";

const FloatingWhatsAppButton = (props: ICallProps) => {
  const { phoneNumber, message } = props;

  const handleWhatsAppClick = () => {
    // Encode the message so it can be used in the URL
    const encodedMessage = encodeURIComponent(message || DEFAULT_WHATSAPP_MSG);
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Fab
      color="primary"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 25,
        zIndex: 9999,
        bgcolor: "green",
      }}
      onClick={handleWhatsAppClick}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default FloatingWhatsAppButton;
