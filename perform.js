//It's perform .... -_- -_-
function perform(...args) {
    const callback = args.pop();
    const result = callback.apply(this, args);
    const configuration = {
        then: function (...args1) {
            let callback1 = args1.pop();
            return perform.apply(this, [...args1, result, callback1]);
        } 
    }
    return configuration;
  }
  let a = 10; 
  
  perform(a, function(val){
      return val++
  })
  .then((val) => {
      return val + 10;
  })
  .then((val) => {
      console.log(val);
  })