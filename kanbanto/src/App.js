import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import HomeScreen from "./pages/HomeScreen";
import BoardScreen from "./pages/BoardScreen";

//Components
import Layout from "./components/Layout";

//Styles
import GlobalStyle from "./assets/styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/board" component={BoardScreen} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
