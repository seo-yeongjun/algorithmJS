// 배열에서 최댓값 찾기
// 시간 복잡도 O(n)

/*
배열에서 최댓값을 반환하는 함수

 @param {Array} arr 최댓값을 찾을 배열
 @return {Number} arr의 최댓값 반환, 문제가 있을 경우 null 반환함.
 */
function findMax(arr) {

    const len = arr.length; // 배열에서 여러번 재계산 하지 않게 하기 위해 선언

    // 타입 확인
    if (!Array.isArray(arr)) {
        return null;
    }

    //배열 길이 확인
    if(len === 0) {
        return null;
    }

    let max = arr[0];

    // 순회하며 최댓값 찾기
    for (let i = 1; i< len; i++){ // 초기값을 [0] 으로 설정했음으로 [1] 부터 시작
        if( arr[i] > max ) max = arr[i];
    }

    return max;
}

//tests
console.log(findMax([3, 5, 7, 2, 8, 1]));  // 출력: 8
console.log(findMax([-1, -5, -3]));        // 출력: -1
console.log(findMax([]));                  // 출력: null
console.log(findMax([3])); //   null    is // 출력: 3
