<?php

class User extends Dbh{
    
    protected function getAllUsers(){
        $sql = "SELECT * FROM user";
        $result = $this->connect()->query($sql);

        /* Gick det bra? Kunde SQL-satsen köras? */
        if (!$result) {
            die("Något blev fel med SQL-satsen.");
        } else {
            echo "<p>Data kunde hämtas!</p>";
        }

        $numRows = $result->num_rows;
        if ($numRows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            return $data;
        }
    }
}
