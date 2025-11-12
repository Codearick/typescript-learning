interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, T2 extends Database> (val1: T, val2: T2): object {
    return {
        val1,
        val2
    }
}

// anotherFunction(1, {connection: "https:/mongodb/rey/connection", username: "RayBan", password: "djlakjsd"})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    price: number,
    author: string
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T){
        this.cart.push(product);
    }
}
