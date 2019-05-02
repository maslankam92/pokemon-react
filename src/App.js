import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Home from "./Components/Home";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppContainer = styled.div`
  //background: red;/
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </AppContainer>
  </>
);

export default App;
