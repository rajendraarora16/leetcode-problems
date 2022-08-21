/**
 * 
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    

    Example 1:

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    Example 2:

    Input: strs = [""]
    Output: [[""]]
    Example 3:

    Input: strs = ["a"]
    Output: [["a"]]
 */
 
 let sortJointFun = function(str) { 
    return str && str.split('').sort().join('');
}

let groupAnagrams = function(strs) {
    let hashMapUh = {};
    if(strs == "" || strs.length === 0) {
        return [[""]];
    }

    let i = 0;
    while(i < strs.length) {
        let groupArr = [];
        let j = 0;
        if(sortJointFun(strs[i]) === sortJointFun(strs[i+1])) {
            groupArr.push(strs[i]);
            
        }
        while( j < strs.length) {
            if(sortJointFun(strs[i]) === sortJointFun(strs[j])) {
                groupArr.push(strs[j]);
            }
            j++;
        }
        hashMapUh[sortJointFun(strs[i])] = groupArr;
        i++;
    }
    return Object.values(hashMapUh);
};
