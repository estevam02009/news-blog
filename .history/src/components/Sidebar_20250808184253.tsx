import React from "react";

const Sidebar: React.FC = () => {
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