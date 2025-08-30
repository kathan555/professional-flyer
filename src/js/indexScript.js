function toggleTheme() {
	const body = document.body;
	const themeIcon = document.getElementById('theme-icon');
	const themeText = document.getElementById('theme-text');
	
	if (body.getAttribute('data-theme') === 'light') {
		// Switch to dark theme
		body.removeAttribute('data-theme');
		themeIcon.textContent = '🌙';
		themeText.textContent = 'Light';
		localStorage.removeItem('theme');
	} else {
		// Switch to light theme
		body.setAttribute('data-theme', 'light');
		themeIcon.textContent = '☀️';
		themeText.textContent = 'Dark';
		localStorage.setItem('theme', 'light');
	}
}

function openMail() {
	window.location.href = 'mailto:patel.kathan555@gmail.com?subject=Professional Inquiry&body=Hello Kathan,%0D%0A%0D%0AI would like to discuss a potential project opportunity with you.%0D%0A%0D%0ABest regards,';
}

function openLinkedIn() {
	window.open('https://www.linkedin.com/in/kathan-patel-92215213a/', '_blank');
}

function openGitHub() {
	window.open('https://github.com/kathan555', '_blank');
}

function downloadResume() {
	// Track download event (optional)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
            'event_category': 'Resume',
            'event_label': 'PDF Download'
        });
    }
	
    // You can replace 'resume.pdf' with the actual path to your PDF file
    const link = document.createElement('a');
    link.href = 'assets/Kathanpatelcv.pdf'; // Update this path to your PDF file
    link.download = 'Kathan_Patel_CV.pdf'; // Name for the downloaded file
    link.click();
}

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Set active navigation item based on scroll position
function setActiveNavItem() {
	const sections = document.querySelectorAll('section');
	const navItems = document.querySelectorAll('.nav-item');
	
	let currentSection = '';
	
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		
		if (window.scrollY >= (sectionTop - 100)) {
			currentSection = section.getAttribute('id');
		}
	});
	
	navItems.forEach(item => {
		item.classList.remove('active');
		if (item.getAttribute('href').substring(1) === currentSection) {
			item.classList.add('active');
		}
	});
}

// Initialize touch events for mobile
function initTouchEvents() {
	// Prevent highlight on tap
	document.addEventListener('touchstart', function() {}, {passive: true});
	
	// Add touch support for navigation items
	const navItems = document.querySelectorAll('.nav-item');
	navItems.forEach(item => {
		item.addEventListener('touchend', function(e) {
			// Add a slight delay to allow the active state to be visible
			setTimeout(() => {
				this.classList.add('active-touch');
			}, 100);
			
			setTimeout(() => {
				this.classList.remove('active-touch');
			}, 300);
		});
	});
	
	// Handle window resize to adjust navigation
	window.addEventListener('resize', function() {
		// Adjust navigation for different screen sizes if needed
	});
}

// Set default theme on page load
document.addEventListener('DOMContentLoaded', function() {
	const savedTheme = localStorage.getItem('theme');
	const themeIcon = document.getElementById('theme-icon');
	const themeText = document.getElementById('theme-text');
	
	if (savedTheme === 'light') {
		document.body.setAttribute('data-theme', 'light');
		themeIcon.textContent = '☀️';
		themeText.textContent = 'Dark';
	} else {
		// Default to dark theme
		themeIcon.textContent = '🌙';
		themeText.textContent = 'Light';
	}
	
	// Set active nav item based on scroll position
	window.addEventListener('scroll', setActiveNavItem);
	
	// Set initial active nav item
	setActiveNavItem();
	
	// Add touch event listeners for mobile
	initTouchEvents();
	
});