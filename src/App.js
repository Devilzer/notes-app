import './style/App.scss';
import HomePage from "./components/HomePage";
import NoteDetails from "./components/NoteDetails";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state);
  var pageElement;
  if(Object.keys(state.note.currentnote).length === 0 && state.note.currentnote.constructor === Object){
    pageElement = <HomePage/>
  }
  else{
    // console.log(state.note.currentnote);
    pageElement = <NoteDetails/>
  }
  return (
    <div className="App">
      <h1>
        Notes
      </h1>
      {/* <HomePage/> */}
      {pageElement}


      



    </div>
  );
}

export default App;
