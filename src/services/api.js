export async function fetchRestaurants() {
  const response = await fetch(`http://localhost:3001/api/restaurants/`, {
    next: { tags: ["config"] },
  });

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}

export async function fetchRestaurant(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/restaurant/${restaurantId}`
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}

export async function fetchRestaurantDishs(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}

export async function fetchAllDishs() {
  const response = await fetch(`http://localhost:3001/api/dishes/`, {
    next: { tags: ["config"] },
  });

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}

export async function fetchRestaurantReviews(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    {
      next: { tags: ["config"] },
    }
  );

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}

export async function fetchUsers() {
  const response = await fetch(`http://localhost:3001/api/users/`, {
    next: { tags: ["config"] },
  });

  if (!response.ok) {
    throw new Error("Error");
  }

  return await response.json();
}
