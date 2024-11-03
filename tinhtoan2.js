//Sóng dừng
function songdungcd() {
    function convertValue(value,unit) {
        // Lấy giá trị và đơn vị từ các phần tử HTML
        
        // Kiểm tra nếu giá trị và đơn vị hợp lệ
            switch (unit) {
                case "mm":
                    value /= 10; // Chuyển đổi thành cm
                    break;
                case "µm":
                    value /= 10000; // Chuyển đổi thành cm
                    break;
                case "m":
                    value *= 100; // Chuyển đổi thành cm
                    break;
            // Thêm các trường hợp chuyển đổi khác tương ứng với đơn vị bạn muốn
            }
        
        return value;
    }   
    var l = (parseFloat(document.getElementById("L").value) || 0);
    var ul = document.getElementById("uL").value;
    var l = (convertValue(l,ul) || 0);
    var n1=(parseFloat(document.getElementById("n").value) || 0);
    var lamda = (parseFloat(document.getElementById("lamda").value) || 0);
    var ulamda = document.getElementById("ulamda").value;
    var lamda = (convertValue(lamda,ulamda) || 0);
    var v = (parseFloat(document.getElementById("v").value) || 0);
    var uv = document.getElementById("uv").value;
    var f=(parseFloat(document.getElementById("f").value) || 0);
    switch (uv) {
        case "m/s":
            v *= 100;
            break;
    }
    var T
    for (let j=2; j<8; j++) {
        if (lamda!==0 && n1!==0 && (l===0 || l===undefined)){
            l=n1*(lamda/2);
        }
        if (v!==0 && f!==0 && n1!==0 && (l===0 || l===undefined)){
            l=n1*(v/(2*f));
        }
        if (v!==0 && f!==0 && (lamda===0 || lamda===undefined)){
            lamda=v/f;
        }
        if (v!==0 && l!==0 && n1!==0 && (f===0 || f===undefined)){
            f=(n1*v)/(2*l);
        }
        if (l!==0 && n1!==0 && (lamda===0 || lamda===undefined)){
            lamda=(2*l)/n1;
        }
        if ((f!==0 ||(lamda!==0 && v!==0)) && (T===0||T===undefined)){
            T=(1/f)||(lamda/v);
        }
    }
    document.getElementById("result").innerHTML =  "Độ dài sợi dây: "+ l +"cm <br> Bước sóng: " + lamda +"cm <br> vận tốc truyền sóng: " + v +"cm <br> Tần số: " + f +"Hz <br> ";    

}

function songdungtd() {
    function convertValue(value,unit) {
        // Lấy giá trị và đơn vị từ các phần tử HTML
        
        // Kiểm tra nếu giá trị và đơn vị hợp lệ
            switch (unit) {
                case "mm":
                    value /= 10; // Chuyển đổi thành cm
                    break;
                case "µm":
                    value /= 10000; // Chuyển đổi thành cm
                    break;
                case "m":
                    value *= 100; // Chuyển đổi thành cm
                    break;
            // Thêm các trường hợp chuyển đổi khác tương ứng với đơn vị bạn muốn
            }
        
        return value;
    }   
    var l = (parseFloat(document.getElementById("L").value) || 0);
    var ul = document.getElementById("uL").value;
    var l = (convertValue(l,ul) || 0);
    var n1=(parseFloat(document.getElementById("n").value) || 0);
    var lamda = (parseFloat(document.getElementById("lamda").value) || 0);
    var ulamda = document.getElementById("ulamda").value;
    var lamda = (convertValue(lamda,ulamda) || 0);
    var v = (parseFloat(document.getElementById("v").value) || 0);
    var uv = document.getElementById("uv").value;
    var f=(parseFloat(document.getElementById("f").value) || 0);
    switch (uv) {
        case "m/s":
            v *= 100;
            break;
    }
    var T
    var n
    for (let j=2; j<8; j++) {
        if (lamda!==0 && n1!==0 && (l===0 || l===undefined)){
            n= 2*(n1-1)+1
            l=n*(lamda/4);
        }
        if (v!==0 && f!==0 && n1!==0 && (l===0 || l===undefined)){
            n= 2*(n1-1)+1
            l=n*(v/(4*f));
        }
        if (v!==0 && f!==0 && (lamda===0 || lamda===undefined)){
            lamda=v/f;
        }
        if (v!==0 && l!==0 && n1!==0 && (f===0 || f===undefined)){
            n= 2*(n1-1)+1
            f=(n*v)/(4*l);
        }
        if (l!==0 && n1!==0 && (lamda===0 || lamda===undefined)){
            n= 2*(n1-1)+1
            lamda=(4*l)/n;
        }
        if ((f!==0 ||(lamda!==0 && v!==0)) && (T===0||T===undefined)){
            T=(1/f)||(lamda/v);
        }
    }
    document.getElementById("result").innerHTML =  "Độ dài sợi dây: "+ l +"cm <br> Bước sóng: " + lamda +"cm <br> vận tốc truyền sóng: " + v +"cm <br> Tần số: " + f +"Hz <br> ";    

}

