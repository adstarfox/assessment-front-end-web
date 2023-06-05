console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert(`Form has been submitted`)
	console.log('form submit');
}

const duckieAlert = (evt) => {
	evt.preventDefault()
	
	let complimentArry = [`You look Great!`,`You're excellent at typing`,`You have great teeth!`,`You have nice hair`,`You're smile could outshine the sun`,`You look good in that shirt`]

	let rndCompliment = complimentArry[Math.floor(Math.random()* complimentArry.length)]

	alert(rndCompliment)

}


let form = document.querySelector('#contact');
let duckie = document.querySelector(`#duckie-pic`)

form.addEventListener('submit', handleSubmit);
duckie.addEventListener(`mouseover`, duckieAlert)
