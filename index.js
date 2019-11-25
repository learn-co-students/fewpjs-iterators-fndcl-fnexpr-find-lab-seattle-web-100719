const testVar = {};

function testFunc() {
   return 'hi';
}

const superbowlWin = arr => {
   let result = arr.find(obj => {
      return obj.result === 'W';
   });
   if (result) {
      return result.year;
   }
   return undefined;
};
