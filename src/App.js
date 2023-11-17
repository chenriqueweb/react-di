/* import logo from './logo.svg'; */
import './App.css';

import MyComponent from './Components/MyComponent';
import { DependencyProvider } from './Context/DependencyProvider';

function App() {
  const myService =
  {
    callMe: () => { console.log('Teste Dependencia') } 
  }

  return (
    <DependencyProvider myService={myService}>
      <MyComponent></MyComponent>
    </DependencyProvider>
  );
}

export default App;
