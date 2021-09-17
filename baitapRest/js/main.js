/**
 * Bài 2 : Tính điểm trung bình
 * + Sử dụng hàm ArrowFunction
 * + Sử dụng ResParam
 */

// Hàm ArrowFunction kết hợp ResParam tính điểm trung bình 
let tinhDTB = (...resParam) => {
    let dtb = 0;
    for(let i = 0; i < resParam.length; i++){
        dtb += resParam[i];
    }
    return dtb = dtb / resParam.length;
}

document.querySelector("#btnKhoi1").addEventListener("click",function(){
    let diemToan = parseInt(document.getElementById("inpToan").value);
    let diemLy = parseInt(document.getElementById("inpLy").value);
    let diemHoa = parseInt(document.getElementById("inpHoa").value);

    let DTB = tinhDTB(diemToan,diemLy,diemHoa);
    document.getElementById("tbKhoi1").innerHTML = DTB;
});

document.querySelector("#btnKhoi2").addEventListener("click",function(){
    let diemVan = parseInt(document.getElementById("inpVan").value);
    let diemSu = parseInt(document.getElementById("inpSu").value);
    let diemDia = parseInt(document.getElementById("inpDia").value);
    let diemEnglish = parseInt(document.getElementById("inpEnglish").value);

    let DTB = tinhDTB(diemVan,diemSu,diemDia,diemEnglish);
    document.getElementById("tbKhoi2").innerHTML = DTB;
});