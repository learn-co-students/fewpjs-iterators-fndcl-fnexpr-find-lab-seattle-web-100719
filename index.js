const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let response = array.find(function(s) {
    return s.result === "W"
  })
  if (response) {
    return response["year"]
  } else {
    return undefined
  }
}