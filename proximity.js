
function calculateDistance(avatarA, avatarB) {
  const dx = avatarB.x - avatarA.x;
  const dy = avatarB.y - avatarA.y;

  return Math.hypot(dx, dy);
}

const PROXIMITY_RADIUS = 168;

function isNearby(avatarA, avatarB) {
  return calculateDistance(avatarA, avatarB) <= PROXIMITY_RADIUS;
}

// Test 1: Standard 3-4-5 example
console.log(
  "3-4-5 test:",
  calculateDistance(
    { x: 0, y: 0 },
    { x: 3, y: 4 }
  )
);

// Test 2: Same position
console.log(
  "Same position:",
  calculateDistance(
    { x: 5, y: 5 },
    { x: 5, y: 5 }
  )
);

// Test 3: Negative coordinates
console.log(
  "Negative coordinates:",
  calculateDistance(
    { x: -2, y: -3 },
    { x: 4, y: 5 }
  )
);

// Virtual office starting positions
// Coordinates are from Bharath's frontend configuration.
const avatarA = { x: 286, y: 365 };
const avatarB = { x: 608, y: 350 };
const avatarC = { x: 605, y: 585 };
const avatarD = { x: 1080, y: 132 };

// Test 4: Avatar A and Avatar B
console.log(
  "Avatar A - Avatar B:",
  calculateDistance(avatarA, avatarB).toFixed(2),
  "Nearby:",
  isNearby(avatarA, avatarB)
);

// Test 5: Avatar A and Avatar C
console.log(
  "Avatar A - Avatar C:",
  calculateDistance(avatarA, avatarC).toFixed(2),
  "Nearby:",
  isNearby(avatarA, avatarC)
);

// Test 6: Avatar C and Avatar B
console.log(
  "Avatar C - Avatar B:",
  calculateDistance(avatarC, avatarB).toFixed(2),
  "Nearby:",
  isNearby(avatarC, avatarB)
);

// Test 7: Exactly at the proximity boundary
console.log(
  "Boundary test:",
  isNearby(
    { x: 0, y: 0 },
    { x: PROXIMITY_RADIUS, y: 0 }
  )
);
