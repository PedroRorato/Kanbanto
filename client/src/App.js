import React from "react";
import { Route, Switch } from "react-router-dom";

//Context
import { AuthProvider } from "./contexts/AuthProvider";

//Pages
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import BoardsScreen from "./pages/BoardsScreen";
import BoardScreen from "./pages/BoardScreen";

//Components
import Layout from "./components/Layout";

//Styles
import GlobalStyle from "./assets/styles/global";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/boards" component={BoardsScreen} />
          <Route exact path="/boards/:id" component={BoardScreen} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
}

export default App;
