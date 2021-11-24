import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../contexts/AuthProvider";

const LoggedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Route
        {...rest}
        render={() => <Redirect to={{ pathname: "/login" }} />}
      />
    );
  } else {
    return (<Route {...rest} render={() => <Component />} />);
  }
};

export default LoggedRoute;
