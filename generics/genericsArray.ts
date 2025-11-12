function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3;
    return products[myIndex]; // Since the arg is array type and return type is T, we should return some value. 
}

//Generic arrow function
const getMoreSearchProducts = <T,> (products: T[]): T => {
    return products[2];
}
