(function() {
  // 树节点实现
  function Node(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  // 测试树数据
  //    1
  //  2   4
  // 3
  const node = new Node(1, new Node(2, new Node(3)), new Node(4));

  // 序列化
  function serialize(root) {
    if (root === null) {
      return "#";
    }

    return `${root.val} ${serialize(root.left)} ${serialize(root.right)}`;
  }

  // 反序列化
  function deserialize(str) {
    const vals = str.split(" ");
    // 获取迭代器对象
    const iter = vals[Symbol.iterator]();

    const helper = () => {
      const val = iter.next();

      if (val.value === "#") {
        return null;
      }

      const node = new Node(parseInt(val.value));
      node.left = helper();
      node.right = helper();

      return node;
    };

    return helper();
  }

  // 测试
  console.log(deserialize(serialize(node)));
})();
