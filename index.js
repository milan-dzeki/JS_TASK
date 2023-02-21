const list = ["x:1", "y:2", "x:3", "a:5", "d:10", "a:3", "b:1", "y:12", "d:9"];

const sumOfUniques = (providedList) => {
  const sortedList = providedList.sort();

  const letters = Array.from(new Set(sortedList.map(item => item.split(":")[0])));

  const sumations = letters.map(letter => {
    const listItem = list.filter(item => item.startsWith(letter)).reduce((prev, curr) => {
      return prev + parseInt(curr.split(":")[1]);
    }, 0);

    return listItem;
  });

  const finalResult = letters.map((letter, index) => `${letter}=${sumations[index]}`);

  return finalResult;
};

console.log(sumOfUniques(list));


