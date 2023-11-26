import './App.css';
import {
  AquaFarm,
  Footer,
  Header,
  Overview,
  Products,
  Tech,
  UseCase
} from './containers'
import {Navbar} from './components'
import Casestudypage from './containers/casestudypage/Casestudypage';

function App() {
  return (
    <div className="App">
      {/* <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Overview/>
      <Products/>
      <Tech/>
      <UseCase/>
      <AquaFarm/>
      <Footer/> */}

      <Casestudypage/>
    </div>
  );
}

export default App;
