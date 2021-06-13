// helper functions for iterating over returned data
// modified averageOut because Heroku was doing concat instead of addition; changed from var to const & review to Review
module.exports = {
	averageOut: (reviews) => {
		const total = reviews.reduce((acc, Review) => acc += parseInt(Review.review_score), 0);
		const average = total / reviews.length;
		return average.toFixed(1);
	},
	cleanDate: (date) => {
		const str = date.toString();
		const mod = str.slice(4, 24);
		return mod;
	},
	upperCase: (item) => {
		const upper = item.toUpperCase();
		return upper;
	},
};
