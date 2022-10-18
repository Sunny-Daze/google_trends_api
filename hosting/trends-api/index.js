const googleTrends = require('google-trends-api');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.interestOverTime = functions.https.onRequest(async (req, res) => {
    const keyword = req.query.key;
    try {
        await googleTrends.interestOverTime({ keyword: keyword, geo: "US" })
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    catch (e) {
        res.send(e);
    }
});

exports.interestOverTimePast12M = functions.https.onRequest(async (req, res) => {
    const keyword = req.query.key;
    let time2 = new Date();
    let time1 = new Date(time2.getFullYear()-1, time2.getMonth(), time2.getDate());
    try {
        await googleTrends.interestOverTime({keyword: keyword, startTime:time1, endTime:time2, geo:"US"})
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    catch (e) {
        res.send(e);
    }
});

exports.interestOverTimeCustomDates = functions.https.onRequest(async (req, res) => {
    const keyword = req.query.key;
    const fromDY = req.query.fromDY;
    const fromDM = req.query.fromDM;
    const fromDD = req.query.fromDD;
    const toDY = req.query.toDY;
    const toDM = req.query.toDM;
    const toDD = req.query.toDD;
    let time1 = new Date(fromDY, fromDM, fromDD);
    let time2 = new Date(toDY, toDM, toDD);
    try {
        await googleTrends.interestOverTime({keyword: keyword, startTime:time1, endTime:time2, geo:"US"})
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    catch (e) {
        res.send(e);
    }
});

exports.interestByRegion = functions.https.onRequest(async (req, res) => {
    const keyword = req.query.key;
    try {
        await googleTrends.interestByRegion({ keyword: keyword, geo: "US" })
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    catch (e) {
        res.send(e);
    }
});

exports.interestByRegionPast12M = functions.https.onRequest(async (req, res) => {
    const keyword = req.query.key;
    let time2 = new Date();
    let time1 = new Date(time2.getFullYear()-1, time2.getMonth(), time2.getDate());
    try {
        await googleTrends.interestByRegion({keyword: keyword, startTime:time1, endTime:time2, geo:"US"})
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    catch (e) {
        res.send(e);
    }
});

exports.interestByRegionCustomDates = functions.https.onRequest(async (req, res) => {
    const keyword = req.query.key;
    const fromDY = req.query.fromDY;
    const fromDM = req.query.fromDM;
    const fromDD = req.query.fromDD;
    const toDY = req.query.toDY;
    const toDM = req.query.toDM;
    const toDD = req.query.toDD;
    let time1 = new Date(fromDY, fromDM, fromDD);
    let time2 = new Date(toDY, toDM, toDD);
    try {
        await googleTrends.interestByRegion({keyword: keyword, startTime:time1, endTime:time2, geo:"US"})
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    catch (e) {
        res.send(e);
    }
});

exports.trendAverages = functions.https.onRequest(async (req, res) => {
    const keyword = req.query.key;
    let keywords = keyword.split(",");
    let outputArray = [];
    let time2 = new Date();
    let time1 = new Date(time2.getFullYear()-1, time2.getMonth(), time2.getDate());
    try {
        for (let i = 0; i < Math.ceil(keywords.length/4); i++) {
            let subKey = keywords.slice((i*4), (i*4)+4);
            subKey.push("google");
            await googleTrends.interestOverTime({keyword: subKey, startTime:time1, endTime:time2, geo:"US"})
            .then((data) => {
                let jsonData = JSON.parse(data);
                let temp = jsonData.default.averages;
                // console.log(temp);
                temp.pop();
                temp.forEach(element => {
                    outputArray.push(element);                      
                });
            })
            .catch((err) => {
                console.log(err);
            })
        }
        res.send(outputArray);
    }
    catch (e) {
        res.send(e);
    }
});