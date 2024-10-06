import React,{Component} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import S from "./Components/S"
import Error from "./Pages/Error";
import Details from "./Pages/Details";

class App extends Component{
  render(){
    return(
      <>
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/S" element={<S/>}></Route>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/details" element={<Details/>}></Route>
          </Routes>
      </BrowserRouter>
     </>
    )
  }
}
export default App;