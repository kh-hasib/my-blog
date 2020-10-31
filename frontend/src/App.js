import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PostUpdate from './components/posts/PostUpdate';
import CreatePost from './components/posts/CreatePost';
import PostDetail from './components/posts/PostDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';


const App = () => {
  return (
    <Router>
      <ScrollToTop>
      <Header /> 
      <main>
        <Container className='py-3' >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/posts/create' component={CreatePost} />
            <Route path='/posts/:id' component={PostDetail} />
            <Route path='/admin/posts/:id/edit' component={PostUpdate} />

          </Switch>
        </Container>
      </main>
      <Footer />
      </ScrollToTop>    
    </Router>
  );
}

export default App;
