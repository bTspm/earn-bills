import Slider from "@mui/material/Slider";
import * as React from "react";
import { FunctionComponent } from "react";

import constants from "../utils/constants";
import { abbreviatedCurrency } from "../utils/numbers";

interface PerHourSliderProps {
  value: number;
  setValue: (value: number) => void;
}

const PerHourSlider: FunctionComponent<PerHourSliderProps> = ({ value, setValue }): JSX.Element => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <>
      <Slider
        sx={{ mb: 3, mt: 3 }}
        value={value}
        min={1}
        step={1}
        max={constants.MAX_PER_HOUR}
        onChange={handleChange}
        valueLabelFormat={abbreviatedCurrency(value)}
        valueLabelDisplay="auto"
        aria-labelledby="per-hour-slider"
      />
    </>
  );
};

export default PerHourSlider;
