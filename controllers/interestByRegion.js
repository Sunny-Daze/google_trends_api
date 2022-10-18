const googleTrends = require('google-trends-api');

exports.interestByRegionKeyword = async (req, res) => {
    try{
        const {keyword} = req.params;
        googleTrends.interestByRegion({keyword: keyword, geo:"US"})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch(e){
        console.log(e);
    }
}

exports.interestByRegionKeywordPast12M = async (req, res) => {
    try{
        const {keyword} = req.params;
        let time2 = new Date();
        let time1 = new Date(time2.getFullYear()-1, time2.getMonth(), time2.getDate());
        googleTrends.interestByRegion({keyword: keyword, startTime:time1, endTime:time2, geo:"US"})
        .then((data) => {
            res.send(data);
            // console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch(e){
        console.log(e);
    }
}

exports.interestByRegionKeywordCustomDates = async (req, res) => {
    try{
        const {keyword, fromDY, fromDM, fromDD, toDY, toDM, toDD} = req.params;
        let time1 = new Date(fromDY, fromDM, fromDD);
        let time2 = new Date(toDY, toDM, toDD);
        googleTrends.interestByRegion({keyword: keyword, startTime:time1, endTime:time2, geo:"US"})
        .then((data) => {
            res.send(data);
            // console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    catch(e){
        console.log(e);
    }
}