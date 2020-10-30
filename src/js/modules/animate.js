const blocks = document.querySelectorAll('.block');

const options = {
	root: null,
	rootMargin: '50px 20px 75px 30px',
    threshold: [0, 0.25, 0.75, 1]
};

const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fxBlock');
        } else {
            entry.target.classList.remove('fxBlock');
        }
	})
}, options);

blocks.forEach(block => {
	observer.observe(block)
});