import Time from "./lib/Time";

function App() {
  const time = new Time();
  console.log(time.getTimeOfDay())

  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <div id="shit"></div>
      </div>
    </>
  );
}

export default App;
