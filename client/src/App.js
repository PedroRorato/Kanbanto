import React from "react";
import { Switch } from "react-router-dom";

//Context
import { AuthProvider } from "./contexts/AuthProvider";

//Routes
import LoggedRoute from "./routes/LoggedRoute";
import UnloggedRoute from "./routes/UnloggedRoute";

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
          <UnloggedRoute exact path="/" component={HomeScreen} />
          <UnloggedRoute exact path="/login" component={LoginScreen} />
          <UnloggedRoute exact path="/register" component={RegisterScreen} />
          <LoggedRoute exact path="/boards" component={BoardsScreen} />
          <LoggedRoute exact path="/boards/:id" component={BoardScreen} />
        </Switch>
      </Layout>
    </AuthProvider>
  );
}

export default App;
