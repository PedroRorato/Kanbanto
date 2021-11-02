import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import HomeScreen from "./pages/HomeScreen";
import BoardScreen from "./pages/BoardScreen";

//Components
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/board" component={BoardScreen} />
      </Switch>
    </Layout>
  );
}

export default App;
