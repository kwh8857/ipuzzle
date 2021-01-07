import React, { useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product/Product";
import Question from "./Question/Question";
function App() {
  const dispatch = useDispatch();
  const Agent = useSelector((state) => state.layouts.userState);
  const firstAgent = useCallback(() => {
    if (window.innerWidth > 1079 && Agent !== "PC") {
      dispatch({
        type: "LAYOUTS/USER/CHANGE",
        payload: "PC",
      });
    } else if (window.innerWidth < 1080 && Agent !== "MB") {
      dispatch({
        type: "LAYOUTS/USER/CHANGE",
        payload: "MB",
      });
    }
  }, [dispatch, Agent]);

  useEffect(() => {
    firstAgent();
    window.addEventListener("resize", firstAgent);
    return () => {
      window.removeEventListener("resize", firstAgent);
    };
  }, [firstAgent]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Main} path="/" />
        <Route exact component={Product} path="/product" />
        <Route exact component={Question} path="/question" />
      </Switch>
    </Router>
  );
}

export default App;
