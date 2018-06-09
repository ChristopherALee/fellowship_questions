// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = s => {
  if (s.length === 0) {
    return "";
  }

  let start = "";
  let multiple;
  let parseLocation = 0;

  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      start += s[i];
      parseLocation += 1;
    } else {
      multiple = parseInt(s[i]);
      parseLocation += 1;
      break;
    }
  }

  if (!multiple) {
    return s;
  }

  return (
    start +
    repeatChars(
      multiple,
      decodeString(s.slice(parseLocation + 1, s.length - 1))
    )
  );
};

const repeatChars = (multiple, chars) => {
  let result = "";

  for (let i = 0; i < multiple; i++) {
    result += chars;
  }

  return result;
};

decodeString("4[ab]"); // => "abababab"
decodeString("2[b3[a]]"); // => "baaabaaa"
