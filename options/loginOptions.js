function loginOptions (){
    this.title = "Добредојде";
    this.opis = "Апликација која овозможува следење на купените производи и направените трошоци.";
    this.message = "";
}
loginOptions.prototype.poraka = function(message){
    this.message = message;
};
loginOptions.prototype.read = function (){
    return {title: this.title, description: this.opis, message:this.message};
};
module.exports = new loginOptions();