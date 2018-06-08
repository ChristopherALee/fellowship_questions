// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

const sortByStrings = (s, t) => {
  const order = {};

  t.split("").forEach((char, idx) => {
    order[char] = idx;
  });

  const result = s
    .split("")
    .sort((a, b) => {
      let aOrder = order[a];
      let bOrder = order[b];

      if (aOrder < bOrder) {
        return -1;
      } else if (aOrder > bOrder) {
        return 1;
      } else {
        return 0;
      }
    })
    .join("");

  return result;
};
