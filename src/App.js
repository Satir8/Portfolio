import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
import Burger from "./components/burger/Burger";
import Navigation from "./components/navigation/Navigation";
import WelcomePage from "./pages/welcome/WelcomePage";
import PortfolioPage from "./pages/portfolio/Portfolio";
import ContactPage from "./pages/contact/ContactPage";
import "./App.css";
import slideTransitions from "./transitions/slideTransitions.module.css";
import pageTransitions from "./transitions/pageOpacityTransitions.module.css";

const routes = [
  { path: "/", name: "Welcome", Component: WelcomePage },
  { path: "/portfolio", name: "Portfolio", Component: PortfolioPage },
  { path: "/contact", name: "Contact", Component: ContactPage },
];

class App extends Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState((prev) => ({ isActive: !prev.isActive }));
  };
  render() {
    const { isActive } = this.state;
    return (
      <>
        <Burger isActive={isActive} onToggle={this.handleToggle} />
        <header>
          <CSSTransition
            in={isActive}
            timeout={450}
            classNames={slideTransitions}
            unmountOnExit
          >
            {(state) => <Navigation onToggle={this.handleToggle} />}
          </CSSTransition>
        </header>
        <main>
          <Route
            render={({ location }) => (
              <TransitionGroup className="page">
                <CSSTransition
                  key={location.key}
                  timeout={1200}
                  classNames={pageTransitions}
                >
                  <Switch>
                    {routes.map(({ path, Component }) => (
                      <Route
                        key={path}
                        exact
                        path={path}
                        component={Component}
                      />
                    ))}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </main>
      </>
    );
  }
}

export default App;
