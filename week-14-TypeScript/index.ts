function delayedCall(fn: () => void){
  setTimeout(fn, 2000);
}

delayedCall(function(){
  console.log('Delayed message!');
})