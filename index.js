function getColor(e) {
    e.preventDefault();
    const inputColor = document.getElementById("color-pick").value;
    const schemeEl = document.getElementById("scheme").value;
    let hex = inputColor.slice(1);
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${schemeEl}&count=5`)
        .then(res => res.json())
        .then(data => {
            const returnedData = data.colors;
            const colorArr = [];
            returnedData.map((color) => {
                const value = color.hex.value 
                colorArr.push(`
                    <div class="container">
                    <div class="color" style="background: ${value}"></div>
                    <p class="hex" onclick="copy('${value}')" >${value}</p>
                    </div>`)
            });
            document.getElementById("color-tray").innerHTML = colorArr.join("");
        });
        
    
};

function copy(el) {
    const rim = document.createElement("textarea");
    rim.value = el;

    // Append the textarea element to the body
    document.body.appendChild(rim);

    // Select the text inside the textarea element
    rim.select();

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the textarea element from the body
    document.body.removeChild(rim);
    alert(`${el} has been copied to clipboard`);
};

document.getElementById("color-form").addEventListener("submit", getColor);