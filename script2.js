const a = (name, age, job) => {
  return {
    name: name,
    age: age,
    job: job,
  };
};

// console.log(a());
const b = a("saccharin01", 30, "Dev1");
console.log("첫번째 :", b);
b.address = "대전";
console.log("두 번째 : ", b);
