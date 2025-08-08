import { Clock, User } from "lucide-react";
import React from "react";
// import { Clock, User } from "lucide-react";

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="inline-block bg-red-600 text-white px-3 py-1 text-sm font-semibold rounded-full mb-4">
                            NOTÍCIA EM DESTAQUE
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            Cúpula Global do Clima chega a acordo histórico sobre redução de carbono
                        </h1>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            Líderes mundiais se comprometem com novas metas ambiciosas no que os especialistas consideram a ação climática mais significativa em décadas. O acordo inclui compromissos vinculativos de todas as principais economias.
                        </p>
                        <div className="flex items-center space-x-4 text-gray-300">
                            <div className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>Admin</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span>2 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.pexels.com/photos/3622517/pexels-photo-3622517.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Climate Summit"
                            className="w-full h-80 object-cover rounded-lg shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;