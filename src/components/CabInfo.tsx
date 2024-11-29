import { Stack, Paper, Box } from "@mui/material";
import { useTheme } from "@mui/material";
interface ICabInfo {
  imageURL: string;
  description: string;
}
const CabInfo: React.FC<ICabInfo> = (props: ICabInfo) => {
  const { imageURL, description } = props;
  const theme = useTheme(); // Access the theme values

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }} // Default to column on small screens (xs), row on larger screens (sm+)
      justifyContent={{ xs: "stretch", sm: "row" }}
      alignItems={{ xs: "center", sm: "stretch" }}
      spacing={2}
      sx={{
        width: "100%", // Ensure the Stack takes full width
        mt: theme.spacing(2),
      }}
    >
      <Paper
        sx={{
          flex: 1, // Ensures equal width in row layout (50% each)
          padding: 2,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        {description}
      </Paper>
      <Paper
        sx={{
          flex: 1, // Ensures equal width in row layout (50% each)
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={3}
      >
        <Box>
          <img
            src={imageURL}
            alt="Sample"
            style={{
              maxHeight: "100%",
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Paper>
    </Stack>
  );
};

export default CabInfo;
