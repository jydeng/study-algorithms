(async () => {
  const obj = {
    selector: { to: { toutiao: "FE Coder" } },
    target: [1, 2, { name: "byted" }]
  };

  // 处理参数，...捕获第二到n个参数
  function get(data, ...args) {
    return args.map(item => {
      // 这里很巧妙的利用了Function构造函数
      // 当然用eval(`data.${item}`);也是没有问题的，就是构建的时候会报错而且不太符合规范
      // new Function 在Vue等框架中也有大量使用, 比较推荐
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function
      return new Function("data", `try{ return data.${item}}catch(e){}`)(data);
    });
  }

  console.log(get(obj, "selector.to.toutiao", "target[0]", "target[2].name"));
})();
