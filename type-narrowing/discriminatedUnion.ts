interface Circle{
    kind: "circle";
    radius: number;
}

interface Square{
    kind: "square";
    side: number;
}

interface Rectangle{
    kind: "rectangle";
    length: number;
    breadth: number;
}

type Shape = Circle | Square | Rectangle;

function getShape(shape: Shape){
    if(shape.kind === "circle"){
        return "It's circle";
    } 
    else if(shape.kind === "square"){
        return "It's a square";
    }
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle": return Math.PI * shape.radius **2; 
        case "square": return shape.side * shape.side;
        case "rectangle": return shape.length * shape.breadth;

        default: 
        const _defaultCheck: never = shape;
        return _defaultCheck;
    }
}