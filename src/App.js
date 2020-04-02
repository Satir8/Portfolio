import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const LazyWelcomePage = lazy(() =>
  import("./pages/welcome/WelcomePage" /* webpackChunkName: "Welcome-page" */)
);
const LazyPortfolio = lazy(() =>
  import("./pages/portfolio/Portfolio" /* webpackChunkName: "Portfolio-page" */)
);
const LazyContactPage = lazy(() =>
  import("./pages/contact/ContactPage" /* webpackChunkName: "Contact-page" */)
);

function App() {
  return (
    <>
      <Suspense fallback={""}>
        <Switch>
          <Route path="/portfolio" exact component={LazyPortfolio} />
          <Route path="/contact" exact component={LazyContactPage} />
          <Route path="/" component={LazyWelcomePage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
