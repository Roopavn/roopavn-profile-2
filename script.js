
console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

// Scroll-reveal: fade + slide up sections/cards as they enter the viewport
let revealEls = document.querySelectorAll('.reveal')

if('IntersectionObserver' in window){
	let revealObserver = new IntersectionObserver(function(entries){
		entries.forEach(function(entry){
			if(entry.isIntersecting){
				entry.target.classList.add('in-view')
				revealObserver.unobserve(entry.target)
			}
		})
	}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

	revealEls.forEach(function(el){
		revealObserver.observe(el)
	})
} else {
	revealEls.forEach(function(el){
		el.classList.add('in-view')
	})
}
// console.log('Its working')

// let theme = localStorage.getItem('theme')

// if(theme == null){
// 	setTheme('light')
// }else{
// 	setTheme(theme)
// }

// let themeDots = document.getElementsByClassName('theme-dot')


// for (var i=0; themeDots.length > i; i++){
// 	themeDots[i].addEventListener('click', function(){
// 		let mode = this.dataset.mode
// 		console.log('Option clicked:', mode)
// 		setTheme(mode)
// 	})
// }

// function setTheme(mode){
// 	if(mode == 'light'){
// 		document.getElementById('theme-style').href = 'default.css'
// 	}

// 	if(mode == 'blue'){
// 		document.getElementById('theme-style').href = 'blue.css'
// 	}

// 	if(mode == 'green'){
// 		document.getElementById('theme-style').href = 'green.css'
// 	}

// 	if(mode == 'purple'){
// 		document.getElementById('theme-style').href = 'purple.css'
// 	}

// 	localStorage.setItem('theme', mode)
// }
