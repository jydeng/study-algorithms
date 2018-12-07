## 题目

实现一个 get 函数，满足以下要求：
难点主要在于 target[0]这种下标如何处理

```javascript
const obj = {
  selector: { to: { toutiao: "FE Coder" } },
  target: [1, 2, { name: "byted" }]
};

get(obj, "selector.to.toutiao", "target[0]", "target[2].name");

// [ 'FE Coder', 1, 'byted']
```

> 来源：https://juejin.im/post/5bf769e0518825773a2ebfe5?tdsourcetag=s_pctim_aiomsg
