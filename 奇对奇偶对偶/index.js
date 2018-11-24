(function() {
  const test = [[1, 2, 5, 7, 3, 4, 6, 8, 9, 10], [1, 2]];

  function exec(arr) {
    let even = 0;
    let odd = 1;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item % 2 === 0) {
        result[even] = item;
        even += 2;
      } else {
        result[odd] = item;
        odd += 2;
      }
    }

    return result;
  }

  console.log(
    `一个长度为偶数 n 的数组，其中奇数元素和偶数元素各占一半。设计算法重新安排数组中的元素，使得奇数元素放在奇数下标单元，偶数元素放在偶数下标单元。`
  );

  test.forEach(item => {
    console.log(`测试过程：输入=> [${item}]  输出=> ${exec(item)}。`);
  });
})();
