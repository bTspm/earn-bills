import { Divider } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Footer(): JSX.Element {
  return (
    <>
      <Divider sx={{ mt: 25, mb: 1 }} />
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/bTspm">
          bTspm
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Credits to{" "}
        {
          <Link
            color="inherit"
            href="https://github.com/jesseokeya/Forbes400"
            rel="noopener noreferrer"
            target="_blank"
          >
            jesseokeya
          </Link>
        }{" "}
        for Data Source
      </Typography>

      <div className="powr-hit-counter" id="da74fe77_1633465499" />
      <script src="https://www.powr.io/powr.js?platform=react" />
    </>
  );
}
