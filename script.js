// Variables
const body = document.querySelector("body")
const hexCode = document.querySelector("#code")
const generateButton = document.querySelector("#generate-btn")
const codes = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"] 

//Codes

generateButton.addEventListener('click', () => {
    const randomColor = () => {
        let hex = "#"
        for(let i = 0; i < 6; i++) {
            hex += codes[Math.floor(Math.random() * codes.length)]
        }
        return hex
    }

    let bodyColor = body.style.backgroundColor = randomColor()
    hexCode.innerHTML = bodyColor 

})

