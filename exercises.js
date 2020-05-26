//Exercises that I perform on my own

//1. A simple function that takes in a number, representing the person's age, and returns the boolean true  if they are 18 years old or older
function canIVote (number) {
  if (number >= 18) {
    return true
  }else {
    return false
  }
}

console.log(canIVote(19))

//2. Function that takes in two strings and returns "You agree!" if they match
function agreeOrDisagree (stringtrue, stringfalse){
    if(stringtrue === stringfalse){
      return "You agree!"
    }else{
      return "You disagree!"
    }
  }
  console.log(agreeOrDisagree("ywep", "yep")) 

  //3. Function that takes a person's age as a nimber and returns with phase of life they are in
  function lifePhase (age) {
    if(age <= 3 && age >= 0 ) {
    return "baby"
  } else if (age <= 12 && age >= 4){
    return "child"
  }else if (age<= 19 && age >= 13) {
    return "teen"
  }else if (age<= 64 && age >= 20){
    return "adult"
  }else if(age<= 140 && age >= 65){
    return "senior citizen"
  }else {
    return "This is not a valid age"
  }
}
 console.log(lifePhase(54)) //prints adult

 // 4. Function that takes three numbers finds the average of those numbers and returns the letter grade(as string)

 const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
 }

 // 5. Function that returns the tip as a number
 const tipCalculator = (quality, total) => {
  switch (quality) {
      case 'bad':
          return total * .05;
      case 'ok':
          return total * .15;
      case 'good':
          return total * .20;
      case 'excellent':
          return total * .30;
      default:
          return total * .18;

  }
}

// 6. Looping through arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// looping through array
for (let i = 0; i < vacationSpots.length; i++ ) {
  console.log(`I would love to visit ${vacationSpots[i]}`)
}