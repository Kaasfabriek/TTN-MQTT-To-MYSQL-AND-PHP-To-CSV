var ttn = require('ttn');

var region = 'eu';
var appId = '????'; // The application username. Go to Http://console.thethingsnetwork.org/ to set up one
var accessKey = 'ttn-account-v2.??????'; // Same as above. Now the access key

var client = new ttn.Client(region, appId, accessKey);

var mysql      = require('mysql');
 

// Connect to the db
    client.on('message', function(deviceId, data) {
  	console.info('[INFO] ', 'Message:', deviceId, JSON.stringify(data, null, 2));
	console.info(data.metadata.time + " " + data.payload_fields.payload);
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'marjolein', // Set this toe the username of your mysql
  password : '??????', // Set this to the password of your mysql
  database : 'marjolein'
});
connection.connect();
var datum = require('moment')(data.metadata.time).format('YYYY:MM:DD h:mm:ss'); 
connection.query('INSERT INTO meetwaarden (datum, waarde) VALUES(' + mysql.escape(datum) +', ' + mysql.escape(data.payload_fields.payload) + ')', function(err, rows, fields) {
  if (err) throw err;
 

});
 
connection.end();


    });


client.on('connect', function(connack) {
  console.log('[DEBUG]', 'Connect:', connack);
});

client.on('error', function(err) {
  console.error('[ERROR]', err.message);
});

client.on('activation', function(deviceId, data) {
  console.log('[INFO] ', 'Activation:', deviceId, JSON.stringify(data, null, 2));
});

client.on('device', null, 'down/scheduled', function(deviceId, data) {
  console.log('[INFO] ', 'Scheduled:', deviceId, JSON.stringify(data, null, 2));
});


