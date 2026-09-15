function getDisplayName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  } else if (firstName) {
    return firstName;
  } else if (lastName) {
    return lastName;
  }

  return "";
}

function getLocation(user) {
  const address = user.address;
  if (!address) return "";

  const city = address.city;
  const country = address.country;

  if (city && country) {
    return `${city}, ${country}`;
  } else if (city) {
    return city;
  } else if (country) {
    return country;
  }

  return "";
}

function getContactSummary(user) {
  return {
    email: user.email,
    phone: user.phone,
  };
}

function isAccountActive(user) {
  return user.account.status === "active";
}

function createProfileSummary(user) {
  const displayName = getDisplayName(user);
  const location = getLocation(user);
  const contact = getContactSummary(user);
  const active = isAccountActive(user);
  return {
    displayName,
    location,
    contact,
    active,
    plan: user.account.plan,
  };
}

const user = {
  id: 42,
  firstName: "Ava",
  lastName: "Stone",
  email: "ava@example.com",
  phone: null,
  address: {
    city: "London",
    country: "UK",
  },
  account: {
    status: "active",
    plan: "pro",
  },
};

console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));
