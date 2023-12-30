/*===== MENU SHOW LOGIC=====*/
const toggleBars = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (toggleBars && navMenu) {
	toggleBars.addEventListener('click', () => {
		navMenu.classList.toggle('show');
	})
}

/*===== REMOVE MENU ON MOBILE WHEN NAV ITEM CLICKED=====*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((navLink) => navLink.addEventListener('click', () => {
	navMenu.classList.remove('show');
}))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 400;
		sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}
window.addEventListener('scroll', scrollActive)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2000,
	delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*========= SEND EMAIL FROM THE FORM AND RETURN TO HOME SECTION ===========*/
function emailSend() {
	const form = document.getElementById("contact__form");
	const data = new FormData(form)

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "vdmailx@gmail.com",
		Password: "0D6855CFA7B73D3E957B0664286FAEAE2B67",
		To: 'vladimir.davidov.pro@gmail.com',
		From: "vdmailx@gmail.com",
		Subject: "Portfolio Website - New message",
		Body: `There's a new message from a visitor of your portfolio website.
		<br>
		<br>
		His name is: ${data.get('name')}.
		<br>
		<br>
		His email is: ${data.get('email')}.
		<br>
		<br>
		His message is the following:
		<br>
		<br>
		${data.get('message')}`
}).then(
			message => alert(message)
		);
}

document.getElementById("contact__form").addEventListener("submit", function (event) {
	event.preventDefault();
	this.reset();
})
