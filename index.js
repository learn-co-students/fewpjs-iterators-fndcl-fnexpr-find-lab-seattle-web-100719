const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  const res = record.find( function(s) {
   return s.result === "W"
  })
  if (res)
    return res.year;
  else
    return undefined;
}