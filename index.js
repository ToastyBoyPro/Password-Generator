const passwordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890~!@#$%^&*/?+-()".split("") // .split seperates each character into its own string
const genBtn = document.getElementById("gen-btn")
const passwordField = document.querySelectorAll(".password")

/* When 'Generate Passwords' button is clicked */
genBtn.addEventListener("click", () => {
  const pwLen = document.getElementById("pw-len").value
  const copy = document.getElementById("copy")

  if (pwLen > 0 && pwLen < 15) { // activates if user input is within parameters
    passwordField.forEach((passResult) => {
      passResult.value = desiredLength(pwLen) // takes result of func and passes to input field
    })
    copy.innerHTML = "Click on the password to copy to clipboard"

  } else {
      return alert("Not a valid entry. Please try again.")
  }
})

function desiredLength(x) { // uses pwLen to determine how many time to run func
  let characterArray = [] // empty array for adding characters 

  for (let i = 0; i < x; i++) {
    const randomCharacters = Math.floor(
      Math.random() * passwordCharacters.length
    ); // selects a random array index positon based off array length
    characterArray.push(passwordCharacters[randomCharacters]); // pushes array character to new array
  }
  return characterArray.join("") // joins array characters to make a string
}

/* Copies the password result to clipboard */
passwordField.forEach((passResult) => {
  passResult.addEventListener("click", () => {
    passResult.select() // selects input field
    document.execCommand("copy") //depricated, but still works. Copies to clipboard
    alert("Copied to clipboard")
  })
})
