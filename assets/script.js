let dropdown = document.querySelectorAll('.dropdown');
for( let dropdownlist of dropdown ){
	// console.log(test);
	dropdownlist.addEventListener('click',function(_event){
		let target = _event.srcElement.nextElementSibling;
		target.classList.toggle('show');
	});
}

//script pembelajaran
function testingAlert() {
	let a = 10,b=5;
	let c = a+b;

	alert(c);
}

const testingElement = document.getElementById('writeInElement');

function writeInnerhtml() {
	let testingWrite = document.getElementById('testWrite').value;
	testingElement.innerHTML = testingWrite;
}
