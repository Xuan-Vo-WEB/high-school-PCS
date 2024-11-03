
window.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('background-music');
    music.volume = 0.5; // Điều chỉnh âm lượng nhạc nền (giá trị từ 0.0 đến 1.0)
});


/*Con Lắc Lò Xo*/


/*Con Lắc Đơn*/


/*CHƯƠNG SÓNG*/


function convertValue(value,unit) {
    // Lấy giá trị và đơn vị từ các phần tử HTML
    
    // Kiểm tra nếu giá trị và đơn vị hợp lệ
        switch (unit) {
            case "cm":
                value *= 10; // Chuyển đổi thành mm
                break;
            case "µm":
                value /= 1000; // Chuyển đổi thành mm
                break;
            case "m":
                value *= 1000; // Chuyển đổi thành mm
                break;
        // Thêm các trường hợp chuyển đổi khác tương ứng với đơn vị bạn muốn
        }
    
    return value;
}   
/* function convertValue1(value,unit) {
    // Lấy giá trị và đơn vị từ các phần tử HTML
    
    // Kiểm tra nếu giá trị và đơn vị hợp lệ
        switch (unit) {
            case "sáng":
                value = value; // tìm k
                break;
            case "tối":
                value = value - 1; // tìm k
                break;
        // Thêm các trường hợp chuyển đổi khác tương ứng với đơn vị bạn muốn
        }
    
    return value;
}*/



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var floatingButton = document.getElementById("floating-button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    floatingButton.style.display = "block";
  } else {
    floatingButton.style.display = "none";
  }
}

