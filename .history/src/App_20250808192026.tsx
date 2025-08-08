
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
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  All
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Technology
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Business
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Science
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
          
          <Sidebar />
        </div>
      </main>
    </div>
  )
}

export default App
