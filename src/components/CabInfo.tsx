import { Stack, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import LazyLoad from "react-lazyload";
interface ICabInfo {
  heading: string;
  description: string;
  image: string;
}
const CabInfo: React.FC<ICabInfo> = (props: ICabInfo) => {
  const { image, heading, description } = props;
  const theme = useTheme(); // Access the theme values

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }} // Default to column on small screens (xs), row on larger screens (sm+)
      justifyContent={{ xs: "stretch", sm: "row" }}
      alignItems={{ xs: "center", sm: "stretch" }}
      spacing={theme.spacing(2)}
      sx={{
        width: "100%", // Ensure the Stack takes full width
        mt: theme.spacing(2),
      }}
    >
      <Box
        sx={{
          flex: 1, // Ensures equal width in row layout (50% each)
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          height: 300,
          // padding: 2,
        }}
        // elevation={3}
      >
        <Typography variant="h4" sx={{ mb: theme.spacing(1) }}>
          {heading}
        </Typography>
        <Typography component="p">{description}</Typography>
      </Box>
      <Box
        sx={{
          flex: 1, // Ensures equal width in row layout (50% each)
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: {
            xs: 250,
            sm: 300,
          },
          overflowY: "hidden",
          // padding: 2,
        }}
        // elevation={3}
      >
        <Box
          style={{
            maxHeight: "100%",
            width: "100%",
            height: "100%",
            overflowY: "hidden",
            borderRadius: "8px",
          }}
        >
          <LazyLoad height="100%" once>
            <img
              src={`/sk-tours-travels/assets/images/${image}`}
              alt="Sample"
              loading="lazy"
              style={{
                maxHeight: "100%",
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </LazyLoad>
        </Box>
      </Box>
    </Stack>
  );
};

export default CabInfo;
