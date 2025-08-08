import React from "react";
// import { Clock, User } from "lucide-react";

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-full mb-4">
                            ÚLTIMAS NOTÍCIAS
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            Cúpula Global do Clima chega a acordo histórico sobre redução de carbono
                        </h1>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            Líderes mundiais se comprometem com novas metas ambiciosas no que os especialistas consideram a ação climática mais significativa em décadas. O acordo inclui compromissos vinculativos de todas as principais economias.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;