import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize =6;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress,
    })
  }
  render() {
    return <div>
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
          <Route key = "general" exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category='general'/></Route>
          <Route key = "business" exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category='business'/></Route>
          <Route key = "entertainment" exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category='entertainment'/></Route>
          <Route key = "heakth" exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category='health'/></Route>
          <Route key = "science" exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category='science'/></Route>
          <Route key = "sports" exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category='sports'/></Route>
          <Route key = "technology" exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category='technology'/></Route>
          <Route key = "general" exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category='general'/></Route>
        </Switch>
      </Router>
    </div>;
  }
}
