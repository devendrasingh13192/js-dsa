function mergeTwoObjs(target,source){
    const result = {...target};

    for(const key in source){
        if(!(key in result)){
            result[key] = source[key];
        }
    }
    return result;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, c: 30, d: 40 };

console.log(mergeObjectsNoOverwrite(obj1, obj2));