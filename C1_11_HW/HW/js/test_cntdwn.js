const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.j-countdown__minutes');
const seconds = document.querySelector('.j-countdown__seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.j-btn__plus');
const minus = document.querySelector('.j-btn__minus');
const start = document.querySelector('.j-btn__start');

let time = 0;
let nIntervId = null;

const numberConverter = (value) => {
	if (value < 10) {
		return `0${value}`;
	}
	return `${value}`;
}

const setCountdownTime = () => {
	const minutes = Math.floor(time )
}