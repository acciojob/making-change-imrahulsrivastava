const makeChange = (c) => {
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  quarters = Math.floor(c / 25);
  c %= 25;

  dimes = Math.floor(c / 10);
  c %= 10;

  nickels = Math.floor(c / 5);
  c %= 5;

  pennies = c;

  return {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies,
  };
};

// Example usage
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(parseInt(c))));
