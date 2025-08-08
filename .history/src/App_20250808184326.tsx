import { Sidebar } from "lucide-react"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Sidebar />
    </div>
  )
}

export default App
