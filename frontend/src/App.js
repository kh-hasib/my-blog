import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import CreatePost from './components/posts/CreatePost';
import PostDetail from './components/posts/PostDetail';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Header /> 
      <main>
        <Container className='py-3' >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/posts/create' component={CreatePost} />
            <Route path='/posts/:id' component={PostDetail} />
            <Route path='/posts/:id/update' component={postUpdate} />

          </Switch>
        </Container>
      </main>
      <Footer />    
    </Router>
  );
}

export default App;
