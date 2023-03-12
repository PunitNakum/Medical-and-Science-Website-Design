var pick = document.getElementById('picker');
pick.addEventListener('change',()=>{
    document.documentElement.style.setProperty('--background',pick.value)
    document.documentElement.style.setProperty('--footer-back',pick.value)
    
    var back = pick.value
    // console.log(back)
    // console.log(typeof back)
    const brightness = Math.round(((parseInt(back.substring(1,3),16) * 299) +
                        (parseInt(back.substring(3,5),16) * 587) +
                        (parseInt(back.substring(5,7),16) * 114)) / 1000);
                        // console.log("brightness",brightness)
    const textColour = (brightness > 125) ? 'black' : 'white';
    // console.log(textColour)
    document.documentElement.style.setProperty('--color',textColour)
    document.documentElement.style.setProperty('--font',textColour)

    //Footer Color
    // document.documentElement.style.setProperty('--',textColour)
    document.documentElement.style.setProperty('--footer-font',textColour)
    document.getElementById("footer").style.backgroundImage = "none";
})


var backpick = document.getElementById("backpick");
backpick.addEventListener('change',()=>{
    // console.log(backpick.value)
    document.documentElement.style.setProperty('--second-back-color',backpick.value);
    fcolor = backpick.value;
    const brightness = Math.round(((parseInt(fcolor.substring(1,3),16) * 299) +
                        (parseInt(fcolor.substring(3,5),16) * 587) +
                        (parseInt(fcolor.substring(5,7),16) * 114)) / 1000);
                        // console.log("brightness",brightness)
    const textColour = (brightness > 125) ? 'black' : 'white';
    // console.log(textColour)
    document.documentElement.style.setProperty('--second-color',textColour)
    // document.documentElement.style.setProperty('--font',textColour)
    document.getElementById("backimage").style.backgroundImage = "none";
})


var img = document.getElementById("image");

img.addEventListener("change",()=>{
    const [files] = img.files
    console.log(files)
    if(files){
        document.getElementById("backimage").style.backgroundImage = `url('${URL.createObjectURL(files)}')`
    }
    // img.value = "";
    document.getElementById("form-id").reset();
    // console.log(files[0])
    // console.log(img.value)
    // console.log(img.value.split('\\')[2]);
    // bimage = img.value.split('\\')[2];
    // document.documentElement.style.setProperty('--back-image',);

})


function pickGradientColor(){
    var fcolor = document.getElementById("firstColor").value;
    var scolor = document.getElementById('secondColor').value;
    var direction = document.getElementById("direction").value;

    if(direction){
        document.getElementById("footer").style.backgroundImage = `linear-gradient(${direction},${fcolor},${scolor})`
    }

    // console.log(fcolor,scolor,direction)
}