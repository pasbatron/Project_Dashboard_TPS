<?php require_once "connection.php" ?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Image/icon_pt_otics_1.png" type="image/icon type">
    <link rel="stylesheet" href="css/portal_produksi.css">
    <title>Monitoring Produksi</title>
</head>
<body>


    <header>
        <nav>
            <h1>PT.Otics Indonesia <h3>Monitoring Produksi</h3></h1>
        </nav>
    </header>
    <br><hr>
    <h2>History Monitoring Produksi</h2>
    <hr>
    <!-- <div class="try-table">
        <table>
        </table>
    </div> -->


    <div class="table-monitoring">
        <table class="table_produksi">
            <tr>
                <th rowspan="2">No</th>
                <th rowspan="2">Line</th>
                <th rowspan="2">Part</th>
                <th rowspan="2">CT(s)</th>
                <th rowspan="2">Eff</th>
                <th rowspan="2">Cap/Jam</th>
                <th rowspan="2">Target(Pcs)</th>
                <th rowspan="2">Aktaul(Pcs)</th>
                <th rowspan="2">Eff(%)</th>
                <th colspan="2">Delay</th>
                <th rowspan="2">Status</th>
            </tr>
            <tr>
                <th>Time</th>
                <th>Pcs</th>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '1' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){
                        echo "<td>1</td>" . PHP_EOL;
                        echo "<td>Common Rail 1</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '2' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>2</td>" . PHP_EOL;
                        echo "<td>Common Rail 2</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '3' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>3</td>" . PHP_EOL;
                        echo "<td>Common Rail 3</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '4' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>4</td>" . PHP_EOL;
                        echo "<td>Common Rail 4</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '5' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>5</td>" . PHP_EOL;
                        echo "<td>Common Rail 5</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '6' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>6</td>" . PHP_EOL;
                        echo "<td>Common Rail 6</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '7' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>7</td>" . PHP_EOL;
                        echo "<td>Common Rail 7</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '8' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>8</td>" . PHP_EOL;
                        echo "<td>Common Rail 8</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '9' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>9</td>" . PHP_EOL;
                        echo "<td>Common Rail 9</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '10' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>10</td>" . PHP_EOL;
                        echo "<td>Common Rail 10</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '11' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>11</td>" . PHP_EOL;
                        echo "<td>Common Rail 11</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <tr>
                <?php 
                    $sql = "SELECT * FROM 03_table_all_transit_montiv WHERE line_id = '12' order by id desc LIMIT 1";
                    $statement = $connection->query($sql);
                    foreach ($statement as $row){

                        echo "<td>12</td>" . PHP_EOL;
                        echo "<td>Common Rail 12</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['cycle_time']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['name_product']."</td>" . PHP_EOL;
                        echo "<td>".$row['target']."</td>" . PHP_EOL;
                        echo "<td>".$row['aktual']."</td>" . PHP_EOL;
                        echo "<td>".$row['efisiensi']."</td>" . PHP_EOL;
                        echo "<td>".$row['delay']."</td>" . PHP_EOL;
                        echo "<td>"."Belum"."</td>" . PHP_EOL;
                        echo "<td>".$row['status']."</td>" . PHP_EOL;
                    }
                ?>
            </tr>
            <?php $connection = null; ?>           
        </table>
    </div>
    
</body>
</html>