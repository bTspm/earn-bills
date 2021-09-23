import { AppBar, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <AppBar position="absolute" elevation={0}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Earn Bills
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
