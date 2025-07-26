import React, { useState, useEffect } from 'react';
import { TrendingUp, Eye, Shield, AlertTriangle, CheckCircle, BarChart3, Globe, Users, Clock, ArrowUp, ArrowDown, Play, Pause } from 'lucide-react';

const Xpresseye = () => {
  const [activeTab, setActiveTab] = useState('trends');
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock data for trends
  const [trendingTopics] = useState([
    { id: 1, topic: '#ClimateAction', posts: 1240000, change: 15.2, platform: 'Twitter', sentiment: 'positive' },
    { id: 2, topic: 'AI Revolution', posts: 987000, change: -3.1, platform: 'LinkedIn', sentiment: 'neutral' },
    { id: 3, topic: '#TechInnovation', posts: 756000, change: 8.7, platform: 'Instagram', sentiment: 'positive' },
    { id: 4, topic: 'Cryptocurrency', posts: 654000, change: -12.4, platform: 'Reddit', sentiment: 'negative' },
    { id: 5, topic: '#HealthTech', posts: 432000, change: 23.8, platform: 'Twitter', sentiment: 'positive' }
  ]);

  const [newsAnalysis] = useState([
    {
      id: 1,
      headline: "Major Tech Company Announces Revolutionary AI Breakthrough",
      source: "TechNews Daily",
      credibility: 94,
      factCheck: "verified",
      engagement: 45600,
      sentiment: "positive",
      category: "Technology"
    },
    {
      id: 2,
      headline: "Scientists Discover New Energy Source That Could Change Everything",
      source: "Science Tribune",
      credibility: 67,
      factCheck: "disputed",
      engagement: 23400,
      sentiment: "neutral",
      category: "Science"
    },
    {
      id: 3,
      headline: "Breaking: Global Climate Summit Reaches Historic Agreement",
      source: "Environmental Watch",
      credibility: 89,
      factCheck: "verified",
      engagement: 78900,
      sentiment: "positive",
      category: "Environment"
    },
    {
      id: 4,
      headline: "Mysterious Phenomenon Spotted in Multiple Cities Worldwide",
      source: "Daily Buzz",
      credibility: 34,
      factCheck: "false",
      engagement: 156700,
      sentiment: "negative",
      category: "General"
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getPlatformColor = (platform) => {
    const colors = {
      'Twitter': 'bg-blue-500',
      'Instagram': 'bg-pink-500',
      'LinkedIn': 'bg-blue-700',
      'Reddit': 'bg-orange-500',
      'Facebook': 'bg-blue-600'
    };
    return colors[platform] || 'bg-gray-500';
  };

  const getSentimentColor = (sentiment) => {
    const colors = {
      'positive': 'text-green-400',
      'negative': 'text-red-400',
      'neutral': 'text-yellow-400'
    };
    return colors[sentiment] || 'text-gray-400';
  };

  const getCredibilityColor = (score) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Eye className="h-8 w-8 text-purple-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Xpresseye
                </h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">{currentTime.toLocaleTimeString()}</span>
                </div>
                <button
                  onClick={() => setIsLive(!isLive)}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all ${
                    isLive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}
                >
                  {isLive ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                  <span className="text-sm">{isLive ? 'Live' : 'Paused'}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'trends', label: 'Social Trends', icon: TrendingUp },
                { id: 'news', label: 'News Analysis', icon: Shield },
                { id: 'insights', label: 'Insights', icon: BarChart3 }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 px-4 py-4 border-b-2 transition-all ${
                    activeTab === id
                      ? 'border-purple-400 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'trends' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Active Trends', value: '2.4M', change: '+12%', icon: TrendingUp },
                  { label: 'Global Reach', value: '156M', change: '+8%', icon: Globe },
                  { label: 'Engagement Rate', value: '34.2%', change: '+5%', icon: Users },
                  { label: 'Verified Sources', value: '89%', change: '+2%', icon: CheckCircle }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                        <p className="text-green-400 text-sm mt-1">{stat.change}</p>
                      </div>
                      <stat.icon className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Trending Topics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="p-6 border-b border-white/10">
                  <h2 className="text-xl font-bold flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-purple-400" />
                    <span>Trending Topics</span>
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {trendingTopics.map((trend) => (
                    <div key={trend.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${getPlatformColor(trend.platform)}`}></div>
                        <div>
                          <h3 className="font-semibold">{trend.topic}</h3>
                          <p className="text-sm text-gray-400">{formatNumber(trend.posts)} posts • {trend.platform}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center space-x-1 ${trend.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {trend.change > 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                          <span className="font-semibold">{Math.abs(trend.change)}%</span>
                        </div>
                        <p className={`text-sm ${getSentimentColor(trend.sentiment)}`}>
                          {trend.sentiment}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="space-y-8">
              {/* News Analysis Header */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Real-Time News Analysis</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  AI-powered fact-checking and credibility scoring for breaking news stories
                </p>
              </div>

              {/* News Cards */}
              <div className="grid gap-6">
                {newsAnalysis.map((news) => (
                  <div key={news.id} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/15 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{news.headline}</h3>
                        <p className="text-gray-400 text-sm mb-3">Source: {news.source} • {news.category}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                          news.factCheck === 'verified' ? 'bg-green-500/20 text-green-400' :
                          news.factCheck === 'disputed' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {news.factCheck === 'verified' ? <CheckCircle className="h-3 w-3" /> :
                           news.factCheck === 'disputed' ? <AlertTriangle className="h-3 w-3" /> :
                           <AlertTriangle className="h-3 w-3" />}
                          <span className="capitalize">{news.factCheck}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-400">Credibility:</span>
                          <span className={`font-semibold ${getCredibilityColor(news.credibility)}`}>
                            {news.credibility}%
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-400">Engagement:</span>
                          <span className="font-semibold">{formatNumber(news.engagement)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-400">Sentiment:</span>
                          <span className={`font-semibold ${getSentimentColor(news.sentiment)}`}>
                            {news.sentiment}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Platform Insights</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Deep analytics and patterns across social media platforms
                </p>
              </div>

              {/* Insight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                    <span>Platform Distribution</span>
                  </h3>
                  <div className="space-y-4">
                    {[
                      { platform: 'Twitter', percentage: 35, color: 'bg-blue-500' },
                      { platform: 'Instagram', percentage: 28, color: 'bg-pink-500' },
                      { platform: 'LinkedIn', percentage: 20, color: 'bg-blue-700' },
                      { platform: 'Reddit', percentage: 17, color: 'bg-orange-500' }
                    ].map((item) => (
                      <div key={item.platform} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.platform}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${item.color}`}
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-400 w-10">{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-green-400" />
                    <span>Fact-Check Summary</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg">
                      <span className="text-green-400 font-medium">Verified News</span>
                      <span className="text-2xl font-bold text-green-400">67%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-500/20 rounded-lg">
                      <span className="text-yellow-400 font-medium">Under Review</span>
                      <span className="text-2xl font-bold text-yellow-400">21%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-500/20 rounded-lg">
                      <span className="text-red-400 font-medium">Disputed/False</span>
                      <span className="text-2xl font-bold text-red-400">12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Xpresseye;
