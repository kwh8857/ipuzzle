import React, { useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const firstAgent = useCallback(() => {
    if (window.innerWidth > 760) {
      dispatch({
        type: "LAYOUTS/USER/CHANGE",
        payload: "PC",
      });
    } else {
      dispatch({
        type: "LAYOUTS/USER/CHANGE",
        payload: "MB",
      });
    }
  }, [dispatch]);

  useEffect(() => {
    firstAgent();

    return () => {};
  }, [firstAgent]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Main} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
