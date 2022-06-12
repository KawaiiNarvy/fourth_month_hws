import './App.css';

function Header() {
  return(
    <div>
      <h1>Header</h1>
    </div>
  )
}

function Footer() {
  return(
    <div>
      <h2>Footer</h2>
    </div>
  )
}

function AboutUs(){
  return(
    <div>
      <h2>About Us:</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      Hello world!
      <Header/>
      <Footer/>
      <AboutUs/>
    </div>
  );
}

export default App;
