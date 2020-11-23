import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import MDXComponents from '../components/MDXComponents';
import SEO from '../next-seo.config';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <>
    <DefaultSeo {...SEO} />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ChakraProvider>
      <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
      </MDXProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
