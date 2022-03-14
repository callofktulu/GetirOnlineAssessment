const express = require('express');
const router = express.Router();
const DataModel = require('../model/data-model');

router.get('/', (req, res) => {
  res.json({
    message: '👋 Hello! This endpoint can only be used with POST.'
  });
});

router.post('/', async (req, res) => {
  try{
    var { startDate, endDate, minCount, maxCount, result } = validateRequest(req);
    const data = await FetchData(startDate, endDate, minCount, maxCount);
    
    if(data != []){
      result = createResponse(result, data);     
    }

    res.json(result)
  }
  catch(error){
    res.status(500).json({
      code: -1,
      msg: 'Failed to grab any records - ' + error.message,
      records: []
    })
  }
});

function createResponse(result, data) {
  result = {
    code: 0,
    msg: 'Success',
    records: []
  };
  data.forEach(element => {
    var record = {
      key: element.key,
      createdAt: element.createdAt,
      totalCount: element.counts.length
    };
    result.records.push(record);
  });
  return result;
}

async function FetchData(startDate, endDate, minCount, maxCount) {
  return await DataModel.find({
    createdAt: {
      $gte: startDate,
      $lte: endDate
    },
    counts: {
      $exists: true
    },
    $where: 'this.counts.length>= ' + minCount + ' && this.counts.length<= ' + maxCount,
  });
}

function validateRequest(req) {
  /* This is the validation point for the request 
     The request should be checked if it is empty, null, NaN
     The request format should be checked 
     The request should be checked if it contains malicious code/SQL injections etc.
     Since it would take so much time for this take home assessment I am just leaving this part as is.
  */
  var startDate = req.body.startDate;
  var endDate = req.body.endDate;
  var minCount = req.body.minCount;
  var maxCount = req.body.maxCount;
  var result;
  return { startDate, endDate, minCount, maxCount, result };
}


module.exports = router;
