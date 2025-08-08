
import Header from "./components/Header"
import Hero from "./components/Hero"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Últimas Notícias</h2>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
