(function() {
  const test = [
    "the quick brown fox jumps over the lazy dog",
    "when the Lord closes a door somewhere He opens a window",
    ""
  ];

  function exec(str, len) {
    // 拆分字符串
    let splitArr = str.split(" ");
    // 缓冲区
    let templen = 0;
    let temp = [];
    // 结果
    let result = [];

    // 拆分计算过程
    splitArr.forEach(item => {
      // 长度符合，收入
      if (item.length <= len) {
        // 缓冲区未溢出，放入缓冲区
        if (templen + item.length <= len) {
          temp.push(item);
          templen += item.length;
        } else {
          result.push(temp.join(" "));
          templen = item.length;
          temp = [item];
        }
      }
    });

    result.push(temp.join(" "));
    return result.join(" | ");
  }

  console.log(
    `题目：给定一个只包含英文单词和空格的字符串 s 和一个整数 k，设计算法将字符串 s 分割成若干子串，每个子串的长度要小于等于 k`
  );

  test.forEach(item => {
    console.log(`测试过程：输入=> [${item}]  输出=> ${exec(item, 10)}。`);
  });
})();
