import axios from "axios";

import { useState } from "react";

import { Welcome } from "components/Welcome/Welcome";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import {
  CATEGORIES,
  DIFFICULTIES,
  QUESTIONS_TYPE,
  QUESTIONS_QUANTITY,
} from "constants";

export function QuizSetup({ startGame }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const isButtonDisabled =
    category === "" || difficulty === "" || amount === "" || type === "";

  const handleStartGameBtn = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?", {
        params: {
          category,
          difficulty,
          amount,
          type,
        },
      });
      console.log(response.data.results);
      startGame(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Welcome />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
        }}
      >
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            label="Category"
            onChange={(event) => setCategory(event.target.value)}
          >
            {CATEGORIES.map((category) => (
              <MenuItem key={category.key} value={category.value}>
                {category.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            value={difficulty}
            label="Difficulty"
            onChange={(event) => setDifficulty(event.target.value)}
          >
            {DIFFICULTIES.map((difficulty) => (
              <MenuItem key={difficulty.key} value={difficulty.value}>
                {difficulty.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="amount-select-label">Number of Questions</InputLabel>
          <Select
            labelId="amount-select-label"
            id="amount-select"
            value={amount}
            label="Number of Questions"
            onChange={(event) => setAmount(event.target.value)}
          >
            {QUESTIONS_QUANTITY.map((quantity) => (
              <MenuItem key={quantity.key} value={quantity.value}>
                {quantity.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="type-select-label">Type of Questions</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={type}
            label="Type of Questions"
            onChange={(event) => setType(event.target.value)}
          >
            {QUESTIONS_TYPE.map((type) => (
              <MenuItem key={type.key} value={type.value}>
                {type.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleStartGameBtn}
          disabled={isButtonDisabled}
        >
          Start Game
        </Button>
      </Box>
    </>
  );
}
