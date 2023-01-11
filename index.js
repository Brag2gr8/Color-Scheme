const form = document.getElementById("color-form");


function getColor(e) {
    e.preventDefault();
    const inputColor = document.getElementById("color-pick").value;
    const schemeEl = document.getElementById("scheme").value;
    let hex = inputColor.split("");
    hex.shift();
    hex = hex.join("");
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${schemeEl}&count=5`)
        .then(res => res.json())
        .then(data => {
            const returnedData = data.colors;
            const colorArr = [];
            returnedData.map((color) => {
                colorArr.push(`
                    <div class="container">
                    <div class="color" style="background: ${color.hex.value}"></div>
                    <p class="hex">${color.hex.value}</p>
                    </div>`)
            });
            document.getElementById("color-tray").innerHTML = colorArr.join("");
        })
        
    
}


form.addEventListener("submit", getColor);


        
        // [4].hex.value
        
        
        