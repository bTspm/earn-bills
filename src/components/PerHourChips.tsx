import { Chip, Grid } from "@mui/material";
import * as React from "react";
import { FunctionComponent } from "react";

import { abbreviatedCurrency } from "../utils/numbers";

interface PerHourChipsProps {
  setValue: (value: number) => void;
}

const PER_HOUR_CHIP_VALUES = [7.25, 100, 500, 1_000, 5_000, 10_000];

const PerHourChips: FunctionComponent<PerHourChipsProps> = ({ setValue }): JSX.Element => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }} justifyContent="center" alignItems="center">
      {PER_HOUR_CHIP_VALUES.map((perHourValue, index) => (
        <Grid key={index} item md={2}>
          <Chip
            label={`${abbreviatedCurrency(perHourValue)} Per Hour`}
            variant="filled"
            clickable
            onClick={() => setValue(perHourValue)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PerHourChips;
