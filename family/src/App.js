import React,{useState} from 'react';
import './App.css';
import Register from './view/components/Register/Register'

function App() {

  const [registerInfo,setRegisterInfo] = useState([])
  
  return (
    <div>
      <Register></Register>
    </div>
  );
}

export default App;
