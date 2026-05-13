import './App.css';
import RungjiList from "../component/rungji/RungjiList";
import Body from "../component/basic/Body";

function ChildComp() {
  return <div>자식 컴포넌트</div>
}

function App() {

  return (
    <div className="App">
      <RungjiList/>
    </div>
  );
}

export default App;
