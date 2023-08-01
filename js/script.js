const p1 = {
    name: 'computador',
    price: 3000.3,
    quantity: 2

}

// construtora - deixar métodos de fora náo criar instâncias desnecessárias
const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    
    //mesmo nome - prioridade ao label interno - acrescentar CALL na chamada e escolher
    // Product.prototype.label.call(p2)

    this.label = function(){
        return 'Dados (funcao interna): ' + this.name + ', ' + this.price.toFixed(2)
    }
}

// adding property
Product.prototype.total = function(){
    return this.price * this.quantity;
}

Product.prototype.add = function(amount){
    this.quantity += amount
}

Product.prototype.remove = function(amount){
    if(this.quantity >= amount){
        this.quantity -= amount;
    }else{
        console.log('nada a remover')
    }
}

Product.prototype.label = function(){
    return 'Dados: ' + this.name + ', ' + this.price.toFixed(2)
}

const p2 = new Product('monitor', 800.2, 10)
const p3 = new Product('mouse', 50.1, 4)
const p4 = new Product('cadeira gamer', 1100.8, 3)