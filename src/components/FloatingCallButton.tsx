import { Fab } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { ICallProps } from "../utils/helper";

const FloatingCallButton = (props: ICallProps) => {
  const { phoneNumber } = props;

  return (
    <Fab
      color="primary"
      sx={{
        position: "fixed",
        bottom: 20,
        left: 25,
        zIndex: 9999,
      }}
      onClick={() => (window.location.href = `tel:${phoneNumber}`)}
    >
      <PhoneIcon />
    </Fab>
  );
};

export default FloatingCallButton;
