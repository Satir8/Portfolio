import React, { Component, Suspense } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
import Burger from "./components/burger/Burger";
import Navigation from "./components/navigation/Navigation";
import WelcomePage from "./pages/welcome/WelcomePage";
import PortfolioPage from "./pages/portfolio/Portfolio";
import ContactPage from "./pages/contact/ContactPage";
import slideTransitions from "./transitions/slideTransitions.module.css";
import opacityTransitions from "./transitions/opacityTransitions.module.css";
import "./App.css";

// const routes = [
//   { path: "/", name: "Welcome", Component: WelcomePage },
//   { path: "/portfolio", name: "Portfolio", Component: PortfolioPage },
//   { path: "/contact", name: "Contact", Component: ContactPage }
// ];

class App extends Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState((prev) => ({ isActive: !prev.isActive }));
  };
  render() {
    const { isActive, isRoute } = this.state;
    return (
      <>
        {/* <Suspense fallback={""}> */}
        <Burger isActive={isActive} onToggle={this.handleToggle} />
        <CSSTransition
          in={isActive}
          timeout={450}
          classNames={slideTransitions}
          unmountOnExit
        >
          {(state) => <Navigation onToggle={this.handleToggle} />}
        </CSSTransition>
        {/* {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match}
                timeout={5000}
                classNames={opacityTransitions}
                unmountOnExit
              >
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))} */}
        {/* <Switch> */}
        {/* <Switch> */}

        ~~
        <Route path="/" exact>
          {({ match }) => {
            console.log(match);
            console.log(match != null);
            return (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames={opacityTransitions}
                unmountOnExit
              >
                <WelcomePage />
              </CSSTransition>
            );
          }}
        </Route>
        <Route path="/portfolio">
          {({ match }) => {
            console.log(match);
            console.log(match != null);
            return (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames={opacityTransitions}
                unmountOnExit
              >
                <PortfolioPage />
              </CSSTransition>
            );
          }}
        </Route>
        <Route path="/contact">
          {({ match }) => {
            console.log(match);
            console.log(match != null);
            return (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames={opacityTransitions}
                unmountOnExit
              >
                <ContactPage />
              </CSSTransition>
            );
          }}
        </Route>

        {/* </Switch> */}
        {/* </Suspense> */}
      </>
    );
  }
}

export default App;
