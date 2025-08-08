import React from 'react';
import { TrendingUp, Calendar } from 'lucide-react';

const Sidebar: React.FC = () => {
    const trendingTopics = [
        'Climate Change Summit',
        'Tech Industry Updates',
        'Global Economic Outlook',
        'Healthcare Innovation',
        'Space Exploration',
    ];


    const popularArticles = [
        {
            title: 'New AI Breakthrough Changes Everything',
            readTime: '5 min read',
            views: '15.2k'
        },
        {
            title: 'Market Analysis: Q4 Predictions',
            readTime: '8 min read',
            views: '12.8k'
        },
        {
            title: 'Sustainable Energy Revolution',
            readTime: '6 min read',
            views: '11.5k'
        }
    ];

    return (
        <aside className="lg:w-80">
            <div className="space-y-8">
                {/* Trending Topics */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center space-x-2 mb-4">
                        <TrendingUp className="h-5 w-5 text-red-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Trending Topics</h3>
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
                        <h3 className="text-lg font-semibold text-gray-900">Most Popular</h3>
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
            </div>
        </aside>
    );
};

export default Sidebar;