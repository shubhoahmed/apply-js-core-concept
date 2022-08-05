function summationOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let value = numbers[index];
        sum = sum + value;
    }
    return sum;
}

function getOddNumberOfAnArray(numbers) {
    let oddNumers = [];
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element % 2 === 1) {
            oddNumers.push(element);
        }
    }
    return oddNumers;

}

let myArray = [65, 21, 84, 62, 38, 79, 64, 13, 20];
const oddNumers = getOddNumberOfAnArray(myArray);
console.log(oddNumers);
// const totalSumOfArray = summationOfArray(myArray);
// console.log(totalSumOfArray);
const totalSumOfOddNumbers = summationOfArray(oddNumers);
console.log('Sum of odd number: ', totalSumOfOddNumbers);


