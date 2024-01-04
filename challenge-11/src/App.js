
import './App.css';
import MyComponent from './Components/MyComponent';
import { ComponentA, ComponentB } from './Components/CustomHook';
function App() {
  return (
    <div className="App">
      <MyComponent/>
      <h1>Custom Hook Example</h1>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default App;
