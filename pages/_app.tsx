import type { AppProps } from "next/app";
import { GlobalStyles, Themed } from "../theme";

import "normalize.css/normalize.css";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Themed>
        <GlobalStyles />
        {/* @ts-ignore //TODO: fix that */}
        <Component {...pageProps} />
      </Themed>
    </>
  );
}

export default App;
