import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const LazyBurger = lazy(() =>
  import("./components/burger/Burger" /* webpackChunkName: "Burger" */)
);
const LazyNavigation = lazy(() =>
  import(
    "./components/navigation/Navigation" /* webpackChunkName: "Navigation" */
  )
);
const LazyWelcomePage = lazy(() =>
  import("./pages/welcome/WelcomePage" /* webpackChunkName: "Welcome-page" */)
);
const LazyPortfolio = lazy(() =>
  import("./pages/portfolio/Portfolio" /* webpackChunkName: "Portfolio-page" */)
);
const LazyContactPage = lazy(() =>
  import("./pages/contact/ContactPage" /* webpackChunkName: "Contact-page" */)
);

class App extends Component {
  state = { isActive: true };

  handleToggle = () => {
    this.setState(prev => ({ isActive: !prev.isActive }));
  };
  render() {
    const { isActive } = this.state;
    return (
      <>
        <Suspense fallback={""}>
          <LazyBurger isActive={isActive} onToggle={this.handleToggle} />
          {isActive && <LazyNavigation />}
          <Switch>
            <Route path="/portfolio" exact component={LazyPortfolio} />
            <Route path="/contact" exact component={LazyContactPage} />
            <Route path="/" component={LazyWelcomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
