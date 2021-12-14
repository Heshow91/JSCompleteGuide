
// calculate the distance between subway stops
// how to get from one line to another
// all intersect at the same stop park st
// count distance to park st then the remaining distance to other stop if it connects
const Red = [
	'South Station',
	'Park Street',
	'Kendall',
	'Central',
	'Harvard',
	'Porter',
	'Davis',
	'Alewife',
];
const Green = [
	'Government Center',
	'Park Street',
	'Boylston',
	'Arlington',
	'Copley',
	'Hynes',
	'Kenmore',
];
const Orange = [
	'North Station',
	'Haymarket',
	'Park Street',
	'State',
	'Downtown Crossing',
	'Chinatown',
	'Back Bay',
	'Forest Hills',
];

// only count stops on the redline first

const subwayLines = {
	Red: [
		'South Station',
		'Park Street',
		'Kendall',
		'Central',
		'Harvard',
		'Porter',
		'Davis',
		'Alewife',
	],
	Green: [
		'Government Center',
		'Park Street',
		'Boylston',
		'Arlington',
		'Copley',
		'Hynes',
		'Kenmore',
	],
	Orange: [
		'North Station',
		'Haymarket',
		'Park Street',
		'State',
		'Downtown Crossing',
		'Chinatown',
		'Back Bay',
		'Forest Hills',
	],
};
// testing to see the Red variables
// const test = 'Red';
// console.log(subwayLines[test]);

// find the difference between stops on the same line
const sameLineStops = (line, start, end) => {
	// want to find the array index of the start station and any line we want
	const startIndex = subwayLines[line].indexOf(start);
	// find the array index of the end station and any line we want
	const endIndex = subwayLines[line].indexOf(end);
	// fo a little bit of math to find the difference (aka: distance)
	// we will have to account for the negative numbers b/c we cant go a negative amount of stops
	// absolute value is the value from 0 we will use the Math property
	return Math.abs(startIndex - endIndex);
};
console.log(sameLineStops('Red', 'Park Street', 'Alewife'));
console.log(sameLineStops('Green', 'Copley', 'Park Street'));
// will return -6 becuase its going backwards
// console.log(redLineStops('Park Street', 'Alewife')); // want to see the amount of stops between stations

const stopsBetweenStations = function (
	startLine,
	startStation,
	endLine,
	endStation
) {
	// return early if there is only one line, so it does not count it twice
	// is startLine equals endline then we only need startLine startStation and endStation
	if (startLine === endLine)
		return sameLineStops(startLine, startStation, endStation);
	// find the start line at the start station to park street
	const startStationToParkSt = sameLineStops(
		startLine,
		startStation,
		'Park Street'
	);
	// find end line station from park street
	const parkStToEndStation = sameLineStops(endLine, 'Park Street', endStation);
	// add them together
	return Math.abs(startStationToParkSt + parkStToEndStation);
};
console.log(
	stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'), // 0
	stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'), // 7
	stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'), // 6
	stopsBetweenStations('Green', 'Government Center', 'Orange', 'Chinatown'), // 4
	stopsBetweenStations('Orange', 'State', 'Green', 'Copley'), // 4
	stopsBetweenStations('Green', 'Government Center', 'Red', 'South Station') // 2
);
