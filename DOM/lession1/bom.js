console.log(navigator.geolocation);
function calculateDistance(location1, location2) {
  const [lat1, lon1] = location1;
  const [lat2, lon2] = location2;

  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

function findFastestCity(cities) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          let closesCity = null;
          let shortestDistance = Infinity;
          cities.forEach((city) => {
            const distance = calculateDistance(userLocation, city.location);
            if (distance < shortestDistance) {
              closesCity = city.name;
              shortestDistance = distance;
            }
          });

          resolve(closesCity);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            reject(new Error("Пользователь отказал в доступе к геолокации"));
          } else {
            reject(new Error("Ошибка при получении местоположения."));
          }
        }
      );
    }
  });
}

const cities = [
  { name: "Нью-Йорк", location: [40.03146, -51.9644] },
  { name: "Париж", location: [40.03151, -51.9643] },
  { name: "Москва", location: [40.0455, 151.96] },
  { name: "Токио", location: [40.03146, 51.9644] },
];

findFastestCity(cities)
  .then((closesCity) => {
    console.log(closesCity);
  })
  .catch((error) => {
    console.log(error.message);
  });

