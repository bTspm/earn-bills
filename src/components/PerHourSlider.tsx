import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import * as React from "react";
import { FunctionComponent } from "react";

import CONSTANTS from "../utils/constants";
import { abbreviatedCurrency } from "../utils/numbers";

interface PerHourSliderProps {
  value: number;
  setValue: (value: number) => void;
}

const SLIDER_CONSTANTS = {
  max: CONSTANTS.manSalaryPerHour,
  min: CONSTANTS.minSalaryPerHour,
  step: 1
};

const PerHourSlider: FunctionComponent<PerHourSliderProps> = ({ value, setValue }): JSX.Element => {
  const marks = [
    {
      value: SLIDER_CONSTANTS.min,
      label: abbreviatedCurrency(SLIDER_CONSTANTS.min)
    },
    {
      value: SLIDER_CONSTANTS.max,
      label: abbreviatedCurrency(SLIDER_CONSTANTS.max)
    }
  ];

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ pl: 3, pr: 3, mt: 2 }}>
      <Slider
        value={value}
        min={SLIDER_CONSTANTS.min}
        step={SLIDER_CONSTANTS.step}
        max={SLIDER_CONSTANTS.max}
        onChange={handleChange}
        valueLabelFormat={abbreviatedCurrency(value)}
        aria-labelledby="per-hour-slider"
        marks={marks}
      />
    </Box>
  );
};

export default PerHourSlider;
