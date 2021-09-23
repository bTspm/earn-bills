import { Card, Typography } from "@mui/material";
import { FunctionComponent, useContext, useEffect, useState } from "react";

import { BillDataContext, BillDatum } from "../contexts/BillDataContext";
import constants from "../utils/constants";
import { abbreviatedCurrency, abbreviatedNumber } from "../utils/numbers";
import BillAutoComplete from "./BillAutoComplete";
import PerHourSlider from "./PerHourSlider";

const Home: FunctionComponent = (): JSX.Element => {
  const { billData } = useContext(BillDataContext);
  const [perHour, setPerHour] = useState(constants.FEDERAL_MIN_WAGE);
  const [billionaire, setBillionaire] = useState<BillDatum>(billData[0]);
  const [years, setYears] = useState<number | null>(null);

  useEffect(() => {
    setYears(Number((billionaire.finalWorth / (constants.YEARLY_MAX_HOURS * perHour)).toFixed(2)));
  }, [billionaire, perHour]);

  return (
    <Card sx={{ p: 3 }}>
      <BillAutoComplete value={billionaire} setValue={setBillionaire} />
      <PerHourSlider value={perHour} setValue={setPerHour} />
      Just Takes {<Typography fontWeight="bold">{abbreviatedNumber(years)}</Typography>} Years to earn
      <Typography>{abbreviatedCurrency(billionaire.finalWorth)}</Typography>
    </Card>
  );
};

export default Home;
