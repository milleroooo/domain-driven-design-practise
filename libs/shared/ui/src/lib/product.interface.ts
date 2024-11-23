export interface ProductBridge {
  getProduct: () => void;
  addToCart: () => void;
  removeFromCart: () => void;
  addToFavorites: () => void;
  removeFromFavorites: () => void;
}
