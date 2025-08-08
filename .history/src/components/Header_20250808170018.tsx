import React from 'react'
import { Search, Menu, Bell, User } from 'lucide-react'

const Header: React.FC = () => {
    return (
        <header className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* LOGO */}
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-bold text-slate-800'>News Blog</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center space-x-8'>
                        <a href='/' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Home</a>
                        <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Politica</a>
                        <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Tecnologia</a>
                        <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Negócios</a>
                        <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Esportes</a>
                        <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Saúde</a>
                    </nav>

                    {/* Pesquisa e Ações */}
                    <div className='flex items-center space-x-4'>
                        <div className='relative hidden sm:block'>
                            <Search className='absolute top-1/2 left-3 transform -translate-y-1/2  h-4 w-4 text-gray-400' />
                            <input
                                type='text'
                                placeholder='Pesquisar...'
                                className='pl-8 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
