<?php 

header('Access-Control-Allow-Origin: http://localhost:8000');

session_start();

if(!isset($_SESSION['UserData']['Username'])){
	header("location:login.php");
	exit;

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CATS!</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<!-- <header>
		The Super Exclusive Guilty Pleasure Cat Club
	</header> -->

<!-- 	<div id="cats">
			<img src="http://thecatapi.com/api/images/get?format=src&type=jpg&size=med" />
		</div> -->

		<?php 
			//calling cat api and showing
			$caturl = 'http://thecatapi.com/api/images/get?api_key=Mzk3NzE&format=src&type=gif&size=med';

			echo '<div id="cats">'; 
				echo '<img src="$caturl"/>';
			echo '</div>'; 

			echo '<div>';
				// echo '<button id="voteUp"> Favorite! </button>';
				echo '<button id="voteDown"> More Cats! </button>';
			echo '</div>'; 

			//visitor counting
			$File = "counter.txt"; 
			$handle = fopen($File, 'r+') ; 
			$data = fread($handle, 512) ; 
			$count = $data + 1; 
			// echo '<p id="visitor"> You are visitor number: </p>'.$count;
			print "You are visitor number: ".$count; 
			fseek($handle, 0) ; 
			fwrite($handle, $count) ; 
			fclose($handle) ;
			?>

	<p><a href="logout.php">Click here</a> to Logout.</p>
<!-- 		<div>
			<button id="voteUp" onclick="voteUp();"> Love it! </button>
		</div>
		<div class="buttons">	
			<button id="voteDown" onclick="voteDown();"> Hate it! </button>
		</div>	 -->	

	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.0.js"></script>
    <script type="text/javascript" src ="js/script.js"></script>
</body>
</html>