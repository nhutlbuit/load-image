import React, { Component, lazy, Suspense } from 'react';
import './styles.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
        </div>
    );
  }
}

export default App;
