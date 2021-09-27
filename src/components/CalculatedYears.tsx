import { Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import * as React from "react";

import { BillDatum } from "../contexts/BillDataContext";
import CONSTANTS from "../utils/constants";
import { abbreviatedCurrency, abbreviatedNumber, formattedCurrency } from "../utils/numbers";

interface CalculatedYearsProps {
  billionaire: BillDatum;
  perHour: number;
}

const CalculatedYears: FunctionComponent<CalculatedYearsProps> = ({ billionaire, perHour }): JSX.Element => {
  const [years, setYears] = useState<number | null>(null);

  const highlightedValue = (value: string) => {
    return (
      <Typography component="span" fontWeight="bold" variant="h6">
        {value}
      </Typography>
    );
  };

  useEffect(() => {
    setYears(Number((billionaire.finalWorth / (CONSTANTS.yearlyMaxWorkingHours * perHour)).toFixed(2)));
  }, [billionaire, perHour]);

  return (
    <Typography sx={{ mt: 2 }}>
      Takes {highlightedValue(abbreviatedNumber(years))} years to accumulate net worth of{" "}
      {highlightedValue(abbreviatedCurrency(billionaire.finalWorth))} while earning{" "}
      {highlightedValue(formattedCurrency(perHour))} per hour.
    </Typography>
  );
};

export default CalculatedYears;
