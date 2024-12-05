import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import { useTheme } from "@mui/material";
import DiscountOffer from "./DiscountOffer";
import { DEFAULT_WHATSAPP_MSG } from "../utils/helper";
import WelcomeHeader from "./WelcomeHeader";
// import LazyLoad from "react-lazyload";

interface IMediaPlayerProps {
  mediaURL: string;
}
const MediaPlayer: React.FC<IMediaPlayerProps> = (props: IMediaPlayerProps) => {
  const { mediaURL } = props;
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  // State to manage video loading and play readiness
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Video is in view, trigger play
          setIsInView(true);
        } else {
          // Video is out of view, pause or stop it (optional)
          setIsInView(false);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is in the viewport
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef?.current);
      }
    };
  }, []); // Empty array means this effect runs onc

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play(); // Start video when it's in view
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause(); // Optionally pause the video when out of view
    }
  }, [isInView]);

  // Handle when the video metadata is loaded (onLoadedData)
  const handleLoadedData = () => {
    // console.log("Video metadata loaded.");
  };

  // Handle when the video is ready to play (onCanPlay)
  const handleCanPlay = () => {
    setIsVideoReady(true);
    setIsVideoLoading(false);
    // console.log("Video is ready to play.");
  };
  return (
    <Box
      sx={{
        height: {
          xs: "60vh",
          sm: "70vh",
          md: "calc(100vh - 56px)",
        },
        borderRadius: 0,
        width: "100%",
        margin: "0 auto", // Center the Box horizontally
        position: "relative",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* <LazyLoad
        style={{
          height: "100%",
          position: "relative",
          backgroundColor: "#fff",
        }}
        height="100%"
        offset={100}
        placeholder={<CircularProgress />}
      > */}
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        muted
        loop
        autoPlay
        poster="/sk-tours-travels/assets/images/video_placeholder.png"
        playsInline
        style={{
          marginBottom: theme.spacing(1),
          objectFit: "cover",
          borderRadius: 0,
          backgroundColor: "#fff",
        }}
        onLoadedData={handleLoadedData} // Trigger when metadata is loaded
        onCanPlay={handleCanPlay} // Trigger when video is ready to play
      >
        <source src={mediaURL} type="video/mp4" />
      </video>
      {/* </LazyLoad> */}

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: "0%",
          left: "0",
          display: "flex",
          zIndex: 1,
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          backgroundColor:
            !isVideoLoading && isVideoReady
              ? "rgba(0, 0, 0, 0.4)"
              : "transparent", // Dark transparent background
        }}
      ></Box>
      {isInView ? (
        <>
          <WelcomeHeader />
          <DiscountOffer
            phoneNumber="+7620318531"
            message={DEFAULT_WHATSAPP_MSG}
          />
        </>
      ) : null}
    </Box>
  );
};

export default MediaPlayer;
