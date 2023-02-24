import { useState } from 'react'
import Navbar "@/Components/navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  return (
    <div className="app bg-gray-200">
       <Navbar selectedPage={selectedPage}
       setSelectedPage={setSelectedPage}
       />
    </div>
  )
}

export default App;
