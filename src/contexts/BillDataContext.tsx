import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

import CONSTANTS from "../utils/constants";

const BILLION_MULTIPLIER = 1_000_000;

export interface BillDatum {
  birthDate: number;
  abouts: Array<string>;
  countryOfCitizenship: string;
  city: string;
  bios: Array<string>;
  personName: string;
  finalWorth: number;
  rank: number;
  squareImage: string;
  source: string;
  industries: Array<string>;
  country: string;
}

interface BillDataContext {
  billData: Array<BillDatum>;
  isBillDataLoaded: boolean;
}

export const BillDataContext = createContext<BillDataContext>({
  billData: [],
  isBillDataLoaded: false
});

interface BillDataContextProviderProps {
  children: ReactNode;
}

export const BillDataContextProvider = ({ children }: BillDataContextProviderProps): JSX.Element => {
  const [billData, setBillData] = useState<Array<BillDatum>>([]);
  const [isBillDataLoaded, setBillDataLoaded] = useState<boolean>(false);

  const imageFormat = (imageUrl: string) => {
    if (imageUrl == null || imageUrl.length === 0) return CONSTANTS.defaultBillImage;
    if (imageUrl.includes("https")) return imageUrl;

    return `https:${imageUrl}`;
  };

  useEffect(() => {
    function fetchBillData() {
      axios
        .get("https://forbes400.herokuapp.com/api/forbes400/")
        .then((response) => {
          const data = response.data.map((datum: BillDatum) => {
            datum.finalWorth = Number((datum.finalWorth * BILLION_MULTIPLIER).toFixed(CONSTANTS.defaultDecimals));
            datum.squareImage = imageFormat(datum.squareImage);
            return datum;
          });
          setBillData(data);
          setBillDataLoaded(true);
        })
        .catch((e) => {
          console.error(e, e.stack);
          setBillDataLoaded(true);
        });
    }

    fetchBillData();
  }, []);

  return <BillDataContext.Provider value={{ billData, isBillDataLoaded }}>{children}</BillDataContext.Provider>;
};
