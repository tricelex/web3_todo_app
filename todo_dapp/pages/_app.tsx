/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { debounce } from "lodash";
import NProgress from "nprogress";
import { SnackbarProvider } from "notistack";
import materialUITheme from "../styles/materialui/theme";
import globalTheme from "../styles/global";
import nprogressStyles from "../styles/nprogress";
import RouterEvents from "../lib/router-events";
import { makeStyles } from "@material-ui/core/styles";

import type { AppProps } from "next/app";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

NProgress.configure({ parent: "#app-container" });

const start = debounce(NProgress.start, 200);
RouterEvents.on("routeChangeStart", start);
RouterEvents.on("routeChangeComplete", (url) => {
  console.log(`Changed to URL: ${url}`);
  start.cancel();
  NProgress.done();
});
RouterEvents.on("routeChangeError", () => {
  start.cancel();
  NProgress.done();
});

const styles = makeStyles(() => ({
  snack: {
    padding: "10px",
  },
  success: {
    backgroundColor: "var(--geist-success)",
  },
  error: {
    backgroundColor: "var(--geist-error)",
  },
  info: {
    backgroundColor: "var(--geist-primary)",
  },
  warning: {
    backgroundColor: "var(--geist-warning)",
  },
}));

function App({ Component, pageProps }: AppProps) {
  const classes = styles();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    
  }, []);

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <SnackbarProvider
          preventDuplicate
          elevation={0}
          classes={{
            root: classes.snack,
            variantSuccess: classes.success,
            variantError: classes.error,
            variantWarning: classes.warning,
            variantInfo: classes.info,
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          maxSnack={3}
        >
          <ThemeProvider theme={materialUITheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </SnackbarProvider>
        <style jsx global>
          {nprogressStyles}
        </style>
        <style jsx global>
          {globalTheme}
        </style>
      </Web3ReactProvider>
      <CssBaseline />
    </>
  );
}

export default App;
