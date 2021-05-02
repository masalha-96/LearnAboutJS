let user = {

//prop
firstName: 'Suhaib',
lastName: 'Kamal',
userMajor: ' Computer Engineering',
userAge: 25,

//methods
unerInfo: function () {
    return `Name : ${this.firstName} ${this.lastName} \nMajor: ${this.userMajor} \nAge : ${this.userAge} `;
},

ageInDays: function () {
    return `Age in Days = ${this.userAge * 365 } Days `;
},

ageInHours: function () {
    return `Age in Hours = ${this.userAge * 365 * 12 } Hour `;
}

}; // class end


console.log(user.unerInfo());
console.log(user.ageInDays());
console.log(user.ageInHours());