import React from 'react';
import Navbar from './Navabr';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Main from './Main';
import Error from './Error';
import Contact from './Contact';
import Aboutus from './Aboutus';
import Content from './Content';
import Footer from './Footer';
import Enroll from './Enroll';

function App() {
  return (
    <>
      <Navbar/>
      
      <Switch>
      <Route exact path='/' ><Main/></Route>
        <Route exact path='/home' ><Main/></Route>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={Aboutus}/>
        <Route exact path='/content' component={Content}/>
        <Route exact path='/enroll' component={Enroll}/>

        <Route component={Error}/>
      </Switch>
     
      <Footer/>
    </>
  );
}
export default App;
