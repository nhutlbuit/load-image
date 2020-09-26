import React, { Component, lazy, Suspense } from 'react';
import './styles.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
const ComponentA = withRouter(lazy(() => import('./components/component-a/ComponentA.component')));

class App extends Component {
  
  render() {
    return (
        <div>
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect from="/" exact to="/component-a" />  
                <Route path="/component-a" component={ComponentA} /> 
              </Switch>
            </Suspense>
          </main>
        </div>
    );
  }
}

export default App;
