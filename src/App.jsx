import { Budgets } from "./Components/Budgets/Budgets"
import { IntroPage } from "./views/IntroPage"
import { Route, Routes } from "react-router-dom"


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage/>} />
        <Route path="/budgets" element={<Budgets/>} />
      </Routes>
      
      
    </>
  )
}

export default App
