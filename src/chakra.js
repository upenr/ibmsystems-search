import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react"
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';

export function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
       <MDXProvider components={MDXComponents}>
       {children}
        </MDXProvider>
    </ChakraProvider>
  )
}

// also export a reusable function getServerSideProps
export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? "",
    },
  }
}