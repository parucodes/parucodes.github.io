import React from "react";
import { Box, IconButton } from "@mui/material";
import { Facebook, WhatsApp, Instagram } from "@mui/icons-material";

const SocialShare = () => {
  const shareMessage = encodeURIComponent("Please try touch typing tutor to improve your typing speed here - https://parucodes.github.io/touch-typing-tutor.github.io/");

  return (
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
      <IconButton
        color="primary"
        component="a"
        href={`https://www.facebook.com/sharer/sharer.php?u=https://parucodes.github.io/touch-typing-tutor.github.io/&quote=${shareMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </IconButton>
      <IconButton
        color="primary"
        component="a"
        href={`https://api.whatsapp.com/send?text=${shareMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp />
      </IconButton>
      <IconButton
        color="primary"
        component="a"
        href={`https://www.instagram.com/?url=https://parucodes.github.io/touch-typing-tutor.github.io/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </IconButton>
    </Box>
  );
};

export default SocialShare;
