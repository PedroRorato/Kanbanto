import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../contexts/AuthProvider";

const UnloggedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  if (user) {
    return (
      <Route
        {...rest}
        render={() => <Redirect to={{ pathname: "/boards" }} />}
      />
    );
  } else {
    return (<Route {...rest} render={() => <Component />} />);
  }
};

export default UnloggedRoute;
