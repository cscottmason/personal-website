alert ("Welcome to my page!")

const interest = document.getElementsByClassName('interest')[0]
const hobby1 = interest.getElementsByTagName('li')[0]
const hobby2 = interest.getElementsByTagName('li')[1]
const hobby3 = interest.getElementsByTagName('li')[2]

hobby1.innerText = "Basketball"
hobby2.innerText = "Cooking"
hobby3.innerText = "Drawing"

