import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Images from "./components/imagesection/Images";
import Maintext from "./components/maintext/Maintext";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Images />
      <Maintext />
      <Footer />
    </div>
  );
}

export default App;
