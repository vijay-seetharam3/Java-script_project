const input = document.getElementById("input")

function reversestring(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = reversestring(value)

    if (value === reverse) {
        alert("The given string is a palindrome")
    } else {
        alert("The given string is not a palindrome")
    }

    input.value = ""
}