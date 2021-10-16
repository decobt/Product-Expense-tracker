function profileOptions (){
    this.title = "Почетна страна";
    this.opis = "Почетна страна на вашиот профил.";
    this.message = "";
    this.products = new Array();
    this.maxPage = null;
    this.currentPage = null;
    this.user = new Array();
}
profileOptions.prototype.poraka = function(message){
    this.message = message;
};
profileOptions.prototype.addProducts = function(products){
    this.products = products;
};
profileOptions.prototype.addmaxPage = function(maxPage){
    this.maxPage = maxPage;
};
profileOptions.prototype.addcurrentPage = function(currentPage){
    this.currentPage = currentPage;
};
profileOptions.prototype.adduser = function(user){
    this.user = user;
};
profileOptions.prototype.read = function (){
    return {title: this.title, description: this.opis, message:this.message, products: this.products, maxPage: this.maxPage, currentPage:this.currentPage, user: this.user};
};
module.exports = new profileOptions();