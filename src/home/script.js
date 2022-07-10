// Resize the width of avatar image based on the width of the user device after loading the page (merge test)
if (window.innerWidth > 800) {
    document.querySelector(':root').style.setProperty('--avatar-width', '9rem')
} else if (window.innerWidth > 560) {
    document.querySelector(':root').style.setProperty('--avatar-width', '8rem')
} else {
    document.querySelector(':root').style.setProperty('--avatar-width', '7rem')
}


// Returns the distance between the left side of the element and the left side of the viewport
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    }
}


const avatarElement = document.querySelector('.avatar')
let avatarElementXPos = getOffset(avatarElement).left


// Centers the avatar image when loading the page
document.querySelector(':root').style.setProperty('--distance', Math.round(avatarElementXPos) + 'px')


// This event acts like media queries, but the size of the image depends on the value of
// variable --avatar-width (this helps with calculation), so we can't just use @media queries
window.addEventListener('resize', (e) => {
    if (window.innerWidth <= 800) {
        document.querySelector(':root').style.setProperty('--avatar-width', '8rem')
    } else if (window.innerWidth <= 560) {
        document.querySelector(':root').style.setProperty('--avatar-width', '7rem')
    } else {
        document.querySelector(':root').style.setProperty('--avatar-width', '9rem')
    }
})