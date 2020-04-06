import React, { Fragment } from 'react'
import EncryptionArea from './general/EncryptionArea'
import Hero from './hero';
import Header from './header/Header'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './footer/Footer'
import Signup from './signup'
import Login from './login'
import store from '../store'
import { Provider } from 'react-redux'

function App () {
  return (
    <Provider store={store}>
      <Router basename="/">
        <Header />
        <Route path={`/signup`} render={ () => 
          <Fragment>
            <Signup />
          </Fragment>
        } />
        <Route path={`/login`} render={ () => 
          <Fragment>
            <Login />
          </Fragment>
        } />
        <Route path={`/about`} render={ () => 
          <Fragment>
            <h1 style={{color: 'white'}}>ABOUT</h1>
          </Fragment>
        } />
        <Route exact path={`/`} render={ () => 
          <Fragment>
            <Hero />
            <EncryptionArea />
          </Fragment>
        } />
        <Footer />
      </Router>
    </Provider>
  )
}  

export default App;