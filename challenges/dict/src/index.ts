export interface Dict<T>{
    [ key: string] : T | undefined
}

// Array.prototype.map, but for Dict
export function mapDict<T, S> (dict : Dict<T>, fnc : (list : T) => S ) : Dict<S> {
    const objOut:Dict<S> = {}

    Object.keys(dict).forEach((dictKey) => {
        const thisItem = dict[dictKey];    
        if(typeof thisItem !== 'undefined') {
            objOut[dictKey] = fnc(thisItem);
        }
        
    });

    return objOut;
}

// Array.prototype.reduce, but for Dict
export function reduceDict() {
}


const fileExtensions = {
    typeScript : ['ts'],
    javaScript : ['js'],
    jpeg : ['jpg','jpeg'],
    html : ['html', 'htm']
}
console.log(mapDict(fileExtensions, (ext) => {
    return ext.map(el => `*.${el}`).join(', ');
}));

