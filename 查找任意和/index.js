(function() {
  let test = [[10, 15, 3, 7], [1, 2, 4, 5], [10, 22, 1, 7]];
  let k = 17;

  function exec(arr, k) {
    let obj = {};
    arr.forEach(item => {
      obj[item] = item;
    });

    let result = false;
    arr.forEach(item => {
      if (obj[k - item]) {
        result = true;
        return false;
      }
    });

    return result;
  }

  test.forEach(item => {
    console.log(`测试过程：输入=> [${item}]  输出=> ${exec(item, k)}。`);
  });
})();
