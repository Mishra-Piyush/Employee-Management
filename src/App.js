import { useState } from 'react';
import Header from './Header';
import Section from './Section';

function App() {
  let [count, setcount] = useState(0);
  return (
    <div className="App">
      <Header count={count} setcount={setcount} />

      <div className='section'>
        <Section count={count} setcount={setcount} />
      </div>
      <p className='creater'>Created by Piyush Mishra</p>
    </div>
  );
}

export default App;
