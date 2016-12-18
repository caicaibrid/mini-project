/**
 * Created by liuxin on 2016/12/18 0018.
 */
$(function () {
    var setForm = function (form,custom_prop) {
        var obj={};
        var custom_prop_arr = $(form).find("["+custom_prop+"]");
        for (var i=0;i<custom_prop_arr.length;i++){
            var key =  $(custom_prop_arr[i]).attr(custom_prop);
            //判断key 有没有点(.)
            var result="";
            if(key.indexOf(".")>-1){
                var key_arr = key.split(".");
                var str ="";
                for (var j=0;j<key_arr.length;j++){
                    result += '{"'+key_arr[j]+'":';
                    str+="}"
                    if(j==key_arr.length-1){
                        result=result+'"'+ ($(custom_prop_arr[i]).val()) +'"'+str;
                    }
                }
                $.extend(obj,JSON.parse(result));
            }else{
                obj[key] = $(custom_prop_arr[i]).val();
            }

        }
        return obj;
    };

    var getForm = function (form,custom_prop) {
        var obj={
            "person": {
                "user": {
                    "laco": {
                        "name": "111"
                    }
                }
            },
            "password": "222"
        };
        var custom_prop_arr = $(form).find("["+custom_prop+"]");
        var arr=[];
        for (var i in obj){
            if(typeof  obj[i] =="object"){
                console.log(JSON.stringify(obj[i]))
                var str = i+"."+JSON.stringify(obj[i]).toString().replace(/\{|\}|\"/gi,"").split(":").join(".");
                var str_pos = str.lastIndexOf(".");
                $("[data-key='"+str.substr(0,str_pos)+"']").val(str.substr(str_pos))
            }else {
                $("[data-key="+i+"]").val(obj[i]);
            }
        }
        return obj;
    };


    $("button[type=button]").on("click",function () {
        setForm('#form','data-key')
        getForm('#form','data-key')
    });



});





