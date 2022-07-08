/*
                    -------- HOW THIS ANIME LIST WORKS (Important) --------
- Position
animeListArray should be something like [e1, e2, e3, e4,...]
el is always the active anime, which places at the MIDDLE of the list
e2 is always on the RIGHT side of e1
e4, for example, but here the last anime in the list is always on the LEFT side of e1


- Sliding
We have animeList = [e1, e2, e3, e4, e5] for further explanation
on the page it will be shown like: E5   E1   E2

ORIGINAL List: [e1, e2, e3, e4, e5]

When E2 is clicked, the list will slide from RIGHT to LEFT
so e2 is now the active anime

Now NOTICE that the original list is NOT UPDATED, so animeList[2] will be the anime that 
places on the right side

After that, the list is updated to [e2, e3, e4, e5, e1]

If E5 clicked, instead, then the list will slide from LEFT to RIGHT
so to replace E5's previous position, we can select 'e4' which is animeList[animeList.length - 2] because
the list is NOT UPDATED yet

now animeList becomes [e5, e1, e2, e3, e4]
*/

const animeListElement = document.querySelector('.anime-actual-list')
let animeListArray = [...animeListElement.children]

// Default style for 3 main anime when the page is loaded
for (let [eIndex, eValue] of animeListArray.entries()) {
    const animeNameElement = document.querySelector(`.${eValue.className} .name`)
    animeNameElement.style.transition = '0.5s'
    animeNameElement.style.opacity = 0

    // If it is in the 1st position of the list (Middle)
    if (eIndex === 0) {
        eValue.style.left = '27.4rem'
        animeNameElement.style.opacity = 1

    } else if (eIndex === 1) { // If it is in the 2nd position of the list (Right) 
        eValue.style.opacity = 0.5
        eValue.style.transform = 'scale(0.5)'
        eValue.style.left = '53.7rem'
    } else if (eIndex === animeListArray.length - 1) { // If it is in the last position of the list (Left)
        eValue.style.opacity = 0.5
        eValue.style.transform = 'scale(0.5)'
        eValue.style.left = '1rem'

    } else {
        eValue.style.opacity = 0.5
        eValue.style.transform = 'scale(0.5)'
        eValue.style.left = '-23rem'
    }
}

animeListArray.forEach(childAnimeElement => {
    // Change the mouse pointer when hovering
    childAnimeElement.onmouseover = () => {
        childAnimeElement.style.cursor = 'pointer'
    } 
    // Slide the list of anime depending on which anime user clicks on
    childAnimeElement.onclick = function slide() {
        let clickedAnimeElement = childAnimeElement
        
        // If user clicks on the active anime (links to a YT link)
        if (animeListArray.indexOf(clickedAnimeElement) === 0) {
            // Youtube URLs for each anime element
            const animeYtURLs = {
                'spy-x-family': 'https://www.youtube.com/watch?v=-Ivz-tSWRmY',
                'gotoubun-no-hanayome': 'https://www.youtube.com/watch?v=9APOBBQZYRg',
                'assassination-classroom': 'https://www.youtube.com/watch?v=adsNeHmLllg',
                'sakurasou': 'https://www.youtube.com/watch?v=3d8EzILpO4c'
            }

            window.open(`${animeYtURLs[clickedAnimeElement.className]}`, '_blank')
        }

        // If user clicks to view the anime on the LEFT anime of the active anime
        if (animeListArray.indexOf(clickedAnimeElement) === animeListArray.length - 1) {
            // Move the clicked anime to the right to be active
            let leftAnimeElement = clickedAnimeElement
            leftAnimeElement.style.left = '27.4rem'
            leftAnimeElement.style.transform = 'scale(1)'
            leftAnimeElement.style.opacity = 1
            leftAnimeElement.style.transition = '0.5s'
            // Shows the name of the new active anime
            document.querySelector(`.${leftAnimeElement.className} .name`).style.opacity = 1
            
            // Move the (previously) active anime to the right
            let previouslyActiveAnime = animeListArray[0]
            previouslyActiveAnime.style.opacity = 0.5
            previouslyActiveAnime.style.transform = 'scale(0.5)'
            previouslyActiveAnime.style.left = '53.7rem'
            previouslyActiveAnime.style.transition = '0.5s'
            // Hides the name of that anime
            document.querySelector(`.${previouslyActiveAnime.className} .name`).style.opacity = 0


            // Move the (previously) right anime to the right to hide itself
            let previouslyRightAnime = animeListArray[1]
            previouslyRightAnime.style.left = '80rem'
            previouslyRightAnime.style.transition = '0.5s'
            document.querySelector(`.${previouslyRightAnime.className} .name`).style.opacity = 0

            // Now I select the OTHER anime that will replace on the LEFT side of the new active anime
            setTimeout(() => {
                let lastAnimeInList = animeListArray[animeListArray.length - 2]
                // Move that anime on the left of the viewport a little bit, hidden from user's view
                lastAnimeInList.style.transition = 'none'
                lastAnimeInList.style.left = '-23rem'

                // Slowly move into the viewport from the left to right ( --> )
                setTimeout(() => {
                    lastAnimeInList.style.transition = '0.5s'
                    lastAnimeInList.style.left = '1rem'
                    animeListArray = repositionForward(animeListArray)
                }, 100)
            }, 510)

        }

        // If user clicks to view the anime on the RIGHT of the active anime
        if (animeListArray.indexOf(clickedAnimeElement) === 1) {
            // Move the clicked anime to the left to be active
            let rightAnimeElement = clickedAnimeElement
            rightAnimeElement.style.left = '27.4rem'
            rightAnimeElement.style.transform = 'scale(1)'
            rightAnimeElement.style.opacity = 1
            rightAnimeElement.style.transition = '0.5s'
            document.querySelector(`.${rightAnimeElement.className} .name`).style.opacity = 1
            
            // Move the (previously) active anime to the left
            let previouslyActiveAnime = animeListArray[0]
            previouslyActiveAnime.style.opacity = 0.5
            previouslyActiveAnime.style.transform = 'scale(0.5)'
            previouslyActiveAnime.style.left = '1rem'
            previouslyActiveAnime.style.transition = '0.5s'
            document.querySelector(`.${previouslyActiveAnime.className} .name`).style.opacity = 0

            // Move the (previously) left anime to the left to hide itself
            let previouslyLeftAnime = animeListArray[animeListArray.length - 1]
            previouslyLeftAnime.style.left = '-25.3rem'
            previouslyLeftAnime.style.transition = '0.5s'
            document.querySelector(`.${previouslyLeftAnime.className} .name`).style.opacity = 0

            setTimeout(() => {
                let lastAnimeInList = animeListArray[2]
                lastAnimeInList.style.removeProperty('right')
                lastAnimeInList.style.transition = 'none'
                lastAnimeInList.style.left = '80rem'
                setTimeout(() => {
                    lastAnimeInList.style.transition = '0.5s'
                    lastAnimeInList.style.left = '53.7rem'
                    animeListArray = repositionBackward(animeListArray)
                }, 100)
            }, 510)
        }
    }
})

// ---> direction
function repositionForward(arr) {
    let lastRemovedElement = arr.pop()
    arr.unshift(lastRemovedElement)
    return arr
}

// <--- direction
function repositionBackward(arr) {
    let lastRemovedElement = arr.shift()
    arr.push(lastRemovedElement)
    return arr
}
