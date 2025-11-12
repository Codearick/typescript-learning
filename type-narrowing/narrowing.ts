function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide valid Id!");
        return;
    } else{
        return id.toLowerCase();
    }
}

function printAll(str: string | string[] | null){

    if(str){
        if(typeof str === "object"){
            str.forEach(element => {
                console.log(element, " ");
            });
        }
        else if(typeof str === "string"){
            console.log("String printed");
        }
    }
}