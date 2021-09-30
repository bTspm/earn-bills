import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import * as React from "react";
import { FunctionComponent } from "react";

import { abbreviatedCurrency, abbreviatedNumber, formattedNumber } from "../utils/numbers";
import { calculateNumberOfYears } from "./CalculatedYears";

interface PerHourChipsProps {
  netWorth: number;
}

const PER_HOUR_VALUES = [7.25, 100, 500, 1_000, 5_000, 10_000];

const PerHourTable: FunctionComponent<PerHourChipsProps> = ({ netWorth }): JSX.Element => {
  const createTableRow = (perHour: number, netWorth: number) => {
    const value = calculateNumberOfYears(perHour, netWorth);
    return {
      name: abbreviatedCurrency(perHour),
      value: `${formattedNumber(value)} (${abbreviatedNumber(value)})`
    };
  };

  const rows = PER_HOUR_VALUES.map((perHour: number) => createTableRow(perHour, netWorth));

  return (
    <Table aria-label="simple table" size="small">
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography fontWeight="bold">Per Hour</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography fontWeight="bold">Years to Earn</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PerHourTable;
