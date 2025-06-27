function userData(name) {
  let email = "";

  return {
    getName: () => name,
    setEmail: (val) => { email = val; },
    getEmail: () => email
  };
}

const user = userData("Alice");
console.log(user.getName()); // Alice
user.setEmail("alice@example.com");
console.log(user.getEmail()); // alice@example.com

// 🔒 No direct access to email or name
console.log(user.email); // undefined
