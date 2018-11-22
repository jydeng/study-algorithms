(function() {
  const test = [[2, 4, 6, 2, 5], [5, 1, 10, 5, 10, 11]];

  function exec(arr) {
    // 若只有两个元素，输出其中最大值
    if (arr.length <= 2) {
      return Math.max(0, ...arr);
    }

    // 声明cache缓存不相邻元素累加的最大值
    let cache = [];

    cache[0] = Math.max(0, arr[0]);
    cache[1] = Math.max(cache[0], arr[1]);

    for (let index = 2; index < arr.length; index++) {
      const item = arr[index];
      cache[index] = Math.max(item + cache[index - 2], cache[index - 1]);
    }

    return cache.pop();
  }

  test.forEach(item => {
    console.log(`测试过程：输入=> [${item}]  输出=> ${exec(item)}。`);
  });
})();
