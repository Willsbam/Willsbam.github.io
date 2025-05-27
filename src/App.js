import logo from './logo.svg';
import './Style/App.css'
import Background from './Background';
import Boat from './Boat';
import Banner from './Banner';

import InfoPage from './Pages/InfoPage';
function App() {
  return (
    <div className="App">
    <Banner/>
    <Boat/>
    <Background/>
    <InfoPage/>

    </div>
  );
}

export default App;
