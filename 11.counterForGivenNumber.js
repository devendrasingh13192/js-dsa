function counter(seconds){
    console.log(seconds);
    if(seconds > 0){
        setTimeout(() => counter(seconds-1),1000);
    }else{
        console.log('count down complete');
    }
}

counter(5);