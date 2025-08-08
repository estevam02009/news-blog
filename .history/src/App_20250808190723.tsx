
import Header from "./components/Header"
import Hero from "./components/Hero"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></main>
    </div>
  )
}

export default App
