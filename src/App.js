import React from 'react';
import './App.css';
import Wrapper from './components/wrapper';
import Photo from './components/prop';
import Title from './components/Title';
import Logo from './logo.svg'
function App() {
  return (
    <div className="App">
<Wrapper>

<Photo src={Logo} />

<Title style={{color:'red'}} >My Name here</Title>

<Title small>My job here</Title>


</Wrapper>
    </div>
  );
}

export default App;
