
function calculateDistance(avatarA, avatarB) {
  const dx = avatarB.x - avatarA.x;
  const dy = avatarB.y - avatarA.y;

  return Math.sqrt(dx * dx + dy * dy);
}

// Test 1
const avatarA = { x: 100, y: 150 };
const avatarB = { x: 130, y: 190 };

console.log("Distance:", calculateDistance(avatarA, avatarB));

// Test 2
console.log(
  "3-4-5 test:",
  calculateDistance({ x: 0, y: 0 }, { x: 3, y: 4 })
);

// Test 3
console.log(
  "Same position:",
  calculateDistance({ x: 5, y: 5 }, { x: 5, y: 5 })
);
