//your JS code here. If required.
let ageIp= document.getElementById("age");
let nameIp= document.getElementById("name");
let btn= document.getElementById("btn");

btn.addEventListener("click", (e) => {
	e.preventDefault();
	
	let age= ageIp.value;
	let name= nameIp.value;
	
	if(!age || !name){
		alert("Please enter valid details.");
		return
	}

	const votePromise= new Promise((resolve, reject) => {
		setTimeout(() => {
			if(age > 18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		}, 3000);
	});

	
	votePromise.then((data) => {
		alert(data);
	}).catch((err) => {
		alert(err);
	});
});
