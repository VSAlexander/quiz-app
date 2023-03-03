import { Box } from "@mui/material";

import { Header } from "../Header/Header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <main>{children}</main>
      </Box>
    </>
  );
}
