import './style/App.scss';
import HomePage from "./components/HomePage";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state);
  var pageElement;
  if(Object.keys(state.note.currentnote).length === 0 && state.note.currentnote.constructor === Object){
    pageElement = <HomePage/>
  }
  else{
    console.log(state.note.currentnote);
  }
  return (
    <div className="App">
      <h1>
        Notes
      </h1>
      {/* <HomePage/> */}
      <div className="note-detail-container">
        <div className="btns">
          <button><i className="fas fa-chevron-left"></i></button>
          <button><i className="fas fa-check"></i></button>
        </div>
        <div className="note-details">
          <input type="text"/> 
          <h4>
            27-2-2021
          </h4>
          <textarea placeholder="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."/>
        </div> 
      </div>


      



    </div>
  );
}

export default App;
