import { Card, Divider, Grid, Typography } from "@mui/material";
import { FunctionComponent, useContext, useEffect, useState } from "react";

import { BillDataContext, BillDatum } from "../contexts/BillDataContext";
import CONSTANTS from "../utils/constants";
import { formattedNumber } from "../utils/numbers";
import BillAutoComplete from "./BillAutoComplete";
import BillDetails from "./BillDetails";
import CalculatedYears from "./CalculatedYears";
import PerHourSlider from "./PerHourSlider";
import PerHourTable from "./PerHourTable";

const Home: FunctionComponent = (): JSX.Element => {
  const { billData } = useContext(BillDataContext);
  const [perHour, setPerHour] = useState(CONSTANTS.federalMinWage);
  const [billionaire, setBillionaire] = useState<BillDatum>(billData[0]);

  useEffect(() => {
    setPerHour(CONSTANTS.federalMinWage);
  }, [billionaire]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={5} sm={12}>
          <Card sx={{ p: 2 }}>
            <BillAutoComplete value={billionaire} setValue={setBillionaire} />

            <Divider sx={{ mt: 2, mb: 1 }}>
              <Typography variant="overline">Calculate</Typography>
            </Divider>

            <CalculatedYears billionaire={billionaire} perHour={perHour} />
            <PerHourSlider value={perHour} setValue={setPerHour} />
            <PerHourTable netWorth={billionaire.finalWorth} />
          </Card>
          <Typography variant="caption" gutterBottom>
            Note:This calculation takes an average of {formattedNumber(CONSTANTS.yearlyMaxWorkingHours)} working hours
            per year and not spending your income.
          </Typography>
        </Grid>
        <Grid item md={7} sm={12}>
          <BillDetails billionaire={billionaire} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
