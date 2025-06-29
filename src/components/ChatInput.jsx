import React, { useRef, useState } from "react";

const ChatInput = ({ onSend }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    autoResize();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    if (onSend) {
      onSend(value);
    }

    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  return (
    <div className="bg-gradient-to-r from-white/95 via-blue-50/90 to-indigo-50/90 backdrop-blur-xl border-t border-white/30 p-6">
      <form onSubmit={handleSubmit} className="flex items-end space-x-4">
        <div className="flex-1 relative group">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="w-full min-h-[70px] px-6 py-4 text-base bg-white/90 backdrop-blur-sm border-2 border-blue-200/50 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300/30 focus:border-blue-400 transition-all duration-300 resize-none placeholder-gray-500 group-hover:border-blue-300/70"
            rows="1"
          />
          {/* Decorative elements */}
          <div className="absolute top-3 right-3 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-3 left-3 w-2 h-2 bg-indigo-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <button
          type="submit"
          disabled={!value.trim()}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-semibold text-base rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 min-w-[70px] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>
      
      {/* Subtle decorative elements */}
      <div className="flex justify-center mt-4 space-x-3">
        <div className="w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default ChatInput;
