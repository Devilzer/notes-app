import './style/App.scss';
import NoteInput from "./components/NoteInput";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <h1>
        Notes
      </h1>
      <NoteInput/>
      <SearchBox/>
    </div>
  );
}

export default App;
