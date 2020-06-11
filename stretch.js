const createBase = add => {
    return (num) => num + add;
  };
  
  var addSix = createBase(6);
  console.log(addSix(10)); // returns 16
  console.log(addSix(21)); // returns 27