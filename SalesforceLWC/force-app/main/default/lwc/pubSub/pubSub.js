//Step 1 :- Create a Store , Store is nothing but an Object

const store={}

//Step 2 :- Create Subscribe Method

const subscribe = (eventName,callback)=>{
    if(!store[eventName]){ // if this eventName is store or not
        store[eventName]= new Set(); // initialize set() value in EventName
    }
    store[eventName].add(callback)
}

//step 3 :- Create Publish method

const publish = (eventName , payload)=>{
    if(store[eventName]){
        store[eventName].forEach(callback=>{
            try{
                callback(payload)
            }catch(error){
                console.error(error)
            }
        })
    }
}

//Step 4 : Create Unsubscribe method

const unsubscribe = (eventName,callback)=>{
    if(store[eventName]){
        store[eventName].delete(callback)
    }
}

export default{
    subscribe,
    unsubscribe,
    publish
}