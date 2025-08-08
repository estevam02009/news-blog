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
        <div className="lg:w-80"></div>
    );
};

export default Sidebar