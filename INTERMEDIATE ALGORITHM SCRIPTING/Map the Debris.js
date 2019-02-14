function orbitalPeriod(arr) {
    const finalArray = [];
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    const calculateOrbitalPeriod = ((avgAlt) => {
        const addEarthRadiusAvgAlt = avgAlt + earthRadius;
        const powEarthRadiusAvgAlt = Math.pow(addEarthRadiusAvgAlt, 3);
        const splitEarthRadiuAvgAltWithGM = powEarthRadiusAvgAlt / GM;
        const sqrtAllEforts = Math.sqrt(splitEarthRadiuAvgAltWithGM);
        const countOrbitalPeriod = 2 * Math.PI * sqrtAllEforts;
        return Math.round(countOrbitalPeriod);
    });

    for (let val in arr) {
        // console.log(arr[val])
        const average = arr[val]["avgAlt"];
        const orbitalPeriod = calculateOrbitalPeriod(average);
        const finalObiect = { name: arr[val]["name"], orbitalPeriod: orbitalPeriod };
        finalArray.push(finalObiect);
    }

    return finalArray;
}

orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
]);
