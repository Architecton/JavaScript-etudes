class PersonRecord {
	constructor(data) {
		this.name = data.name;
		this.surname = data.surname;
		this.age = data.age;
		this.sex = data.sex;
	}
}

function fitForService(personRecord) {
	return new Promise(function(resolve, reject) {
		if (personRecord.age >= 18 && personRecord.sex === 'M') {
			resolve();
		} else {
			reject();
		}
	})
}

var p1 = new PersonRecord({
	name : 'Julia',
	surname : 'Smith',
	age : 25,
	sex : 'F'
});

var p2 = new PersonRecord({
	name : 'Julian',
	surname : 'Smith',
	age : 27,
	sex : 'M'
});


fitForService(p1).then(function(result) {
	console.log(p1.name + " " + p1.surname + " is fit for service.")
}, function(result) {
	console.log(p1.name + " " + p1.surname + " is not fit for service.")
})

fitForService(p2).then(function(result) {
	console.log(p2.name + " " + p2.surname + " is fit for service.")
}).catch(function(result) {
	console.log(p2.name + " " + p2.surname + " is not fit for service.")
})