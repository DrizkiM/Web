let dropdown = document.querySelectorAll('.dropdown');
for( let dropdownlist of dropdown ){
	// console.log(test);
	dropdownlist.addEventListener('click',function(_event){
		let target = _event.srcElement.nextElementSibling;
		target.classList.toggle('show');
	});
}
