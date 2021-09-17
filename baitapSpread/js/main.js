/**
 * Bài tập 3 : Xây dựng hàm ArrowFunction thêm hiệu ứng jump text
 * + Lấy nội dung text "Hover Me!" của class heading
 * + Sử dụng Spread Operator để tách từng ký tự của text "Hover Me!" => ["H","0",
 * "v","e","r","M","e","!"]
 * + Tạo các thẻ span chứa các ký tự chữ sau khi đã tách được & thêm các thẻ span
 *  đó vào thẻ heading
 */

let tachChuoi = () => {
    let str ="Hover Me!";
    let char = [...str];

    let content = "";
    for(let value of char){
        content += `
        <span>${value}</span>`
    }
    document.querySelector(".heading").innerHTML = content;
}
tachChuoi();
    
    