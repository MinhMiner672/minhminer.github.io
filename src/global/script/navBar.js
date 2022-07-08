
// <--- NAV BAR LINK ANIMATION --->
const linkTags = document.querySelectorAll(".link")

// this for loop applies animation function to each hyperlink
for (let linkTag of linkTags) {
	const underlineTag = document.querySelector(`#${linkTag.id} .underline`)

	// If that hyperlink is where user is currently in, then make that link styled already
	if (linkTag.dataset.current === "yes") {
		linkTag.style.opacity = 1
		linkTag.style.fontWeight = "bold"
		underlineTag.style.visibility = "visible"
		underlineTag.style.right = "0"
		continue
	}
}


