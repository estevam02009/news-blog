import React from "react";
// import { Clock, User } from "lucide-react";

const Hero: React.FC = () => {
    return (
        <div className="bg-cover bg-center h-96 relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold text-white mb-4">Bem-vindo ao News Blog</h1>
                <p className="text-lg text-white">
                    Explore as últimas notícias e artigos sobre diversas categorias.
                </p>
            </div>
        </div>
    );
};

export default Hero;