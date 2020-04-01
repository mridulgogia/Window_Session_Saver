import React, {useState} from 'react';
import './stylesheets/_index.scss';
import './stylesheets/vendor/bootstrap.min.css';

import Header from './components/header/Header';
import Body from './components/body/Body';

function App() { 
const [list, setList] = useState([{
  name: 'Abc'
}, 
{
  name: 'bcd'
}]);

  return (
    <div className="App">
      <Header />
      <hr />
      <Body list={list} />
    </div>
  );
}

export default App;
