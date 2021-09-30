import { Card, Divider, Grid, Table, TableBody, TableCell, TableRow } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { FunctionComponent } from "react";
import * as React from "react";

import { BillDatum } from "../contexts/BillDataContext";
import { abbreviatedCurrency } from "../utils/numbers";

interface BillDetailsProps {
  billionaire: BillDatum;
}

const BillDetails: FunctionComponent<BillDetailsProps> = ({ billionaire }): JSX.Element => {
  return (
    <Card>
      <Grid container sx={{ p: 2 }} spacing={2}>
        <Grid item md={5} sm={12}>
          <CardMedia component="img" image={billionaire.squareImage} alt="Paella dish" />
        </Grid>

        <Grid item md={7} sm={12}>
          <Table aria-label="simple table" size="small" sx={{ width: "100%" }}>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">{billionaire.personName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell align="right">{billionaire.rank}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Age</TableCell>
                <TableCell align="right">
                  {moment().diff(billionaire.birthDate, "years", false)} (
                  {moment(new Date(billionaire.birthDate)).format("MMMM Do, YYYY")})
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Net Worth</TableCell>
                <TableCell align="right">{abbreviatedCurrency(billionaire.finalWorth)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Source</TableCell>
                <TableCell align="right">{billionaire.source}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Industries</TableCell>
                <TableCell align="right">{billionaire.industries.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell align="right">
                  {billionaire.city}, {billionaire.countryOfCitizenship}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>

      <CardContent>
        <Divider sx={{ mt: 1, mb: 1 }}>
          <Typography variant="overline">Bio</Typography>
        </Divider>
        <Typography variant="body2">{billionaire.bios.join(" ")}</Typography>
        {billionaire.abouts?.length > 0 && (
          <>
            <Divider sx={{ mt: 1, mb: 1 }}>
              <Typography variant="overline">About</Typography>
            </Divider>
            <Typography variant="body2">{billionaire.abouts?.join(" ")}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default BillDetails;
