const googleTrends = require('google-trends-api');

exports.trendAverages = async (req, res) => {
    try{
        const {keyword} = req.params;
        let keywords = keyword.split(",");
        let outputArray = [];
        let time2 = new Date();
        let time1 = new Date(time2.getFullYear()-1, time2.getMonth(), time2.getDate());
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
    catch(e){
        console.log(e);
    }
}
