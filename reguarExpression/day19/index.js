const closure = () => {
  let obj = 0;
  const innerClosure = () => {
    obj++;
  };
  return innerClosure;
};
console.log(closure());

const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

// bad
const arr = Array.from(arrLike);
console.log(arr);

const baz = [...foo].map(bar);
console.log(baz);
