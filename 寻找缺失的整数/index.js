(function() {
  const test = [[3, 4, -1, 1], [1, 2, -1, 0], []];

  function exec(arr) {
    // 需要正整数，过滤掉小于等于0
    let filterArr = arr.filter(item => item > 0);
    // 下标从0开始，加上0便于计算
    filterArr = [0].concat(filterArr);
    // 最大值默认为数组长度
    let result = filterArr.length;
    // 循环数组长度，1.2.3.4.5 找出不在场的值，赋值，弹出即为正确结果
    for (let i = 0; i < filterArr.length; i++) {
      if (!~filterArr.indexOf(i)) {
        result = i;
        break;
      }
    }
    // 疯狂输出....
    return result;
  }

  console.log(
    `题目：给定一个整数数组，在线性时间复杂度和常数空间复杂度内，找到数组中第一个缺失的正整数。换句话说，找到数组中不存在的最小正整数。数组中可能会包含重复的数字和负数。`
  );

  test.forEach(item => {
    console.log(`测试过程：输入=> [${item}]  输出=> ${exec(item)}。`);
  });
})();
