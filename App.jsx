// import './App.css'
// import Home from "./assets/Home";

// function App() {
//   const userName ="chitranjan"
//   const userAge = 40;
//   return ( 
//  <>
//  <div>
//   <h1>Props handling</h1>
//   <Home name ={userName} age={userAge}/>
//  </div>
//  </>
//   )
    
// }

// export default App
import Header from "./Header";
import Footer from "./Footer";      
import Home from "./assets/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

