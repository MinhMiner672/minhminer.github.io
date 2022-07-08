// Remove comments

// Show text indicating name of each social platform (twitter, reddit,...)
function popUpText(e) {
    // It's ridiculous to show the name of each platform
    // if user is on mobile devices
    if (document.documentElement.clientWidth <= 550) return

    let textTag = document.querySelector(`.${e.className.split(' ')[1]} .text`)
    textTag.style.visibility = 'initial'
    textTag.style.transform = 'translateY(15px)'
    textTag.style.transition = '0.3s'
}

// Just hide the text when not hovering
function hideText(e) {
    let textTag = document.querySelector(`.${e.className.split(' ')[1]} .text`)
    textTag.style.visibility = 'hidden'
    textTag.style.transform = 'translateY(1px)'
    textTag.style.transition = '0.1s'
}

// Choose a random color for the project border and font 
// when hovering
function changeProjectColor(e, projectName) {
    let colorsForEachProject = {
        flappyBird: ['#91ff00', '#adff40', '#beff69'],
        tetris: ['#8a75ff', '#ff4056', '#2effff'],
        snakeGame: ['#0aff23', '#69ff78', '#e85f5f'],
        spaceInvaders: ['#6b8dff', '#577dff', '#43e87d'],
        thisWebsite: ['#eaed42', '#c9f75c', '#ebc173']
    }

    let randomColor = colorsForEachProject[projectName][Math.floor(Math.random()*colorsForEachProject[projectName].length)]
    e.style.transition = '0.5s'
    e.style.border = `2px solid ${randomColor}`
    e.style.color = randomColor
    e.style.cursor = 'pointer'
}

// When the mouse leaves (does not hover) the element 
// then change the project color back to white
function restoreProjectColor(e) {
    e.style.border = '2px solid white'
    e.style.color = 'white'
}