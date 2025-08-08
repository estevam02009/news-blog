import React from 'react'
// import { Search, Menu, Bell, User } from 'lucide-react'

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
                <div className='hidden md:flex items-center space-x-8'>
                    <a href='/' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Home</a>
                    <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Politica</a>
                    <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Tecnologia</a>
                    <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Negócios</a>
                    <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Esportes</a>
                    <a href='#' className='text-slate-700 hover:text-blue-600 font-medium transition-colors'>Saúde</a>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header
