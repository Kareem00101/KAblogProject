// requires
const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  params: {language_code: 'en'},
  headers: {
    'x-rapidapi-host': 'quotes15.p.rapidapi.com',
    'x-rapidapi-key': '94597ff931msh3a1742579431ad7p15ed80jsna4dec8d199b1'
  }
};


// the functions
const axios_index = (request, response, next) =>{
    let aData;
    axios.request(options).then(function (res) {
        console.log(res.data);
        aData = res.data;
        response.render('axios/index',{title:'API content', data: aData.content});
    }).catch(function (error) {
        console.error(error);
    });
    //response.render('axios/index',{title:'API content', data: aData});
}

// exports
module.exports ={
    axios_index
}


// trash code
/*axios.get('https://quotes15.p.rapidapi.com/quotes/random/')
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    });*/