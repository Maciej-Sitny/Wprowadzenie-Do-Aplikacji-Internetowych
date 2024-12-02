function generate() {
    const min = parseInt(document.getElementById("min").value, 10); 
    const max = parseInt(document.getElementById("max").value, 10); 
    const capital = document.getElementById("capital").checked;
    const special = document.getElementById("special").checked;

    const length = Math.floor(Math.random() * (max - min + 1)) + min; 
    let password = "";

    for (let i = 0; i < length; i++) {
        let ascii_code;
        if (capital && special) {
            ascii_code = Math.floor(Math.random() * (126 - 33) + 33); 
        } 

        else if (capital) {
            const whichRange = Math.random() < 0.5;
            if (whichRange) {
                ascii_code = Math.floor(Math.random() * (91 - 65) + 65); 
            }
            else {
                ascii_code = Math.floor(Math.random() * (123 - 97) + 97);
            }
        } 

        else if (special) {
            const whichRange = Math.random() < 0.5;
            if (whichRange) {
                ascii_code = Math.floor(Math.random() * (48 - 33) + 33);; 
            }
            else {
                ascii_code = Math.floor(Math.random() * (123 - 97) + 97);
            }
        }
        else {
            ascii_code = Math.floor(Math.random() * (123 - 97) + 97); 
        }
        password += String.fromCharCode(ascii_code);
    }
    alert(password);
}
