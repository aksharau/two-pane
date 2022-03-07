import {React, useState} from 'react';
import logo from './logo.svg';
import './components/CenterPane.css';
import LeftMenu from './components/LeftMenu';
import CenterPane from './components/CenterPane';
function App() {

  const [data,setCentrePaneData] = useState('');

  function submitMenuChange(itemClicked) {
    let moreInfo = "Some more stuff about...." + itemClicked;
    setCentrePaneData(moreInfo);
  };
  return (
    <div id="container">
    <CenterPane data={data}/>
    <LeftMenu onMenuSelect={submitMenuChange}/>

   </div>
  );
}

export default App;
