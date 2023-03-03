import { Typography, Box } from "@mui/material";

export function Welcome() {
  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "1rem", textAlign: "center" }}
      >
        Welcome to the Quiz App!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Are you prepared to take a test of knowledge?
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        You may select the questions that are right for you from a variety of
        topics and levels of difficulty in our quiz app.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        All ages and ability levels may enjoy it, whether they want to challenge
        themselves or just have fun.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Stop waiting right now! Choose a quiz, make yourself a cup of coffee,
        and let's begin!
      </Typography>
    </Box>
  );
}
