import React, { useState } from 'react';
import './App.scss';
import Header from '@components/Header'
import Landing from '@components/Landing'
import catalogData from '@constants/catalog.json'

function App() {
  const catalog={ ...catalogData.data }
  const [location, setLocation] = useState(null)
  const [branch, setBranch] = useState(null)
  console.log(catalog)
  return (
    <div className="App">
      <Header 
        catalog={catalog} 
        setLocation={setLocation}
        setBranch={setBranch}
        location={location}
        branch={branch}
      />
      <Landing
        location={location}
        branch={branch}
        catalog={catalog}
      />
      <div className="footer"></div>
    </div>
  );
}

export default App;
