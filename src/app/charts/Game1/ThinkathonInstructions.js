import React from "react";
import { Box, Typography, Grid, Divider, Container } from "@mui/material";
import { FaStar, FaPaperPlane } from "react-icons/fa"; // Importing icons from FontAwesome

const ThinkathonInstructions = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        textAlign: "center",
        marginBottom: "1em",
        boxShadow: '0px 2px 6px #6babf240',
      }}
    >
      {/* Title */}
      <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
      The Focaldata Thinkathon on Economic Strategy
      </Typography>

  <Typography
        variant="body1"
        component="p"
        sx={{
          marginBottom: "30px",
          textAlign: "center",
          color: "#333",
          maxWidth: "650px",
          margin: "0 auto",
          fontSize: "1.2rem",
        }}
      >
       Imagine you’re part of Labour’s strategic team, tasked with interpreting what the public views as the most important aspects of economic growth. Your mission is to prioritise the key themes based on how respondents ranked their significance. Imagine you’re at the heart of the decision-making process—what did the public see as the top priorities?

        <br />
        <br />
        Once you’ve submitted your ranking, you can compare your strategy with expert analysis and the views of your peers.      </Typography>

      {/* Task Grid */}
      <Typography
        variant="h4"
        component="h3"
        sx={{ fontWeight: "bold", marginBottom: "40px", marginTop: "1em", color: "#333" }}
      >
        Your Task
      </Typography>

      <Grid container spacing={2} sx={{ alignItems: "center", position: "relative" }}>
        {/* Vertical Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            backgroundColor: "#6babf2",
            width: "2px",
          }}
        />

        {/* Task 1 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaStar size={50} color="#6babf2" style={{ marginBottom: "20px" }} />
            <Typography variant="h6" sx={{  color: "#333" }}>
              Rank the Categories
            </Typography>
            <Typography variant="body1" sx={{ color: "#333" }}>
            Drag and drop each theme to rank them based on what you believe respondents prioritised as the most important aspects of economic growth.
                        </Typography>
          </Box>
        </Grid>

        {/* Task 2 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: "20px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FaPaperPlane size={50} color="#6babf2" style={{ marginBottom: "20px" }} />
            <Typography variant="h6" sx={{  color: "#333" }}>
              Submit your Ranking
            </Typography>
            <Typography variant="body1" sx={{ color: "#333" }}>
              Once you’ve completed your ranking, click ‘Submit’ to finalise your strategy and compare it with expert analysis.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThinkathonInstructions;