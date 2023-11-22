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

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Header/>
      </div>
      <Overview/>
      <Products/>
      <Tech/>
      <UseCase/>
      <AquaFarm/>
      <Footer/>
    </div>
  );
}

export default App;
