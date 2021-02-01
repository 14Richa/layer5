import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Brand from "../../sections/Company/Brand";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const BrandPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <SEO title="Brand Kits" />
      <Navigation />
      <Brand />
      <Footer />
    </Layout>
  </ThemeProvider>
);

export default BrandPage;
