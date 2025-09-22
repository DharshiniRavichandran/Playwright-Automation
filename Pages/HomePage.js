exports.HomePage = class HomePage {
    constructor(page){
        this.page = page;
        this.productList = "//a[@class='hrefch']"; //#tbodyid div div div a
        this.addToCartButton = "//a[contains(text(), 'Add to cart')]";
        this.cart = "#cartur";
    }

    async addProductToCart(productName){
        const productList = await this.page.$$(this.productList);
        for(const product of productList){
            if(productName===await product.textContent()){
                await product.click();
                break;
            }
        }
        await this.page.on("Dialog", async({dialog})=>{
        await expect(dialog.type()).toContain('alert');
        await expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    })
    await this.page.locator(this.addToCartButton).click();

}

    async gotoCart()
    {
        await this.page.locator(this.cart).click();
    }

}