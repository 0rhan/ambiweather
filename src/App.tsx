import { BrowserRouter as Router } from "react-router-dom";
import InputBase from "UI/Components/Controls/Inputs/InputBase/InputBase"
import Button from "UI/Components/Controls/Buttons/Button/Button"

function App() {
  return (
    <Router>
      <div className="App darkTheme">
        <header className="App-header"></header>
        <Button variant="primary"> Button text</Button>
        <InputBase name="search" inputLabel="City name"/>
      </div>
    </Router>
  );
}

export default App;
