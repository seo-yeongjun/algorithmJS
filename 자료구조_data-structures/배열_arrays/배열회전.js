/*
문제: 주어진 배열을 오른쪽으로 k번 회전시키는 함수를 작성하세요.

요구사항: 함수는 배열과 양의 정수 k를 인자로 받아야 합니다.
        k번 오른쪽으로 회전한 결과를 반환하세요.


예시: rotateArray([1, 2, 3, 4, 5], 2);  // 출력: [4, 5, 1, 2, 3]
     rotateArray([1, 2, 3, 4, 5], 7);  // 출력: [4, 5, 1, 2, 3]  (7 % 5 = 2번 회전과 동일)
     rotateArray([1, 2], 3);           // 출력: [2, 1]  (3 % 2 = 1번 회전)
*/

/*
배열을 k번 회전시켜 반환하는 함수

 @param {Array} arr 회전 시킬 배열
 @param {Number} k 회전시킬 횟수
 @return {Array} 회전된 배열
 */
function rotateArray(arr,k){
    let arrLength = arr.length;
    let rotateCount = k%arrLength;

    return arr.slice(-rotateCount).concat(arr.slice(0,-rotateCount));
}

console.log(rotateArray([1, 2, 3], 3));        // 출력: [1, 2, 3] (3 % 3 = 0번 회전)
console.log(rotateArray([], 5));               // 출력: []
console.log(rotateArray([1, 2, 3, 4, 5], 2));  // 출력: [4, 5, 1, 2, 3]
console.log(rotateArray([1, 2, 3, 4, 5], 7));  // 출력: [4, 5, 1, 2, 3]  (7 % 5 = 2번 회전과 동일)
console.log(rotateArray([1, 2], 3));           // 출력: [2, 1]  (3 % 2 = 1번 회전)
