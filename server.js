const express = require('express');
const app = express();
const mongodb = require('mongodb');

const dburl = 'mongodb://cws:cwscws1@ds141611.mlab.com:41611/cms-mobile-app';
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    const MC = mongodb.MongoClient;
    MC.connect(dburl, function(err, client) {
        client.db('cms-mobile-app').collection('agents').find().toArray((err, result) => {
            if (err) return console.log(err);
            active = result.filter(x => x.current_status == "Active");
            console.log(active.length);
            res.render('index.ejs', {agents: result, active_agents: active});
        });
    });
    // res.render('index.ejs', {agents: result});
});

app.listen(3000, function() {
    console.log('yooo');
});
