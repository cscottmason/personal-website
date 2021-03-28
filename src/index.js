alert ("Welcome to my page!")

const interest = document.getElementsByClassName('interest')[0]
const hobby1 = interest.getElementsByTagName('li')[0]
const hobby2 = interest.getElementsByTagName('li')[1]
const hobby3 = interest.getElementsByTagName('li')[2]

hobby1.innerText = "Playing basketball"
hobby2.innerText = "Cooking"
hobby3.innerText = "Drawing"

const name = document.getElementsByClassName('name')[0]
const fullName = name.getElementsByTagName('h1')[0]
const career = name.getElementsByTagName('h3')[0]

fullName.innerText = "Candice Scott-Mason"
career.innerText = "Aspiring Front End Developer"

const skills = document.getElementsByClassName('skills')[0]
const skill1 = skills.getElementsByTagName('li')[0]
const skill2 = skills.getElementsByTagName('li')[1]
const skill3 = skills.getElementsByTagName('li')[2]

skill1.innerText = "Javascript"
skill2.innerText = "Css"
skill3.innerText = "HTML"