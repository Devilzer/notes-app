import './style/App.scss';
import HomePage from "./components/HomePage";
import NoteDetails from "./components/NoteDetails";
import { useSelector } from "react-redux";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/nest.css";


function App() {
  const state = useSelector(state => state);
  //updating page based on state.
  var pageElement;
  if(Object.keys(state.note.currentnote).length === 0 && state.note.currentnote.constructor === Object){
    pageElement = <HomePage/>
  }
  else{
    pageElement = <NoteDetails/>
  }
  return (
    <div className="App">
      <h1>
        Notes
      </h1>
      {pageElement}
    </div>
  );
}

export default App;
