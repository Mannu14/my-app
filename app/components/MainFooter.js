"use client";
import React from "react";
import { Box, Grid, Typography, TextField, Button, Link, Paper } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function MainFooter() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{ p: 2, margin: "auto", flexGrow: 1, backgroundColor: "background.default" }}
        elevation={0}
      >
        <Box sx={{ mb: 4, backgroundColor: "background.paper", p: 4 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 2, color: "text.primary" }}
          >
            Welcome to My Development Journey!
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center", color: "text.secondary" }}>
            I'm a MERN Stack Developer and Python DSA Enthusiast. Join me as I build scalable solutions and solve complex problems.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", my: 4, py: 4, bgcolor: "background.paper" }}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>About Me</Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                Hi, I'm a passionate developer proficient in MERN stack and DSA using Python. 
                I specialize in creating dynamic and scalable web applications while solving complex algorithmic problems.
              </Typography>
              <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                <FaFacebook style={{ color: "#3b5998" }} />
                <FaTwitter style={{ color: "#1da1f2" }} />
                <FaInstagram style={{ color: "#e4405f" }} />
                <FaLinkedin style={{ color: "#0e76a8" }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>Contact Information</Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                +9101-2345-6789
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                info@Contact-Me-via-SendMessage
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                332712, Sikar, Rajasthan
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>Contact Me</Typography>
              <TextField
                id="email"
                label="Enter your email address"
                variant="outlined"
                size="small"
                sx={{ mt: 1 }}
                fullWidth
                InputLabelProps={{
                  style: { color: "text.primary" },
                }}
                InputProps={{
                  style: { color: "text.primary" },
                }}
              />
              <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mkcoding.manishji.site/contactUs"
                  style={{ color: "#3b5998", textDecoration: "none" }}
                >
                  Send Message
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="body2" sx={{ mt: 4, textAlign: "center", color: "text.secondary" }}>
          © 2025 Manishji. All rights reserved.
          <Link href="#" sx={{ color: "text.link" }}>
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" sx={{ color: "text.link" }}>
            Terms of Service
          </Link>
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}
