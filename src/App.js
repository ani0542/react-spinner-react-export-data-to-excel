import React from 'react'
import HomeScreen from './pages/HomeScreen'
import Navbar from "./pages/Navbar"
import "./App.css"

function App() {
  return (
    <>
        <div className="App">
            <Navbar/>
            <HomeScreen/>
         </div>
    </>
  )
}

export default App






// import React from "react";

// import {ExportCSV} from './pages/ExportCsv';



// export default function App() {

//   const fileName = 'AnimeshTechnical'

//   const viewers = [

//     {id:1,name:'sakumar',age:34},

//     {id:2,name:'kumar',age:56}

//   ]

//   return (

//     <div>

//      <ExportCSV csvData={viewers} fileName={fileName} />

//   </div>

//   );

// }