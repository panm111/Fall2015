<?php 
session_start(); 
// Starts the session
      
    if(isset($_POST['Submit'])){

        $logins = array('Alex' => '123456',
                        'merrilee' => 'pan', 
                        'username1' => 'password1',
                        'username2' => 'password2');
        
        $Username = isset($_POST['Username']) ? $_POST['Username'] : '';
        $Password = isset($_POST['Password']) ? $_POST['Password'] : '';
        
        // Check Username and Password existence in defined array        
        if (isset($logins[$Username]) && $logins[$Username] == $Password){
            //Success: Set session variables and redirect to Protected page
            $_SESSION['UserData']['Username']=$logins[$Username];
            header("location:index.php");
            exit;
        } else {
            //Unsuccessful attempt: Set error message */
            $msg="<span style='color:red'>Invalid Login Details</span>";
        }
    }

    if(isset($_POST['Register'])){
        header("location:register.php");
        exit;
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
  <header>
    The Super Exclusive Guilty Pleasure Cat Club
  </header>

<form action="" method="post" name="Login_Form">
  <table width="400" border="0" align="center" cellpadding="5" cellspacing="1" class="Table">
    <?php if(isset($msg)){?>
    <tr>
      <td colspan="2" align="center" valign="top"><?php echo $msg;?></td>
    </tr>
    <?php } ?>
    <tr>
      <td colspan="2" align="left" valign="top"><h3>Login</h3></td>
    </tr>
    <tr>
      <td align="right" valign="top">Username</td>
      <td><input name="Username" type="text" class="Input"></td>
    </tr>
    <tr>
      <td align="right">Password</td>
      <td><input name="Password" type="password" class="Input"></td>
    </tr>
    <tr>
      <td> </td>
      <td><input name="Submit" type="submit" value="Login" class="Button3"></td>
      <td><input name="Register" type="submit" value="Register" class="Button3"></td>
    </tr>
  </table>
</form>

    </body>

</html>