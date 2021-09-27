import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import * as React from "react";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <AppBar position="absolute" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Earn Bills
        </Typography>

        <Button color="inherit" href="https://github.com/btspm/earn-bills" rel="noopener noreferrer" target="_blank">
          {<GitHubIcon sx={{ mr: 1 }} />} Source Code
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
