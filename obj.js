function deepEqual(obj1, obj2) {
    
    const sorted1 = Object.entries(obj1).sort();
    const sorted2 = Object.entries(obj2).sort();

    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i][0] !== sorted2[i][0] || sorted1[i][1] !== sorted2[i][1]) {
            return false;
        }
    }

    return true;
}

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

console.log(deepEqual(obj1, obj2)); 
