 const wrapper = document.querySelector(".wrapper"),
 qrInput= wrapper.querySelector(".form input"),
 generateBtn= wrapper.querySelector(".form button"),
qrImg=wrapper.querySelector(".qr-code img");
downloadBtn = wrapper.querySelector("#button"),
 generateBtn.addEventListener("click",() =>{
    let qrValue=qrInput.value;
   if(!qrValue)return;
   generateBtn.innerText ="Generating qr code..";
   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrValue)}&size=200x200`;
   qrImg.addEventListener("load", ()=> {
    wrapper.classList.add("active");
    generateBtn.innerText ="Generate qr code..";
    downloadBtn.style.display = "block";
   });
   downloadBtn.addEventListener("click",async()=>{
      const response = await fetch(qrImg.src);
      const blob  = await response.blob();
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "qrcode.jpg";
      downloadLink.click();
 });
});
 
 qrInput.addEventListener("keyup",() =>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
 });