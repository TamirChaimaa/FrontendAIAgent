import React, { useState, useRef, useEffect } from "react";

// Custom SVG Icons
const SendIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 2-7 20-4-9-9-4 20-7z" />
  </svg>
);

const AIIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SparklesIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l1.5 1.5L8 3m0 18l-1.5-1.5L5 21m14-18l-1.5 1.5L16 3m0 18l1.5-1.5L19 21M12 3v2m0 14v2M3 12h2m14 0h2" />
  </svg>
);

const ShoppingBagIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ChipIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const MonitorIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v1a3 3 0 006 0v-1m-6 0h6m-6 0V9a3 3 0 116 0v8.001" />
  </svg>
);

// Modern Chat Header
const ChatHeader = () => (
  <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 rounded-t-3xl lg:rounded-t-2xl">
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <AIIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              AI Assistant
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Online
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <SparklesIcon className="w-5 h-5 text-purple-500 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

// Product Card Component with full specifications
const ProductCard = ({ product }) => {
  const renderRating = (rating, reviewsCount) => {
    if (!rating) return null;
    
    return (
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {rating}/5 ({reviewsCount || 0} reviews)
        </span>
      </div>
    );
  };

  const renderSpecs = (specs) => {
    if (!specs || Object.keys(specs).length === 0) return null;

    return (
      <div className="mt-3 pt-3 border-t border-gray-200/60">
        <h6 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
          <ChipIcon className="w-3 h-3" />
          Specifications
        </h6>
        <div className="grid grid-cols-1 gap-1 text-xs">
          {specs.processor && (
            <div className="flex justify-between">
              <span className="text-gray-600">CPU:</span>
              <span className="text-gray-800 font-medium">{specs.processor}</span>
            </div>
          )}
          {specs.ram && (
            <div className="flex justify-between">
              <span className="text-gray-600">RAM:</span>
              <span className="text-gray-800 font-medium">{specs.ram}</span>
            </div>
          )}
          {specs.storage && (
            <div className="flex justify-between">
              <span className="text-gray-600">Storage:</span>
              <span className="text-gray-800 font-medium">{specs.storage}</span>
            </div>
          )}
          {specs.screen_size && (
            <div className="flex justify-between">
              <span className="text-gray-600">Screen:</span>
              <span className="text-gray-800 font-medium">{specs.screen_size}</span>
            </div>
          )}
          {specs.battery_life && (
            <div className="flex justify-between">
              <span className="text-gray-600">Battery:</span>
              <span className="text-gray-800 font-medium">{specs.battery_life}</span>
            </div>
          )}
          {specs.weight && (
            <div className="flex justify-between">
              <span className="text-gray-600">Weight:</span>
              <span className="text-gray-800 font-medium">{specs.weight}</span>
            </div>
          )}
          {specs.os && (
            <div className="flex justify-between">
              <span className="text-gray-600">OS:</span>
              <span className="text-gray-800 font-medium">{specs.os}</span>
            </div>
          )}
          {specs.keyboard && (
            <div className="flex justify-between">
              <span className="text-gray-600">Keyboard:</span>
              <span className="text-gray-800 font-medium">{specs.keyboard}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50/80 border border-gray-200/80 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]">
      {/* Product Image */}
      {product.image_url && (
        <div className="mb-3 relative overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <h5 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors line-clamp-2">
          {product.name}
        </h5>
        <ExternalLinkIcon className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0 ml-2" />
      </div>

      {/* Brand & Category */}
      <div className="flex flex-wrap gap-2 mb-2">
        {product.brand && (
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
            {product.brand}
          </span>
        )}
        {product.category && (
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            {product.category}
          </span>
        )}
      </div>

      {/* Rating */}
      {renderRating(product.rating, product.reviews_count)}

      {/* Description */}
      {product.description && (
        <p className="text-xs text-gray-600 mb-3 line-clamp-3">
          {product.description}
        </p>
      )}

      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {product.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{product.tags.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Specifications */}
      {renderSpecs(product.specs)}

      {/* Additional Info */}
      <div className="mt-3 space-y-1">
        {product.warranty && (
          <div className="text-xs text-gray-600">
            <span className="font-medium">Warranty:</span> {product.warranty}
          </div>
        )}
        {product.release_date && (
          <div className="text-xs text-gray-600">
            <span className="font-medium">Released:</span> {product.release_date}
          </div>
        )}
      </div>

      {/* Price & Action */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200/60">
        <div className="flex flex-col">
          {product.price && (
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
          )}
          {!product.available && (
            <span className="text-xs text-red-500 font-medium">Out of Stock</span>
          )}
        </div>
        <button 
          className={`px-4 py-2 text-xs rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
            product.available
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!product.available}
        >
          {product.available ? 'View Details' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};

// Enhanced Chat Message Component
const ChatMessage = ({ message }) => {
  const isAI = message.sender === "ai";
  
  return (
    <div className={`flex gap-3 sm:gap-4 ${isAI ? "justify-start" : "justify-end"} mb-4 sm:mb-6`}>
      {isAI && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
            <AIIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>
      )}
      
      <div className={`max-w-[85%] sm:max-w-[75%] lg:max-w-[65%] ${!isAI ? "order-1" : ""}`}>
        <div className={`
          relative px-4 py-3 sm:px-6 sm:py-4 rounded-3xl shadow-lg
          ${isAI 
            ? "bg-white/90 backdrop-blur-sm border border-gray-200/80 text-gray-800" 
            : "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
          }
        `}>
          {message.isTyping ? (
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-sm text-gray-500">AI is thinking...</span>
            </div>
          ) : (
            <>
              <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                {message.text}
              </p>
              
              {/* Enhanced Products Display */}
              {message.products && message.products.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200/50">
                  <div className="flex items-center gap-2 mb-4">
                    <ShoppingBagIcon className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-800">Recommended Products</h4>
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                      {message.products.length} items
                    </span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {message.products.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Extraction Display */}
              {message.contactExtraction && (
                <div className="mt-4 pt-4 border-t border-gray-200/50">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/80 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <UserIcon className="w-4 h-4 text-green-600" />
                      <h4 className="font-semibold text-green-800">Contact Information</h4>
                    </div>
                    <div className="space-y-2">
                      {message.contactExtraction.name && (
                        <div className="flex items-center gap-2 text-sm">
                          <UserIcon className="w-4 h-4 text-green-600" />
                          <span className="text-green-800">{message.contactExtraction.name}</span>
                        </div>
                      )}
                      {message.contactExtraction.email && (
                        <div className="flex items-center gap-2 text-sm">
                          <MailIcon className="w-4 h-4 text-green-600" />
                          <span className="text-green-800">{message.contactExtraction.email}</span>
                        </div>
                      )}
                      {message.contactExtraction.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <PhoneIcon className="w-4 h-4 text-green-600" />
                          <span className="text-green-800">{message.contactExtraction.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Lead Capture Message */}
              {message.leadCaptureMessage && (
                <div className="mt-4 pt-4 border-t border-gray-200/50">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-4">
                    <p className="text-sm text-blue-800">{message.leadCaptureMessage}</p>
                  </div>
                </div>
              )}
            </>
          )}
          
          {/* Timestamp */}
          <div className={`text-xs mt-2 ${isAI ? "text-gray-400" : "text-white/70"}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
      
      {!isAI && (
        <div className="flex-shrink-0 order-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
            <UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Chat Input
const ChatInput = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [inputValue]);

  return (
    <div className="sticky bottom-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 rounded-b-3xl lg:rounded-b-2xl p-4 sm:p-6">
      <div className="flex gap-3 sm:gap-4 items-end">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-50/80 border border-gray-200/80 rounded-2xl sm:rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 text-sm sm:text-base"
            rows="1"
            style={{ minHeight: '52px', maxHeight: '120px' }}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={!inputValue.trim()}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 transition-all duration-200 disabled:cursor-not-allowed"
        >
          <SendIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

// Main Component
const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef(null);
  const [leadId, setLeadId] = useState(null);
  const [leadName, setLeadName] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (userMessage) => {
    if (!userMessage || userMessage.trim() === "") return;

    const baseId = Date.now();
    const newMessage = {
      id: baseId,
      text: userMessage,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);

    const loadingMsg = {
      id: baseId + 1,
      text: "Processing your request...",
      sender: "ai",
      isTyping: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, loadingMsg]);

    try {
      const BACKEND_URL = 'https://web-production-c9b7.up.railway.app/ai/ask';
      let requestBody = { question: userMessage };
      if (leadId) requestBody.lead_id = leadId;

      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      const aiResponse = data.answer || data.response || data.message || "";

      setMessages(prev => {
        const updated = prev.filter(msg => !msg.isTyping);
        return [...updated, {
          id: baseId + 2,
          text: aiResponse,
          sender: 'ai',
          timestamp: new Date(),
          products: data.products || [],
          leadCaptureMessage: data.lead_capture_message || null,
          shouldCaptureLead: data.should_capture_lead || false,
          preliminaryLeadId: data.preliminary_lead_id,
          linkedLeadId: data.linked_lead_id,
          contactExtraction: data.contact_extraction || null,
          leadUpdated: data.lead_updated || false,
          followUpMessage: data.follow_up_message || null
        }];
      });

      if (data.contact_extraction && data.lead_updated) {
        const contactData = data.contact_extraction;
        if (contactData.name) setLeadName(contactData.name);
        if (data.linked_lead_id) setLeadId(data.linked_lead_id);
      }

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => {
        const updated = prev.filter(msg => !msg.isTyping);
        return [...updated, {
          id: Date.now(),
          text: `Connection error: ${error.message}`,
          sender: 'ai',
          timestamp: new Date()
        }];
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-100 animate-gradient-shift"></div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-5xl mx-auto p-3 sm:p-4 lg:p-6">
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl lg:rounded-2xl shadow-2xl border border-white/60 overflow-hidden min-h-[calc(100vh-1.5rem)] sm:min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] flex flex-col">
            <ChatHeader />
            
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-1">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ChatMessage message={message} />
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background: linear-gradient(45deg, #f8fafc, #e0e7ff, #ede9fe); }
          25% { background: linear-gradient(45deg, #e0e7ff, #ede9fe, #fdf2f8); }
          50% { background: linear-gradient(45deg, #ede9fe, #fdf2f8, #f0f9ff); }
          75% { background: linear-gradient(45deg, #fdf2f8, #f0f9ff, #f8fafc); }
          100% { background: linear-gradient(45deg, #f8fafc, #e0e7ff, #ede9fe); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Responsive improvements */
        @media (max-width: 640px) {
          .animate-gradient-shift {
            animation-duration: 20s;
          }
          
          .animate-float {
            animation-duration: 12s;
          }
          
          .animate-float-delayed {
            animation-duration: 15s;
          }
        }
        
        /* Enhanced scrollbar styling */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #3b82f6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default AIAssistant;