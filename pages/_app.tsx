import type { AppProps } from "next/app";
import { GlobalStyles, Themed } from "../theme";

import "normalize.css/normalize.css";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Themed>
        <GlobalStyles />
        <Component {...pageProps} />
      </Themed>
    </>
  );
}

export default App;
