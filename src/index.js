function house() {
  this.people = "3";
  this.family = "yes";
}
let detail = new house();
console.log("the object from house", detail);

function Person(name, dob) {
  this.name = name;
  this.kids = "2";
  this.dob = new Date();
  this.cal = function () {
    return name + dob;
  };
}
/* //instead of Person.prototype.place='TX' here by object destructure */
Person.prototype = {
  place: "TX",
  sex: "F",
  kidsn: function () {
    return this.name + " has kids " + this.kids;
  },
  marry: function (mName) {
    return "married name: " + this.name + " " + mName;
  }
};

const brad = new Person("brad", "10/10/1990");
console.log(brad.kidsn());
console.log(brad.marry("mathew"));
console.log(brad.hasOwnProperty("name"));
/* 
//protoypical inheritance */

function home() {
  this.people = "3";
  this.family = "yes";
}
/* //instead of Person.prototype.county='colin' here by object destructure */
Person.prototype = {
  place: "TX",
  sex: "F",
  kidsn: function () {
    return this.name + " has kids " + this.kids;
  },
  marry: function (mName) {
    return "married name: " + this.name + " " + mName;
  }
};
home.prototype = {
  county: "colin",
  details: function () {
    return "people:" + this.people + "  family:" + this.family;
  }
};
/* the folowing line 'Object.create(home.prototype)' 
need to add to inherit anything add to home  by  home.prototype */
father.prototype = Object.create(home.prototype);

function father(name, age, people, family) {
  this.name = name;
  this.age = age;
  home.call(this, people, family);
}
let aisha = new father("my", "father");

console.log("inheritance in functions prototype", aisha.details());
console.log("inheritance in functions prototype", aisha.people);
///////////////////////////
/* CLASS */

class Home {
  constructor(f, m) {
    this.female = f;
    this.male = m;
  }
  //methios
  details() {
    return this.female + this.male;
  }
}

class Father extends Home {
  constructor(female, male, name, place) {
    super(female, male);
    this.name = name;
    this.place = place;
  }
  //can call directly to class
  static inidpendentTotalMembers(a, b) {
    return " total members: " + (a + b);
  }
}

let Nila = new Father(2, 3, "nila", "kochi");
console.log(Nila.details());
console.log(Father.inidpendentTotalMembers(1, 6));
