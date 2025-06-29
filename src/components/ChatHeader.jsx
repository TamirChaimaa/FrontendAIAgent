import React from 'react';

const ChatHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-6 shadow-lg relative overflow-hidden border-b border-white/20">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -translate-y-20 translate-x-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full translate-y-16 -translate-x-16 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/20 rounded-full -translate-x-12 -translate-y-12 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/15 rounded-full blur-lg animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/30">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Pulsing ring around avatar */}
            <div className="absolute inset-0 w-14 h-14 border-2 border-white/40 rounded-full animate-ping"></div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">AI Assistant Pro</h1>
            <p className="text-blue-100 text-base mt-1 flex items-center">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Online and ready to help you
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-100 font-medium">Online</span>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
