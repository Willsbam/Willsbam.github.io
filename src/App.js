import logo from './logo.svg';
import './Style/App.css'
import Background from './Background';
import Boat from './Boat';
import Banner from './Banner';

import AboutMe from './Pages/About Me';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Links from './Pages/Links';
import { useState } from 'react';

function App() {
    const [currentVisible,setVisible] = useState(-1);

    function renderPages(){
      if(currentVisible ===-1){
        return;
      }
      else if(currentVisible === 0){
        return <AboutMe setVis={setVisible}/>
      }
      else if(currentVisible === 1){
        return <Projects setVis={setVisible}/>
      }
      else if(currentVisible === 2){
        return <Experience setVis={setVisible}/>
      }
       else if(currentVisible === 3){
        return <Links setVis={setVisible}/>
      }

    }
  return (
    
    <div className="App">
    <Banner/>
    <Boat/>
    <Background setVis={setVisible} curVis={currentVisible}/>
    {renderPages()}
    </div>
  );
}

export default App;
