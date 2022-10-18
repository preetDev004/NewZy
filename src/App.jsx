// import logo from './logo.svg';
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0,
  };
  setProgress = (prog) => {
    this.setState({
      progress: prog,
    });
  };
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <LoadingBar
              height={3}
              color="#cb3b4e" progress={this.state.progress}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="general"
                    category="general"
                    pageSize={18}
                  />
                }
              ></Route>
              <Route
                exact
                path="/general"
                element={
                  <News apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="general"
                    category="general"
                    pageSize={18}
                  />
                }
              ></Route>

              <Route
                exact
                path="/entertainment"
                element={
                  <News apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="entertainment"
                    category="entertainment"
                    pageSize={18}
                  />
                }
              ></Route>

              <Route
                exact
                path="/business"
                element={
                  <News apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="business"
                    category="business"
                    pageSize={18}
                  />
                }
              ></Route>

              <Route
                exact
                path="/sports"
                element={
                  <News apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="sports"
                    category="sports"
                    pageSize={18}
                  />
                }
              ></Route>

              <Route
                exact
                path="/technology"
                element={
                  <News apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="technology"
                    category="technology"
                    pageSize={18}
                  />
                }
              ></Route>

              <Route
                exact
                path="/health"
                element={
                  <News apiKey={this.apiKey}
                    setProgress={this.setProgress}
                    key="health"
                    category="health"
                    pageSize={18}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
