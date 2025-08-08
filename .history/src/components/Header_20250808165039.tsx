import React from 'react'
// import { Search, Menu, Bell, User } from 'lucide-react'

const Header: React.FC = () => {
    return (
        <header className='bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50'>
            <div>
                <div>
                    {/* LOGO */}
                    <div>
                        <h1>News Blog</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
