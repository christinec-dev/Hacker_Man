import Game from './components/Game';
import Header from './layout/Header';
import Glitch from './layout/Glitch';
import Loader from './layout/Loader';
//main component
function App() {
  return (
    <div className="App">
      <div className="row">
        {/* Header */}
        <Loader />   
       </div>
      <div className="row">
        {/* Header */}
        <Header />   
       </div>
      <div className="row">
        {/* Game */}
        <Game />
      <div className="background">
        {/* Glitch Effect */}
        <Glitch />
      </div>
    </div>
  </div> 
  );
}

//exports for use in other files
export default App;
