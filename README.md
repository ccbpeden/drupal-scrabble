# **Drupal Scrabble**
By Erica Wright & Charles Peden, 4/26/2017

# Description
Drupal Scrabble game with player and board tiles. Players receive letter tiles and must compose words on the scrabble board for the highest number of points.

## Setup/Installation Requirements
_To view and use this application:_
* It is necessary to download and install MAMP to use this application
    * Go to [mamp.info] (https://www.mamp.info/en/downloads/) to download MAMP for free. Set your Apache port to 8888 and mySQL port to 8889, and launch the server from the project directory.
    * This project must be run using PHP 7.0.0 (NOT 5.2.4 or below!)
* Clone this git repository: https://github.com/ericaw21/Drupal-scrabble
* Inside of the **_db-backup_** folder, unzip the **_scrabble.sql.zip_** file
* Open MAMP (or equivalent) and click on preferences/ports.
    * Make sure that the Apache port number is set to 8888 and the MySQL port number is set to 8889
    * Click start servers.
* Type **_localhost:8888/phpmyadmin_** into your web browser
    * Click the _Import_ tab on the nav bar
    * Click _Choose File_ and navigate to the unzipped **_scrabble.sql_**
    * click _GO_
* Type **_localhost:8888_** into your web browser
* The application will load and be ready to use!

## Known Bugs
* No known bugs

## Technologies Used
* Drupal
* PHP
* mySQL
* HTML
* CSS
* JavaScript

This software is licensed under the GPL license

_If you have any questions or comments about this program, you can contact me at [ericaw21@gmail.com](mailto:ericaw21@gmail.com)._

Copyright (c) 2017 Erica Wright & Charles Peden
