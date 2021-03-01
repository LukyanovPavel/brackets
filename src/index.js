module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.join().split(',');
  let open = [],
  close = [], 
  stack = [];
  
  bracketsConfig.forEach((element, index) => {
    if (index % 2 === 0){
      open.push(element);
    } else{
      close.push(element);
    }
  });
  
  str = str.split('');
  for (let i = 0; i < str.length; i++){
    let openIndex = open.indexOf(str[i]);
    if (openIndex !== -1){
      stack.push(openIndex);
    }
    let closeIndex = close.indexOf(str[i]);
    if (closeIndex !== -1){
      openIndex = stack.pop();
      if (openIndex !== closeIndex) return false;
    }
  }
  return stack.length !== 0 ? false : true;
  }
  