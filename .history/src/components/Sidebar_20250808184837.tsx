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
        <div className="w-64 h-full bg-white shadow-md">
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Categorias</h2>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            Tecnologia
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            Saúde
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            Entretenimento
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar