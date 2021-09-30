import { Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import * as React from "react";

import { BillDatum } from "../contexts/BillDataContext";
import CONSTANTS from "../utils/constants";
import { abbreviatedNumber, formattedCurrency } from "../utils/numbers";

interface CalculatedYearsProps {
  billionaire: BillDatum;
  perHour: number;
}

export const calculateNumberOfYears = (perHour: number, netWorth: number): number => {
  return Number((netWorth / (CONSTANTS.yearlyMaxWorkingHours * perHour)).toFixed(CONSTANTS.defaultDecimals));
};

const CalculatedYears: FunctionComponent<CalculatedYearsProps> = ({ billionaire, perHour }): JSX.Element => {
  const [years, setYears] = useState<number | null>(null);

  const highlightedValue = (value: string) => {
    return (
      <Typography component="span" fontWeight="bold">
        {value}
      </Typography>
    );
  };

  useEffect(() => {
    setYears(calculateNumberOfYears(perHour, billionaire.finalWorth));
  }, [billionaire, perHour]);

  return (
    <Typography sx={{ mt: 2 }}>
      Takes {highlightedValue(abbreviatedNumber(years))} years to accumulate while earning{" "}
      {highlightedValue(formattedCurrency(perHour))} per hour.
    </Typography>
  );
};

export default CalculatedYears;
