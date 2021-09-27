import { Alert, Container, Typography } from "@mui/material";
import { FunctionComponent, useContext } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BillDataContext, BillDataContextProvider } from "./contexts/BillDataContext";

const AppContent: FunctionComponent = (): JSX.Element => {
  const { isBillDataLoaded, billData } = useContext(BillDataContext);

  if (!isBillDataLoaded) {
    return <Typography align="center">Loading...</Typography>;
  }

  if (billData.length > 0) {
    return <Home />;
  } else {
    return <Alert severity="error">Error...Please try again</Alert>;
  }
};

const App: FunctionComponent = (): JSX.Element => {
  return (
    <BillDataContextProvider>
      <Header />
      <Container sx={{ mt: 10 }} component="main" maxWidth="md">
        <AppContent />
      </Container>
      <Footer />
    </BillDataContextProvider>
  );
};

export default App;
