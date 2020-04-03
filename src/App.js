import React, { Component, Suspense } from "react";
import { CSSTransition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
import Burger from "./components/burger/Burger";
import Navigation from "./components/navigation/Navigation";
import WelcomePage from "./pages/welcome/WelcomePage";
import PortfolioPage from "./pages/portfolio/Portfolio";
import ContactPage from "./pages/contact/ContactPage";
import slideTransitions from "./transitions/slideTransitions.module.css";
import "./App.css";

class App extends Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState(prev => ({ isActive: !prev.isActive }));
  };
  render() {
    const { isActive } = this.state;
    return (
      <>
        <Suspense fallback={""}>
          <Burger isActive={isActive} onToggle={this.handleToggle} />

          <CSSTransition
            in={isActive}
            timeout={450}
            classNames={slideTransitions}
            unmountOnExit
          >
            {state => <Navigation onToggle={this.handleToggle} />}
          </CSSTransition>

          <Switch>
            <Route path="/portfolio" exact component={PortfolioPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/" component={WelcomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
