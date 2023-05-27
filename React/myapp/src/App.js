import './App.css';
import {Routes,Route} from 'react-router-dom';
import Tabl2 from './components/Tabl2';
import Add from './components/Add';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
  <Routes>
    <Route path='/' element={<Tabl2 />}/>
    <Route path='/Add' element={<Add data={{sname:'',sgrade:''}} method="post" />}/>
  </Routes>
    </div>
  );
}
export default App;
