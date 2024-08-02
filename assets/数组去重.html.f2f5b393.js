import{_ as n,o as t,c as r,b as e}from"./app.ace0dae9.js";const a={},s=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`
function removeDuplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }

  return result;
}

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);  // \u8F93\u51FA\uFF1A[1, 2, 3, 4, 5]
`)])],-1),l=[s];function c(o,i){return t(),r("div",null,l)}var _=n(a,[["render",c],["__file","\u6570\u7EC4\u53BB\u91CD.html.vue"]]);export{_ as default};
