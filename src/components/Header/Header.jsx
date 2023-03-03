import React from "react";
import { AppBar, Toolbar, Link } from "@mui/material";

export function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#0033fd",
        boxShadow: "none",
        borderBottom: `1px solid ${(theme) => theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <Link
          sx={{ flexGrow: 1, fontWeight: 600, cursor: "pointer" }}
          underline="none"
          variant="soft"
          color="white"
          onClick={() => window.location.reload(false)}
        >
          Quiz App
        </Link>
      </Toolbar>
    </AppBar>
  );
}
