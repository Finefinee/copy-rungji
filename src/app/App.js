import './App.css';
import RungjiList from "../component/rungji/RungjiList";
import Header from "../component/basic/Header";
import Body from "../component/basic/Body";
import Footer from "../component/basic/Footer";

function ChildComp() {
  return <div>자식 컴포넌트</div>
}

function App() {

  return (
    <div className="App">
      <Header/>
      <Body>
        <ChildComp></ChildComp>
      </Body>
      <RungjiList/>
      <Footer/>
    </div>
  );
}

export default App;
