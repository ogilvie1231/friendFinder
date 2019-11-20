var friends = require('../data/friends')



module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function(req, res) {
        var userInfo = req.body
        var userScore = userInfo.scores

        var bestMatch = {
            name: '',
            photo: '',
            score: Infinity
        }
        console.log('bestMatch: ', bestMatch)
        for (let i = 0; i < friends.length; i++) {
            const indiv = friends[i];

            var indivScores = indiv.scores

            var overallScore = 0

            for (let j = 0; j < indivScores.length; j++) {
                const targetScore = indivScores[j];

                overallScore += Math.abs(userScore[j] - targetScore)

            }
            if (overallScore <= bestMatch.score) {
                bestMatch.name = indiv.name
                bestMatch.photo = indiv.photo
                bestMatch.score = overallScore

            }


        }
        friends.push(req.body)
        res.json(bestMatch)
    });
};