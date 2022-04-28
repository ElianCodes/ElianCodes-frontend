document.addEventListener('DOMContentLoaded', () => {
	checkScroller()
	const filterItems = document.querySelectorAll('.filter-item')
	const articles = document.querySelectorAll('.blog-article')
	let activeFilters = []

	document.getElementById('toggleFilter').addEventListener('click', () => {
		document.getElementById('toggleFilter').classList.toggle('rotate-180')
		document.getElementById('blogpostFilter').classList.toggle('hidden')
	})

	filterItems.forEach(item => {
		item.addEventListener('click', () => {
			articles.forEach(article => article.classList.add('hidden'))

			const filterItem = item.innerHTML.toString()
			activeFilters.includes(filterItem) ? activeFilters = activeFilters.filter(item => item !== filterItem) : activeFilters.push(filterItem)
			
			filterArticles()
			checkActiveFilters()
			checkScroller()
		})
	})

	const filterArticles = () => {
		articles.forEach(article => {
			const articleTitle = article.childNodes[1].firstChild.innerHTML.toString();
			activeFilters.forEach(filterItem => {
				if(articleTitle.includes(filterItem)) {
					article.classList.remove('hidden')
				}
			})  
		})
		if(activeFilters.length == 0){
			articles.forEach(article => article.classList.remove('hidden'))
		}
	}

	const checkActiveFilters = () => {
		filterItems.forEach(item => {
			activeFilters.includes(item.innerHTML) ? item.classList.add('bg-gray-600') : item.classList.remove('bg-gray-600')
		})
	}
})

const checkScroller = () => {
	const filter = document.querySelector('.blogpost-filter')
	
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		filter.classList.add('bottom-16')
		filter.classList.remove('bottom-8')
	} else {
		filter.classList.add('bottom-8')
		filter.classList.remove('bottom-16')
	}
}

window.onscroll = () => {
	checkScroller()
};