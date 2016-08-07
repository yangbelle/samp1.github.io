<%@ Page Language="C#" AutoEventWireup="true" CodeFile="page26demo.aspx.cs" Inherits="page26demo" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="resource/css/page26demo.css">
    <script src="resource/js/jquery.js"></script>
    <title>task26</title>
</head>

<body>
    <div class="container">
        <div class="console" id="console">
            <h2>Console Log</h2>
            <ul>
            </ul>
        </div>
        <div class="gamepad">
            <canvas id="background">
            </canvas>
            <canvas id="screen">
            </canvas>
            <form>
                <fieldset>
                    <legend>Commander panel</legend>
                    <ul>
                        <li class="wrapper">
                            <span class="name">spaceship No.1: </span>
                            <div class="btn" name="launch">launch</div>
                            <div class="btn" name="fly">fly</div>
                            <div class="btn" name="stop">stop</div>
                            <div class="btn" name="destroy">destroy</div>
                        </li>
                        <li class="wrapper">
                            <span class="name">spaceship No.2: </span>
                            <div class="btn" name="launch">launch</div>
                            <div class="btn" name="fly">fly</div>
                            <div class="btn" name="stop">stop</div>
                            <div class="btn" name="destroy">destroy</div>
                        </li>
                        <li class="wrapper">
                            <span class="name">spaceship No.3: </span>
                            <div class="btn" name="launch">launch</div>
                            <div class="btn" name="fly">fly</div>
                            <div class="btn" name="stop">stop</div>
                            <div class="btn" name="destroy">destroy</div>
                        </li>
                        <li class="wrapper">
                            <span class="name">spaceship No.4: </span>
                            <div class="btn" name="launch">launch</div>
                            <div class="btn" name="fly">fly</div>
                            <div class="btn" name="stop">stop</div>
                            <div class="btn" name="destroy">destroy</div>
                        </li>
                    </ul>
                    <!--    <button class="create" id="create">create new spaceship</button> -->
                </fieldset>
            </form>
        </div>
    </div>
    <script src="resource/js/page26demo.js"></script>
</body>

</html>
