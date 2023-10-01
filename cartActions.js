// cartActions.js
export const addToCart = (productData) => {
    return {
      type: 'ADD_TO_CART',
      payload: productData,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId,
    };
  };
  