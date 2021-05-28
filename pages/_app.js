import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/alatsi";
import "@fontsource/alegreya-sans-sc";
import "@fontsource/be-vietnam/800.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
