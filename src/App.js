import logo from './logo.svg';
import './Style/App.css'
import Background from './Background';
import Boat from './Boat';
import Banner from './Banner';

import AboutMe from './Pages/About Me';
function App() {
  return (
    <div className="App">
    <Banner/>
    <Boat/>
    <Background/>
    <AboutMe/>

    </div>
  );
}

export default App;
