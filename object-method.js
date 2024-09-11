const person = {
    firstName: "leo",
    lastName: "das",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName())
