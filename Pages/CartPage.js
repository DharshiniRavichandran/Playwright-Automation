exports.CartPage = class CartPage {
    constructor(page){
        this.page = page;
        this.noOfProducts = "#tbodyid tr td:nth-child(2)";  
    }
    async checkProductInCart(productName){
        const productListInCart = await this.page.$$(this.noOfProducts);
        for(const product of productListInCart){
            console.log(await product.textContent())
            if(productName===await product.textContent())
            {
             return true;
             break;
            }
        }
    }
}