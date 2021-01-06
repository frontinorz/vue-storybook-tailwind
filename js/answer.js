console.clear()

const str = "dog cat cat dog"
const pattern = "abba"

const strArr = str.split(' ')
const patArr = pattern.split('')

const arrReduce = (target) => target.reduce((arr, item) => {
  if (arr.indexOf(item) == -1) arr.push(item)
  return arr
}, [])

const matchPattern = (pat, str) =>
  pat.reduce((obj, item, index) => {
    obj[item] = str[index]
    return obj
  }, {})

const translatePattern = (patArr, translator) =>
  patArr.reduce((arr, item) => {
    arr.push(translator[item])
    return arr
  }, [])

const resultHandler = (strArr, translate) =>
  strArr.every((item, index) => {
    return item == translate[index]
  })


const matchOutput = matchPattern(arrReduce(patArr), arrReduce(strArr))

const translateOutput = translatePattern(patArr, matchOutput)

console.log('Match', matchOutput)

console.log('Translate', translateOutput)
console.log('Target', strArr)

console.log('Result', resultHandler(strArr, translateOutput))



function wordPattern(pattern, s) {
  const splitStr = s.split(' ');
  if (splitStr.length !== pattern.length) return false;
  const hash = {};

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] in hash) {
      if (hash[pattern[i]] !== splitStr[i]) {
        return false;
      }
    } else if (Object.values(hash).indexOf(splitStr[i]) > -1) {
      return false;
    } else {
      hash[pattern[i]] = splitStr[i];
    }
  }

  return true;
};