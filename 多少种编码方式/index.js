(function() {
  const test = "1234123412";

  function exec(str) {
    if (str[0] === "0") {
      return 0;
    } else if (str.length <= 1) {
      return 1;
    }

    let total = 0;
    const [first, second, ...rest] = str;

    if (first + second <= 26) {
      total += exec(rest);
    }

    total += exec([second, ...rest]);

    return total;
  }

  console.log(exec(test));
})();
