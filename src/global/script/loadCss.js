
// <--- LOAD ALL REQUIRED CSS FILES --->
const headTag = document.getElementsByTagName('head')[0]

const fileNames = ['main.css', 'nav-bar.css', 'variables.css']
fileNames.forEach(fileName => {
	let styleLinkTag = document.createElement('link')
	styleLinkTag.rel = 'stylesheet'
	styleLinkTag.type = 'text/css'
	styleLinkTag.href = `../../global/styles/${fileName}`
	headTag.appendChild(styleLinkTag)
})