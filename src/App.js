import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import Homepage from './components/home/Homepage'
import Article from './components/article/Article'
import CreateArticle from './components/article/CreateArticle'
import ScrollToTop from './components/ScrollToTop'

class App extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <div className="app">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage}></Route>
              <Route exact path="/homepage/:page" component={Homepage}></Route>
              <Route exact path="/create-article" component={CreateArticle}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/signin" component={SignIn}></Route>
              <Route path="/article/:id" component={Article}></Route>
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
