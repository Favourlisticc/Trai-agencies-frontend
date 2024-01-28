import '@/styles/globals.css'
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";





    function MyApp({ Component, pageProps }) {
      return (

            <Component {...pageProps} />

      )
    }

    export default MyApp;
