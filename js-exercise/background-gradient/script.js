const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
color1.addEventListener("change", pickColor);
color2.addEventListener("change", pickColor)
function pickColor (){
    const result = document.querySelector("#result")
    result.innerText = `linear-gradient(to right, ${hexToRGB(color1.value)}, ${hexToRGB(color2.value)})`;
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

let randomBtn = document.querySelector('#randomColor');
let randomNum = () => {
    let keys = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += keys[Math.round(Math.random() * 15)];
    }
    return color;
  }
randomBtn.addEventListener('click', event => {
    color1.value = randomNum();
    color2.value = randomNum();
    pickColor();
});

function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];    // 0x if the string begins with "0x", the radix is 16 (hexadecimal)
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
   
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }   
    console.log(r);       //"rgb("+ +r + "," + +g + "," + +b + ")";
  
    return `rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`;
  }

  


  /*
  function hexToRgb(hex) {
    let rgb = [];

    rgb[0] = parseInt(hex.substring(1, 3), 16);
    rgb[1] = parseInt(hex.substring(3, 5), 16);
    rgb[2] = parseInt(hex.substring(5), 16);

    return rgb;
}
*/

