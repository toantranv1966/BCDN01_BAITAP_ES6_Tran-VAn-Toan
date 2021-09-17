/**
 * Bài 1 : Xây dựng ứng dụng đổi màu ngôi nhà
 * Sử dụng hàm ArrowFunction
 */

// Hàm ArrowFunction load danh sách các ô màu

let loadDanhSachOMau = () =>{
    const colorList = ["pallet","viridian","perter", "cerulean", "vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

    let content = "";

    for(let value of colorList){
        content += `
        <button class="color-button ${value} "></button>
       ` 
    }
    document.querySelector("#colorContainer").innerHTML = content;
}

loadDanhSachOMau();

// Hàm ArrowFunction change color
let changeColor = (color) =>{
    switch(color){
        case 'pallet' :{
            //! thay đổi tên class mà không làm mất tên củ
            document.querySelector("#house").className = "house pallet";
        };break;
        case 'viridian' :{
            document.querySelector("#house").className = "house viridian";
        };break;
        case 'perter' :{
            document.querySelector("#house").className = "house perter";
        };break;
        case 'cerulean' :{
            document.querySelector("#house").className = "house cerulean";
        };break;
        case 'vermillion' :{
            document.querySelector("#house").className = "house vermillion";
        };break;
        case 'lavender' :{
            document.querySelector("#house").className = "house lavender";
        };break;
        case 'celadon' :{
            document.querySelector("#house").className = "house celadon";
        };break;
        case 'saffron' :{
            document.querySelector("#house").className = "house saffron";
        };break;
        case 'fuschia' :{
            document.querySelector("#house").className = "house fuschia";
        };break;
        case 'cinnabar' :{
            document.querySelector("#house").className = "house cinnabar";
        };break;
    }
}

// ! Viết lại khi User click button thì mới lấy tên class truyền tham số cho hàm
// ! Code sẽ ngắn gọn hơn => chỉ viết một lần cho all button

document.querySelector(".pallet").addEventListener("click",function(){
    changeColor('pallet');
})

document.querySelector(".viridian").addEventListener("click",function(){
    changeColor('viridian');
})
document.querySelector(".perter").addEventListener("click",function(){
    changeColor('perter');
})
document.querySelector(".cerulean").addEventListener("click",function(){
    changeColor('cerulean');
})
document.querySelector(".vermillion").addEventListener("click",function(){
    changeColor('vermillion');
})
document.querySelector(".lavender").addEventListener("click",function(){
    changeColor('lavender');
})
document.querySelector(".celadon").addEventListener("click",function(){
    changeColor('celadon');
})
document.querySelector(".saffron").addEventListener("click",function(){
    changeColor('saffron');
})
document.querySelector(".fuschia").addEventListener("click",function(){
    changeColor('fuschia');
})
document.querySelector(".cinnabar").addEventListener("click",function(){
    changeColor('cinnabar');
})
