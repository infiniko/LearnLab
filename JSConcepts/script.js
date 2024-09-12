
let counter = 0;
const logger = function(){
    console.log('initializing..',counter++);
}

//edge cases not covered
const throttle = function(fn,delay){
    let shouldwait = false;
    return function(...args){
        if(shouldwait) return;
        fn(...args);
        shouldwait = true;
        setTimeout(()=>{
            shouldwait = false;
        },delay);
    }
}

const debouce = function(fn,delay){
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args);
        },delay);
    }
}

const execute = debouce(logger,400);
const TExecute = throttle(logger,1000);


//think recusively
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zipCode: "62704"
    },
    phoneNumbers: [
      {
        type: "home",
        number: "555-1234"
      },
      {
        type: "mobile",
        number: "555-5678"
      }
    ],
    isActive: true,
    lastLogin: "2024-09-10T08:30:00Z"
  };



let resObj = {};
let changeObject = (obj, parent) => {

    for(let key in obj){
        if(typeof obj[key] == 'object'){
            changeObject(obj[key],parent + "_" +key);
        }
        else{
            resObj[parent + "_" + key] = obj[key];
        }
    }
}
changeObject(user,"user");
console.log(JSON.stringify(resObj,null,2));


//sum()()()..upto n
let sum = function(a){
    return function(b){
        return b!=undefined ? sum(a+b):a;
    }
}


console.log(sum(5)(10)(1)(0)());