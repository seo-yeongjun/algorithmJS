
/*
배열에서 중복된 값을 제거하여 반환하는 함수 V1 시간복잡도 O(n^2)

 @param {Array} arr 중복값을 제거할 배열
 @return {Array} 중복값이 제거된 배열
 */
function removeDuplicatesV1(arr){
    const len = arr.length;
    const returnArr = [];

    for(let i = 0; i<len; i++) {
        let target = arr[i];
        let hasDuplicate = false;
        for(let j = 0; j < returnArr.length; j++) {
            if(returnArr[j] === target) {
                hasDuplicate = true;
                break;
            }
        }

        if(!hasDuplicate) {
            returnArr.push(target);
        }
    }

    console.log(returnArr);
    return returnArr;
}

removeDuplicatesV1([1, 2, 2, 3, 4, 4, 5]);  // 출력: [1, 2, 3, 4, 5]
removeDuplicatesV1(['a', 'b', 'a', 'c', 'b']);  // 출력: ['a', 'b', 'c']
removeDuplicatesV1([]);  // 출력: []

// 배열에서 중복값 제거
// 시간복잡도 O(n)

/*
배열에서 중복된 값을 제거하여 반환하는 함수 V1 시간복잡도 O(n)

 @param {Array} arr 중복값을 제거할 배열
 @return {Array} 중복값이 제거된 배열
 */
function removeDuplicatesV2(arr){
    const len = arr.length;
    const seenCheck = {};
    const returnArr = [];

    for(let i = 0; i<len; i++) {
        if(!seenCheck[arr[i]]){
            returnArr.push(arr[i]);
            seenCheck[arr[i]] = true;
        }
    }

    console.log(returnArr);
    return returnArr;
}

removeDuplicatesV2([0, 1, 2, 0]);
removeDuplicatesV2([undefined,undefined,"", "a", "b", ""]);


