import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const {dark} = useSelector(state => state.site)



  return (
    <div className={dark ? "App dark":"App"}>
      <Header />
      <Footer/>
    </div>
  );
}

export default App;
