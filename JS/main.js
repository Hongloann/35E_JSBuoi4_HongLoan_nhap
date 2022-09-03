
// Bài tập 1  
/* Mô hình 3 khối :
- Đầu vào: 
var a
var b
var c
var xepTangDan
- Xử lý:
a > b && c > a => b < a < c
a > b && c > b => b < c < a
a > b && a > c => c < b < a
b > c && c > a => a < c < b
b > a && b > c => c < a < b
a < b < c
- Đầu ra: 
document.getElementById("thongBao").innerHTML = xepTangDan ;  
*/

// Đầu vào
var btnLogin = document.getElementById("btnLogin");
btnLogin.onclick = function () {
    var a = document.getElementById("num1").value*1;
    var b = document.getElementById("num2").value*1;
    var c = document.getElementById("num3").value*1;
    var xepTangDan = 0;
 
// Xử lý
    if (a > b && c > a){
        var xepTangDan = b + "< " + a + "< " + c;
    }else if (a > b && c > b){
        var xepTangDan = b + "< " + c + "< " + a;
    }else if (a > b && a > c){
        var xepTangDan = c + "< " + b + "< " + a;
    }else if (b > c && c > a){
        var xepTangDan = a + "< " + c + "< " + b;
    }else if (b > a && b > c){
        var xepTangDan = c + "< " + a + "< " + b;
    }else{
        var xepTangDan = a + "< " + b + "< " + c;
    }  
// đầu ra 
    document.getElementById("thongBao").innerHTML = xepTangDan ;  
}   


// Bài 2: 
/* Mô hình 3 khối
- Mở đầu:

*/
var btnChao = document.getElementById("btnChao");
btnChao.onclick = function (){
    var selectUser = document.getElementById("selectUser").value;
    var B = document.getElementById("Bo").value;
    var M = document.getElementById("Me").value;
    var A = document.getElementById("Anh").value;
    var E = document.getElementById("Em").value;
    var chaoUser = "";

    if ( selectUser == B){
         chaoUser = "Xin chào Bố!";
         console.log(chaoUser);
      }else if (selectUser == M){
         chaoUser = "Xin chào Mẹ!";
          console.log(chaoUser);
      }else if (selectUser == A){
          chaoUser = "Xin chào Anh trai!";
      }else {
          chaoUser = "Xin chào Em gái!";     
      }

     document.getElementById("nutXinChao").innerHTML = chaoUser;
}


// Bài tập 3 

// Đầu vào 
var btnSoChanLe = document.getElementById("btnSoChanLe");
btnSoChanLe.onclick = function(){
    var e = document.getElementById("soNguyen1").value*1;
    var f = document.getElementById("soNguyen2").value*1;
    var g = document.getElementById("soNguyen3").value*1;
    var so1 = e % 2;
    var so2 = f % 2;
    var so3 = g % 2;
    var count = 0;
    var soLe = 0;
    
// Xử lý
    if(so1 == 0 && so2 > 0 && so3 >0 ){
        count +=1;
    }else if(so1 == 0 && so2 == 0 && so3 > 0){
        count +=2;
    }else if(so1 == 0 && so2 == 0 && so3 == 0){
        count +=3;
    }else if(so1 > 0 && so2 > 0 && so3 == 0 ){
        conut +=1;
    }else if(so1 > 0 && so2 == 0 && so3 > 0){
        count +=1;
    }else if(so1 == 0 && so2 > 0 && so3 == 0){
        count +=2;
    }else{
        count +=2;
    }
    var soLe = 3 - count;
    var result = "Số chẵn: " + count;
    result += "<br />";
    result += "Số lẻ: " + soLe;

    //Đầu ra
    document.getElementById("nutKetQua").innerHTML = result;
}

// Bài tập 4 

// Đầu vào:
var btnTamGiac = document.getElementById("btnTamGiac");
btnTamGiac.onclick = function () {
    var canhA = document.getElementById("canhA").value*1;
    var canhB = document.getElementById("canhB").value*1;
    var canhC = document.getElementById("canhC").value*1;
    var tamGiac = "";

//Xử lý:
if (canhA == canhB && canhB == canhC){
    tamGiac = "Tam giác đều";
}else if(canhA == canhB) {
    tamGiac = "Tam giác cân";
}else if(canhA == canhC){
    tamGiac = "Tam giác cân";
}else if(canhB == canhC){
    tamGiac = "Tam giác cân";
}else if (canhA*canhA == (canhB*canhB) + (canhC*canhC)){
    tamGiac = "Tam giác vuông";
}else if (canhB*canhB == (canhA*canhA) + (canhC*canhC)){
    tamGiac = "Tam giác vuông";
}else if (canhC*canhC == (canhB*canhB) + (canhA*canhA)){
    tamGiac = "Tam giác vuông";
}else{
    tamGiac = "Tam giác khác";
}

// Đầu ra: 
document.getElementById("LoaiTamGiac").innerHTML = tamGiac;
}

