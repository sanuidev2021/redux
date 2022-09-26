export function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["one", "two"]);
    }, 500);
  });
}

export function formatData(input) {
  console.log("expensive calculation");
  return input.map((item) => item.split("").reverse().join(""));
}
