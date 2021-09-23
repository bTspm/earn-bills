import { format } from "numerable";

export const abbreviatedNumber = (value: number | null): string => {
  return format(value, "0.00a");
};

export const abbreviatedCurrency = (value: number | null): string => {
  return format(value, "$0.00a", { currency: "USD" });
};

export const formattedNumber = (value: number | null): string => {
  return format(value, "0,0.00");
};

export const formattedCurrency = (value: number | null): string => {
  return format(value, "$0,0.00", { currency: "USD" });
};
