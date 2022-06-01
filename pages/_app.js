import { globalCss } from "../stitches.config";

globalCss({
  "html,body": {
    margin: "0",
    padding: "0",
    fontFamily: "sans-serif",
  },
  "*": {
    boxSizing: "inherit",
    "&::before,&::after": { boxSizing: "inherit" },
    "&::-moz-focus-inner": { border: "0" },
  },
})();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
