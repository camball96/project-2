// helper functions for iterating over returned data
module.exports = {
    averageOut: reviews => {
        var total = reviews.reduce((acc, review) =>
            acc + review.review_score
            , 0);
        var average = total / reviews.length;
        return average.toFixed(1)
    },
    test: data => {
        return data + 'ok'
    }
};