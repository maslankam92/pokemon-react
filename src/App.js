import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Home from "./Components/Home";

const GlobalStyle = createGlobalStyle`

  html {
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: linear-gradient(
      45deg,
      #ff9a9e 0%,
      #fad0c4 99%,
      #fad0c4 100%
    );
    font-family: 'Abel', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  </>
);

export default App;
