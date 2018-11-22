(function() {
  const test = [["dog", "deer", "deal"]];

  function exec(arr, key) {
    // 一般解法 或者使用 Tire 结构，效率更高
    return arr.filter(item => {
      return ~item.indexOf(key);
    });
  }

  test.forEach(item => {
    console.log(`测试过程：输入=> [${item}]  输出=> ${exec(item, "de")}。`);
  });
})();
