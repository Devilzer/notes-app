import './style/App.scss';
import NoteInput from "./components/NoteInput";
import SearchBox from "./components/SearchBox";
import NoteList from "./components/NoteList";
function App() {
  return (
    <div className="App">
      <h1>
        Notes
      </h1>
      <NoteInput/>
      <SearchBox/>
      <NoteList/>
    </div>
  );
}

export default App;
