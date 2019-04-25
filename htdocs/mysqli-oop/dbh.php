<?php

class Dbh{
    private $servername;
    private $username;
    private $password;
    private $dbname;

    protected function connect(){
        $this->servername = "localhost:8080";
        $this->username = "root";
        $this->password = "";
        $this->dbname = "ooptutorial";

        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

        /* Fungerade anslutningen? */
        if ($conn->connect_error) {
            die("Kunde inte ansluta till databasen: " . $conn->connect_error);
        } else {
            echo "<p>Anslutningen lyckades!</p>";
        }

        return $conn;
    }
}