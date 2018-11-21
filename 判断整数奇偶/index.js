(function() {
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 调用彼此达到目的，这种数据类型或者函数之间的互相定义称之为 互递归。
  function is_even(n) {
    if (n === 0) {
      return true;
    } else {
      return is_odd(n - 1);
    }
  }

  function is_odd(n) {
    if (n === 0) {
      return false;
    } else {
      return is_even(n - 1);
    }
  }

  console.log(
    `实现 is_even(n) 和 is_odd(n) 函数，判断正整数是否为偶数或者奇数，只能使用减法 - 和判定相等 == 操作符`
  );

  test.forEach(item => {
    console.log(`测试过程：输入=> [${item}]  输出=> ${is_even(item)}。`);
  });

  test.forEach(item => {
    console.log(`测试过程：输入=> [${item}]  输出=> ${is_odd(item)}。`);
  });
})();
