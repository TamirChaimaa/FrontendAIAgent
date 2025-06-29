import React from "react";

const ChatMessage = ({ message, currentPriceCriteria, checkPriceMatch, onShowLeadForm }) => {
  const isAI = message.sender === "ai";
  const isTyping = message.isTyping;

  // Helper function to validate image URL
  const isValidImageUrl = (url) => {
    if (!url) return false;
    if (typeof url !== 'string') return false;
    if (url.trim() === '') return false;
    
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      // If it's a relative URL or invalid URL, we'll still try to load it
      return url.startsWith('/') || url.startsWith('./') || url.startsWith('../');
    }
  };

  // Helper function to get fallback display style
  const getFallbackDisplay = (imageUrl) => {
    if (!imageUrl || !isValidImageUrl(imageUrl)) {
      return 'flex';
    }
    return 'none';
  };

  // Helper function to get product icon based on category
  const getProductIcon = (category, name) => {
    const lowerCategory = (category || '').toLowerCase();
    const lowerName = (name || '').toLowerCase();
    
    if (lowerCategory.includes('laptop') || lowerName.includes('laptop') || lowerName.includes('computer')) {
      return (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
        </svg>
      );
    }
    
    if (lowerCategory.includes('phone') || lowerName.includes('phone') || lowerName.includes('mobile')) {
      return (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      );
    }
    
    // Default product icon
    return (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <div
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      } animate-fade-in-up`}
    >
      <div
        className={`max-w-[95%] px-5 py-4 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden group hover:shadow-xl ${
          isAI
            ? "bg-gradient-to-br from-white via-blue-50/90 to-indigo-50/90 border border-blue-200/50 text-gray-800"
            : "bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white"
        }`}
      >
        {/* Enhanced decorative background elements */}
        {isAI && (
          <>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full -translate-y-12 translate-x-12 blur-xl animate-pulse"></div>
            <div
              className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 rounded-full translate-y-10 -translate-x-10 blur-lg animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </>
        )}
        {!isAI && (
          <>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/15 to-blue-100/15 rounded-full -translate-y-10 -translate-x-10 blur-xl animate-pulse"></div>
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full translate-y-8 translate-x-8 blur-lg animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </>
        )}

        <div className="relative z-10 flex items-start space-x-4">
          {isAI && (
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* Pulsing ring around AI avatar */}
                <div className="absolute inset-0 w-10 h-10 border border-blue-300/50 rounded-full animate-ping"></div>
              </div>
            </div>
          )}

          <div className="flex-1 space-y-4">
            {/* Text message */}
            <div className="space-y-2">
              {isTyping ? (
                <div className="flex items-center space-x-2">
                  <span className="text-base font-medium text-gray-600">{message.text}</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              ) : (
                <p className="text-base leading-relaxed font-medium">{message.text}</p>
              )}
            </div>

            {/* Products section - integrated within the message */}
            {isAI && message.products && message.products.length > 0 && (
              <div className="mt-6 p-5 bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90 rounded-xl border border-blue-200/50 shadow-lg backdrop-blur-sm">
                {/* Products header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">
                        Discoveries for you! ✨
                      </h4>
                      <p className="text-sm text-gray-600">
                        Based on your request, here are the best matches:
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {currentPriceCriteria && (
                      <div className="text-sm text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-blue-300 shadow-sm">
                        <span className="font-semibold">💰 Budget:</span> {
                          currentPriceCriteria.type === 'range' 
                            ? `${currentPriceCriteria.min}€ - ${currentPriceCriteria.max}€`
                            : currentPriceCriteria.type === 'max'
                            ? `≤ ${currentPriceCriteria.max}€`
                            : `≥ ${currentPriceCriteria.min}€`
                        }
                      </div>
                    )}
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-blue-300 shadow-sm">
                      <span className="text-sm font-semibold text-gray-700">
                        🎯 {message.products.length} product{message.products.length > 1 ? 's' : ''} found
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Products grid - Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {message.products
                    .filter(product => {
                      if (!currentPriceCriteria) return true;
                      return checkPriceMatch(product, currentPriceCriteria);
                    })
                    .map((product, productIndex) => {
                      const productPrice = parseFloat(product.price || 0);
                      
                      return (
                        <div key={product.id || productIndex} 
                             className="group product-card bg-white rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full min-h-[600px] hover:scale-105">
                          
                          {/* Product image */}
                          <div className="relative product-image h-56 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden flex-shrink-0">
                            {product.image_url && isValidImageUrl(product.image_url) ? (
                              <>
                                <img 
                                  src={product.image_url} 
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  loading="lazy"
                                  onError={(e) => {
                                    console.log('Image failed to load:', product.image_url);
                                    e.target.style.display = 'none';
                                    const fallback = e.target.nextElementSibling;
                                    if (fallback) {
                                      fallback.style.display = 'flex';
                                    }
                                  }}
                                  onLoad={(e) => {
                                    console.log('Image loaded successfully:', product.image_url);
                                    e.target.style.display = 'block';
                                    const fallback = e.target.nextElementSibling;
                                    if (fallback) {
                                      fallback.style.display = 'none';
                                    }
                                  }}
                                />
                                {/* Fallback display */}
                                <div 
                                  className="w-full h-full flex items-center justify-center"
                                  style={{ display: getFallbackDisplay(product.image_url) }}
                                >
                                  <div className="text-center">
                                    {getProductIcon(product.category, product.name)}
                                    <p className="text-gray-500 text-sm mt-2">{product.name}</p>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="text-center">
                                  {getProductIcon(product.category, product.name)}
                                  <p className="text-gray-500 text-sm mt-2">{product.name}</p>
                                </div>
                              </div>
                            )}
                            
                            {/* Price and Add to Cart horizontally aligned */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                              <span className="text-2xl font-bold text-blue-600 bg-white/90 px-3 py-1 rounded-full shadow">{productPrice.toFixed(2)}€</span>
                              <button 
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex-shrink-0 ${
                                  product.available
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                                disabled={!product.available}
                                onClick={() => {
                                  if (product.available) {
                                    console.log('Add to cart:', product.name);
                                    alert(`🎉 Great! "${product.name}" has been added to your cart!`);
                                  }
                                }}
                              >
                                {product.available ? 'Add to Cart' : 'Unavailable'}
                              </button>
                            </div>

                            {/* Availability badge */}
                            <div className="absolute top-3 left-3">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                product.available
                                  ? 'bg-green-500/90 text-white border-green-400' 
                                  : 'bg-red-500/90 text-white border-red-400'
                              }`}>
                                {product.available ? 'Available' : 'Unavailable'}
                              </span>
                            </div>

                            {/* Category badge */}
                            {product.category && (
                              <div className="absolute top-3 right-3">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/90 text-white border-blue-400">
                                  {product.category}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Product details */}
                          <div className="flex-1 p-5 flex flex-col">
                            {/* Brand and name */}
                            {product.brand && (
                              <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">
                                {product.brand}
                              </div>
                            )}
                            <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                              {product.name}
                            </h3>
                            
                            {/* Description */}
                            {product.description && (
                              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                {product.description}
                              </p>
                            )}

                            {/* Complete Specifications */}
                            {product.specs && Object.keys(product.specs).length > 0 && (
                              <div className="mb-4 p-3 product-specs bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                                <h6 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                                  </svg>
                                  Technical Specifications
                                </h6>
                                <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
                                  {product.specs.processor && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-20">CPU:</span>
                                      <span className="ml-2 truncate">{product.specs.processor}</span>
                                    </div>
                                  )}
                                  {product.specs.ram && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-20">RAM:</span>
                                      <span className="ml-2">{product.specs.ram}</span>
                                    </div>
                                  )}
                                  {product.specs.storage && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-20">Storage:</span>
                                      <span className="ml-2 truncate">{product.specs.storage}</span>
                                    </div>
                                  )}
                                  {product.specs.screen_size && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-20">Screen:</span>
                                      <span className="ml-2">{product.specs.screen_size}</span>
                                    </div>
                                  )}
                                  {product.specs.battery_life && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-20">Battery:</span>
                                      <span className="ml-2">{product.specs.battery_life}</span>
                                    </div>
                                  )}
                                  {product.specs.weight && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-20">Weight:</span>
                                      <span className="ml-2">{product.specs.weight}</span>
                                    </div>
                                  )}
                                  {product.specs.os && (
                                    <div className="flex items-center">
                                      <span className="font-medium w-20">OS:</span>
                                      <span className="ml-2">{product.specs.os}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Tags */}
                            {product.tags && product.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4 product-tags">
                                {product.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex} className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs rounded-full border border-blue-200 font-medium">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Additional Details */}
                            <div className="mb-4 space-y-2">
                              {product.warranty && (
                                <div className="flex items-center text-sm text-gray-600">
                                  <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="font-medium">Warranty:</span>
                                  <span className="ml-1 truncate">{product.warranty}</span>
                                </div>
                              )}
                              {product.release_date && (
                                <div className="flex items-center text-sm text-gray-600">
                                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                  </svg>
                                  <span className="font-medium">Released:</span>
                                  <span className="ml-1">{new Date(product.release_date).toLocaleDateString('en-US')}</span>
                                </div>
                              )}
                            </div>
                            
                            {/* Price, Rating and button */}
                            <div className="flex items-center justify-between mt-auto">
                              <div className="min-w-0 flex-1">
                                <span className="text-2xl font-bold text-blue-600">
                                  {productPrice.toFixed(2)}€
                                </span>
                                {product.rating && (
                                  <div className="flex items-center mt-1">
                                    <svg className="w-4 h-4 text-yellow-400 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-sm text-gray-600 truncate">
                                      {product.rating}/5 ({product.reviews_count || 0} reviews)
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                
                {/* Message if no products match criteria */}
                {currentPriceCriteria && message.products.filter(product => checkPriceMatch(product, currentPriceCriteria)).length === 0 && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">No products found 😔</h3>
                    <p className="text-sm text-gray-600">
                      No products in your price range ({currentPriceCriteria.min}€ - {currentPriceCriteria.max}€)
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;