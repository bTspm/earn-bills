import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

const BILLION_MULTIPLIER = 1_000_000;

export interface BillDatum {
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

  useEffect(() => {
    function fetchBillData() {
      axios
        .get("https://forbes400.herokuapp.com/api/forbes400/")
        .then((response) => {
          const data = response.data.map((datum: BillDatum) => {
            datum.finalWorth = Number((datum.finalWorth * BILLION_MULTIPLIER).toFixed(2));
            return datum;
          });
          setBillData(data);
          setBillDataLoaded(true);
        })
        .catch(() => {
          setBillDataLoaded(true);
        });
    }

    fetchBillData();
  }, []);

  return <BillDataContext.Provider value={{ billData, isBillDataLoaded }}>{children}</BillDataContext.Provider>;
};
