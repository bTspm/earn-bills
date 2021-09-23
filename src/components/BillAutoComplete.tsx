import { Autocomplete, Box, createFilterOptions, TextField, Typography } from "@mui/material";
import { FunctionComponent, HTMLAttributes, useContext } from "react";

import { BillDataContext, BillDatum } from "../contexts/BillDataContext";
import { abbreviatedCurrency } from "../utils/numbers";

interface BillAutoCompleteProps {
  value: BillDatum;
  setValue: (value: BillDatum) => void;
}

const BillAutoComplete: FunctionComponent<BillAutoCompleteProps> = ({ value, setValue }): JSX.Element => {
  const { billData } = useContext(BillDataContext);

  const filterOptions = createFilterOptions({
    ignoreCase: true,
    ignoreAccents: false,
    trim: false,
    stringify: (option: BillDatum) => `${option.personName} ${option.source}`
  });

  const renderOption = (props: HTMLAttributes<HTMLLIElement>, option: BillDatum) => {
    return (
      <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
        <img loading="lazy" width="50" src={option.squareImage} srcSet={`${option.squareImage} 2x`} alt="" />

        <Typography>
          {option.personName}
          <Typography component={"div"} variant="overline">
            {option.source} - {abbreviatedCurrency(option.finalWorth)}
          </Typography>
        </Typography>
      </Box>
    );
  };

  return (
    <Autocomplete
      disableClearable
      value={value}
      autoHighlight
      getOptionLabel={(option) => option.personName}
      filterOptions={filterOptions}
      options={billData}
      renderOption={renderOption}
      renderInput={(params) => <TextField {...params} label="Billionaire" />}
      onChange={(e, data) => setValue(data)}
    />
  );
};

export default BillAutoComplete;
