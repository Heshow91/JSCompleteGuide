loops are used to execute code multiple times

1. for loop

- execute code a certain amount of times (with counter variable)

```
  for(let i = 0; i <3; i++){
    console.log(i)
  } // would print 0, 1, 2 not 3
```

2. for-of loop - used for arrays

- exectute for every element in an array

```
  for(const el of array){
    console.log(el)
  }
```

3. for-in loop - used for objects

- execute for every key in an object

```
  for(const key in obj){
    console.log(key);
    console.log(obj[key]); // dynamically access key value pairs
  }
```

4. while loop

- execute code as long as a condition is true

```
while(isLoggedIn){
  ...
}
```
