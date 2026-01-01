const user = {
  name: "Alice",
  points: 100
};

// Convert to string before saving
localStorage.setItem('userProfile', JSON.stringify(user));

// Convert back to an object when reading
const savedUser = JSON.parse(localStorage.getItem('userProfile'));

console.log(savedUser.name); // Output: Alice