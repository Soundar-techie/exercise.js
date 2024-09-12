const person = {
    firstName: "leo",
    lastName: "das",
    id: 5566,
};

    person.name = function() {
        return this.firstName + " " + this.lastName;
      }
      console.log (person.name())