import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { AppContextProvider } from "./contexts/AppContext";
import { themeConfigurations } from "./constants";
import { BrowserRouter } from "react-router-dom";
import { AppWrapper } from "./components";
import "dayjs/locale/vi";
import { DatesProvider } from "@mantine/dates";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={themeConfigurations}
    >
      <BrowserRouter>
        <AppContextProvider>
          <DatesProvider settings={{ locale: "vi" }}>
            <Notifications position="bottom-right" limit={6} />
            <AppWrapper />
          </DatesProvider>
        </AppContextProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
);
