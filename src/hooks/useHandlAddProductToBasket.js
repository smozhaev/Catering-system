export const useHandleAddProductToBasket = (productID) => {
    setBasketProducts([...basketProducts, productID]);
};