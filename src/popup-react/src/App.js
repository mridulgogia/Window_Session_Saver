import React, {useState, useRef} from 'react';
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

const browserRef = useRef(window);

const onClickAdd = () => {
  // const tabList = browser.tabs.query({currentWindow: true});
  // console.log(tabList);
}

  return (
    <div className="App">
      <Header onClickAdd={onClickAdd}/>
      <hr />
      <Body list={list} />
    </div>
  );
}

export default App;
