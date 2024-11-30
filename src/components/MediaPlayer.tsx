import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material";
// Card, CardContent, CardMedia, Typography
interface IMediaPlayerProps {
  mediaURL: string;
}
const MediaPlayer: React.FC<IMediaPlayerProps> = (props: IMediaPlayerProps) => {
  const { mediaURL } = props;
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Create an intersection observer callback function
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Check if the video is in the viewport
        if (entry.isIntersecting) {
          // Play the video when it's in view
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          // Pause the video when it's out of view
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    };

    // Create an IntersectionObserver instance with the callback
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Observe intersections with the viewport
      threshold: 0.4, // 50% of the video should be in view to trigger
    });

    // Observe the video element
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef?.current);
      }
    };
  }, []); // Empty array means this effect runs onc

  return (
    <Box
      sx={{
        height: {
          xs: "40vh",
          sm: "40vh",
          md: "calc(100vh - 56px)",
        },
        borderRadius: 0,
        width: "100%",
        margin: "0 auto", // Center the Box horizontally
      }}
      style={{ textAlign: "center", position: "relative" }}
    >
      {/* Video player */}
      {/* <Card sx={{ width: "100%", height: "100%", borderRadius: 0 }}>
        <CardMedia
          ref={videoRef}
          component="video"
          muted
          loop
          autoPlay
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            mb: theme.spacing(1),
            borderRadius: 0,
          }}
          image={mediaURL}
        >
        </CardMedia>
        <CardContent>
          <Typography component="p">
            Travel with confidence and confort
          </Typography>
        </CardContent>
      </Card> */}
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        muted
        loop
        autoPlay
        style={{
          marginBottom: theme.spacing(1),
          objectFit: "fill",
          borderRadius: 0,
        }}
      >
        <source src={mediaURL} type="video/mp4" />
      </video>
    </Box>
  );
};

export default MediaPlayer;
