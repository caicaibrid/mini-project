/**
 * Created by sa on 17-2-20.
 */
var arr = [1,22,21,11,8,9,50,100];

function maopao(arr) {
    for (var i =0;i<arr.length;i++){
        for (var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp =arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(arr);
console.log("冒泡排序"+maopao(arr));

var arr = [1,22,21,11,30,30,30,8,9,50,100];
var j=0;
function kuaisu(arr) {
    if(arr.length<=1){
        return arr
    }
    var left = [],right=[];
    var len = Math.floor(arr.length/2);
    var midlle = arr.splice(len,1);
    for (var i=0;i<arr.length;i++){
        if(arr[i]>midlle){
            right.push(arr[i])
        }else {
            left.push(arr[i])
        }
    }
    return kuaisu(left).concat(midlle,kuaisu(right));
}

console.log(arr);
console.log("快速排序"+kuaisu(arr));

var arr=[1,2,3,4];
function digui(arr) {
    if(arr.length-1 == 0){
        return arr;
    }
    var a = arr.splice(0,1)
    return digui(arr)+"-"+a
}
console.log(arr);
console.log("递归"+digui(arr)); //4-3-2-1

var elements = [5,4,3,2,1];
function sort(arr) {
    for (var i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            var tmp = arr[i];
            var inner = i;
            while(inner>=0&&arr[inner-1]>tmp){
                arr[inner] = arr[inner-1];
                console.log(arr)
                --inner;
            }
            arr[inner] = tmp;
            console.log(arr)
        }
    }
}
/*
 * [ 5, 5, 3, 2, 1 ]
 [ 4, 5, 3, 2, 1 ]
 [ 4, 5, 5, 2, 1 ]
 [ 4, 4, 5, 2, 1 ]
 [ 3, 4, 5, 2, 1 ]
 [ 3, 4, 5, 5, 1 ]
 [ 3, 4, 4, 5, 1 ]
 [ 3, 3, 4, 5, 1 ]
 [ 2, 3, 4, 5, 1 ]
 [ 2, 3, 4, 5, 5 ]
 [ 2, 3, 4, 4, 5 ]
 [ 2, 3, 3, 4, 5 ]
 [ 2, 2, 3, 4, 5 ]
 [ 1, 2, 3, 4, 5 ]
 *
 * */
var elements = [5,4,3,2,1];
function sort1(arr) {
    for (var i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            var j =i;
            var tmp = arr[i];
            while (j>=0&&arr[j-1]>tmp){
                arr[j] = arr[j-1];
                j--;
            }
            arr[j] = tmp;
        }
    }
    return arr;
}



console.log('插入排序 before: ' + elements);
sort1(elements);
console.log('插入排序 after: ' + elements);


var arr = [100,1,2,10,98,22,343,345,64,23];

function erfen(arr,num,start,end){
    var start = start || 0;
    var end = end || arr.length-1;
    var middle = Math.ceil((start+end)/2);
    console.log(arr+"-------"+num+"-------"+ middle);
    if(num==arr[middle]){
        console.log("******************")
        return middle;
    }else if(num<arr[middle]){
        return erfen(arr,num,0,middle-1);
    }else{
        return erfen(arr,num,middle+1,false);
    }
}
/*
 var newArr = arr.sort(function(a,b){
 return a-b;
 });
 */

var ele = erfen(arr,64);

console.log("二分的值"+ ele)
