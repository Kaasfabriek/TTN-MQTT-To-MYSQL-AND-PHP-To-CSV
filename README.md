# TTN-MQTT-To-MYSQL-AND-PHP-To-CSV
A nodejs application that saves data to a very simple mysql database. A PHP file that makes a CSV from that.

1. Put the PHP file on your website server
2. Import the database into your mysql server (with phpmyadmin) Use the marjolein.sql for that.
3. Make sure your set the passwords right. Those are in the files sql.js and index.php
4. Set up the Nodejs application (sql.js) as following:
npm install mysql
npm install ttn
5. Start it with:
nodejs sql.js

