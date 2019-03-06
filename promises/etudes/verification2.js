// Declare class representing a person record.
class PersonRecord {
	constructor(data) {
		this.name = data.name;
		this.surname = data.surname;
		this.age = data.age;
		this.sex = data.sex;
	}
}

// fitForService: check if person represented by personRecord
// is male and at least 18 years of age.
function fitForService(personRecord) {
	return new Promise(function(resolve, reject) {
		if (personRecord.age >= 18 && personRecord.sex === 'M') {
			resolve();
		} else {
			reject();
		}
	})
}

// Create an array of person records.
p = [new PersonRecord({
		name : "Julia",
		surname : "Smith",
		age : 25,
		sex : "F"
	}),
	new PersonRecord({
		name : "Julian",
		surname : "Smith",
		age : 27,
		sex : 'M'
	}),
	new PersonRecord({
		name : "John",
		surname : "Williams",
		age : 32,
		sex : 'M'
	}),
	new PersonRecord({
		name : "Kathleen",
		surname : "Williams",
		age : 26,
		sex : 'F'
	})];

// For each person record print if the person is fit for service.
p.map(p => fitForService(p).then(function(result) {
	console.log("%s %s is fit for service.", p.name, p.surname);
}).catch(function(result) {
	console.log("%s %s is not fit for service.", p.name, p.surname);
}))