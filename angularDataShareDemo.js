/**
 * Created by amitraj on 4/7/14.
 */

var myApp = angular.module('myApp',[]);


function firstControl(){

}


function secondControl(){

}

var array = [];
for (var i = 0; i < u.length; i++) {
    array.push((function (data) {
        return function (callback) {
            new employeeModel1(data).save(function (err) {
                if (err) {
                    callback(err)
                    return
                }
                console.log(data);
                callback();
            })
        }
    })(u[i]))
}
//    for (var i = 0; i < array.length; i++) {
//        console.log(array[i])
//        // array.push(new employeeModel1(u[i]))
//    }
//    //
async.series(array,
    function (err) {
        if (err)
            console.log("error at final stage:" + err);
        else
            console.log("database copied");
    });