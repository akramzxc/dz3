const num = prompt ('Ведите число')
const num1 = prompt ('Ведите число')
function name(num,num1) {
    if (num < num1 ) {
        console.log(`${num} меньше чем ${num1}`);
    }
    else if  (num > num1) {
        console.log(`${num} больше чем ${num1}`);
    }
    else{
        console.log(`${num}равны${num1}`);
    }
}
name(num,num1);