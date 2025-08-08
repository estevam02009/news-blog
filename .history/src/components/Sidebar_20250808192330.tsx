import { TrendingUp, Calendar } from "lucide-react";
import React from "react";

const Sidebar: React.FC = () => {

    const trendingTopics = [
        'Cúpula sobre Mudanças Climáticas',
        'Atualizações da Indústria de Tecnologia',
        'Perspectivas Econômicas Globais',
        'Inovação em Saúde',
        'Exploração Espacial',
    ]

    const popularArticles = [
        {
            title: 'Novo avanço da IA muda tudo',
            readTime: '5 minutos de leitura',
            views: '12.8k'
        },
        {
            title: 'Análise de Mercado: Previsões para o 4º Trimestre',
            readTime: '8 minutos de leitura',
            views: '18.2k'
        },
        {
            title: 'Revolução da Energia Sustentável',
            readTime: '6 minutos de leitura',
            views: '12.8k'
        },
    ]

    return (
        <aside className="lg:w-80">
            <div className="space-y-8">
                {/* Trending Topics */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                    <h3 className="text-lg font-semibold text-gray-900">Tendências do Momento</h3>
                </div>
                <div className="space-y-3">
                    {trendingTopics.map((topic, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                                #{topic.replace(/\s+/g, '')}
                            </span>
                            <span className="text-sm text-gray-500">#{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <h3 className="text-lg font-semibold text-gray-900">Mais populares</h3>
                </div>
                <div className="space-y-4">
                    {popularArticles.map((article, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                            <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer transition-colors mb-2">
                                {article.title}
                            </h4>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{article.readTime}</span>
                                <span>{article.views} views</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-blue-100 mb-4 text-sm">Get the latest news delivered to your inbox daily.</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300"
            />
            <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        </aside>
    );
};

export default Sidebar