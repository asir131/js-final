function mergeArrays(arr1,arr2){
    let joind=[]
    joind=arr1.concat(arr2)
   
    for(let i=0;i<joind.length;i++){
        for(let j=i+1;j<joind.length;j++){
            if(joind[i]>joind[j]){
                let temp = joind[i];
                joind[i] = joind[j];
                joind[j] = temp;
            }
        }
    }
    console.log(joind);
}


let arr1=[1,3,5,7,9]
let arr2=[2,4,6,8,10]

mergeArrays(arr1,arr2)