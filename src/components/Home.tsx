import { Card, Divider, Typography } from "@mui/material";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import * as React from "react";

import { BillDataContext, BillDatum } from "../contexts/BillDataContext";
import CONSTANTS from "../utils/constants";
import { formattedNumber } from "../utils/numbers";
import BillAutoComplete from "./BillAutoComplete";
import CalculatedYears from "./CalculatedYears";
import PerHourChips from "./PerHourChips";
import PerHourSlider from "./PerHourSlider";

const Home: FunctionComponent = (): JSX.Element => {
  const { billData } = useContext(BillDataContext);
  const [perHour, setPerHour] = useState(CONSTANTS.federalMinWage);
  const [billionaire, setBillionaire] = useState<BillDatum>(billData[0]);

  useEffect(() => {
    setPerHour(CONSTANTS.federalMinWage);
  }, [billionaire]);

  return (
    <>
      <Card sx={{ p: 3 }}>
        <BillAutoComplete value={billionaire} setValue={setBillionaire} />

        <Divider sx={{ mt: 3 }}>
          <Typography variant="overline">Calculate</Typography>
        </Divider>

        <CalculatedYears billionaire={billionaire} perHour={perHour} />
        <PerHourChips setValue={setPerHour} />
        <PerHourSlider value={perHour} setValue={setPerHour} />
      </Card>
      <Typography variant="caption" gutterBottom>
        Note:This calculation takes an average of {formattedNumber(CONSTANTS.yearlyMaxWorkingHours)} working hours per
        year and not spending your income.
      </Typography>
    </>
  );
};

export default Home;
