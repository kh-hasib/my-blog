import React from 'react'
import {Route} from 'react-router-dom';
import SearchBox from './SearchBox';

const Sidebar = () => {
    return (
      <div className="col-md-4">
        <Route render={({history}) => <SearchBox history={history} />} />        
      </div>

    )
}

export default Sidebar
