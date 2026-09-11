function getGreeting(timeOfDay){
    return `Good ${timeOfDay}`;
}

function formatName(firstName,lastName){
    return `${firstName} ${lastName}`;
}

function createGreeting(firstName, lastName, timeOfDay){
  const name = formatName(firstName,lastName);
  const greeting = getGreeting(timeOfDay);
  const fullGreeting = `${name}, ${greeting}`;
  return fullGreeting;
}


//testing
console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));