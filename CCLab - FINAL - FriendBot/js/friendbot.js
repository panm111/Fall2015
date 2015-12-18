var username = "";

function send_message(message) {

    var prevState = $("#container").html();
    // console.log(prevState.length);
    if (prevState.length > 5) {
        prevState = prevState + "<br>";
    }
    $("#container").html(prevState + "<span class = 'current_message'>" + "<span class = 'bot'> <img class = 'bot' src='images/friendbotlogo.png'> </span>" + message + "</span>");
    // $(".current_message").hide();
    // $(".current_message").delay(1000).fadeIn(0);
    // $(".current_message").removeClass("current_message");

    $("#container").scrollTop($("#container").prop("scrollHeight"));

    // $("#container").html(prevState + "<span class='bot'>ChatBot: </span>" + message);
    // $(".current_message").hide();
    // $(".current_message").delay(1000);
    // $(".current_message").removeClass("current_message");
}

function get_username() {
    // $("#container").html("<span class='bot'>ChatBot: </span> Hello, what is your name?");
    send_message("Hey, is something wrong?");

            $("#container").scrollTop($("#container").prop("scrollHeight"));
}

function ai(message) {
    // if (username.length<3){
    // 	username = message;
    // 	send_message("Nice to meet you "+ username + ", how are you doing?");
    // }

    if (message.indexOf("how are you?") >= 0) {
        send_message("Thanks, I am good!");
    }

    if ((message.indexOf("time") >= 0) || (message.indexOf("hours") >= 0)) {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        send_message("The current time is: " + h + ":" + m);
    }

    //  if (message.indexOf(" ") <= 1) {
    //     send_message("I don't understand what you said");
    // }

     if ((message.indexOf("sorry") >= 0) || (message.indexOf("apologise") >= 0)) {
        send_message("No need to apologise");
    }

    if (message.indexOf("remember") >= 0) {
        send_message("What else do you remember?");
    }

     if (message.indexOf("forgot") >= 0) {
        send_message("Are you generally forgetful?");
    }

     if (message.indexOf("if") >= 0) {
        send_message("What will this lead to?");
    }

     if (message.indexOf("dreamed") >= 0) {
        send_message("What does that dream suggest to you?");
    }

    if ((message.indexOf("perhaps") >= 0) || (message.indexOf("uncertain") >= 0)) {
        send_message("Why the uncertainty?");
    }

    if ((message.indexOf("hi") >= 0) && (message.indexOf("hi") <= 2) || (message.indexOf("hey") >= 0) && (message.indexOf("hey") <= 3) || (message.indexOf("hello") >= 0) && (message.indexOf("hello") <= 5)) {
        send_message("Hi. What seems to be your problem?");
    }

    //  if (message.indexOf("remember") >= 0) {
    //     send_message("What else do you remember?");
    // }

     if (message.indexOf("assignment") >= 0) {
        send_message("What do you have to do for your assignment?");
    }

    if (message.indexOf("stressed") >= 0) {
        send_message("What are there specific steps that you need to take to complete your objective?");
    }

    if (message.indexOf("first") >= 0) {
        send_message("Is there anything else you have to do?");
    }

    if ((message.indexOf("last") >= 0) || (message.indexOf("lastly") >= 0)) {
        send_message("Anything else?");
    }

    if (message.indexOf("that's all") >= 0) {
        send_message("Then what does that suggest to you?");
    }

    if (message.indexOf("step") >= 0) {
        send_message("Is that what you are going to do?");
    }

    // if (message.indexOf("thanks for your help") >= 0) {
    //     send_message("You're welcome. Talk to you later!");
    // }

    if (message.indexOf("overwhelmed") >= 0) {
        send_message("What is stressing you out?");
    }

    if (message.indexOf("trouble") >= 0) {
        send_message("What solutions have you thought of so far?");
    }

    if (message.indexOf("handle") >= 0) {
        send_message("How come?");
    }

    if (message.indexOf("compromise") >= 0) {
        send_message("What have you compromised on?");
    }

    if (message.indexOf("talk") >= 0) {
        send_message("Do you get to meet often?");
    }

    if (message.indexOf("periods") >= 0) {
        send_message("Do you think that the wait is worth it?");
    }

    if (message.indexOf("I really love her") >= 0) {
        send_message("If you feel that way then you may have found your answer");
    }

    if ((message.indexOf("thanks") >= 0) || (message.indexOf("Thanks") >= 0) || (message.indexOf("thank you") >= 0) || (message.indexOf("Thank you") >= 0)) {
        send_message("No problem. I'm always here");
    }

    if (message.indexOf("negatively impacting") >= 0) {
        send_message("How so?");
    }

    if (message.indexOf("I'm so anxious") >= 0) {
        send_message("Please go on");
    }

    if (message.indexOf("on the go") >= 0) {
        send_message("What else?");
    }

    if (message.indexOf("I'm always working") >= 0) {
        send_message("Is it possible to transfer some of your responsibilities?");
    }

    if (message.indexOf("it is possible") >= 0) {
        send_message("Why is that?");
    }

    if (message.indexOf("trust broken") >= 0) {
        send_message("How can you make it better going forward?");
    }

    if (message.indexOf("I should create") >= 0) {
        send_message("So do you know what to do?");
    }

    if (message.indexOf("My screening process") >= 0) {
        send_message("Sounds like a plan");
    }

    if (message.indexOf("hire more employees") >= 0) {
        send_message("How would you do that?");
    }

    if (message.indexOf("computer") >= 0) {
        send_message("Why do you mention computers?");
    }

    if (message.indexOf("machine") >= 0) {
        send_message("What do you think about machines?");
    }

    if (message.indexOf("are you") >= 0) {
        send_message("Would it matter to you?");
    }

    if (message.indexOf("I was") >= 0) {
        send_message("Were you really?");
    }

    if (message.indexOf("I am feeling") >= 0) {
        send_message("Can you describe your feeling?");
    }

    if (message.indexOf("I am sad") >= 0) {
        send_message("Can you explain what made you sad?");
    }

    if (message.indexOf("I am happy") >= 0) {
        send_message("Can you explain why you are suddenly happy?");
    }

    if (message.indexOf("I believe") >= 0) {
        send_message("Do you really think so?");
    }

    if ((message.indexOf("I can't") >= 0) || (message.indexOf("I cannot") >= 0)) {
        send_message("Have you tried?");
    }

    if ((message.indexOf("I don't") >= 0) || (message.indexOf("I do not") >= 0)) {
        send_message("Does that trouble you?");
    }

    if (message.indexOf("I feel") >= 0) {
        send_message("Tell me more about such feelings");
    }

    if (message.indexOf("yes") >= 0) {
        send_message("I understand");
    }

    if ((message.indexOf("no") >= 0) && (message.indexOf("no") <= 2)) {
        send_message("Why not?");
    }

    if (message.indexOf("what") >= 0) {
        send_message("What do you think?");
    }

    if (message.indexOf("because") >= 0) {
        send_message("What other reasons might there be?");
    }

    if (message.indexOf("why") >= 0) {
        send_message("Why not?");
    }

    if ((message.indexOf("everyone") >= 0) || (message.indexOf("everybody") >= 0) || (message.indexOf("nobody") >= 0) || (message.indexOf("no one") >= 0)) {
        send_message("Can you think of anyone in particular?");
    }

    if (message.indexOf("always") >= 0) {
        send_message("Can you think of a specific example?");
    }

    if (message.indexOf("alike") >= 0) {
        send_message("In what way?");
    }

    if (message.indexOf("different") >= 0) {
        send_message("How is it different?");
    }

    if (message.indexOf("friendbot") >= 0) {
        send_message("I am FriendBot");
    }

    if (message.indexOf("issues") >= 0) {
        send_message("What kind of issues?");
    }

    if (message.indexOf("sick") >= 0) {
        send_message("Is there anything I can do to help?");
    }

    if (message.indexOf("something") >= 0) {
        send_message("What thing?");
    }

    if (message.indexOf("I like") >= 0) {
        send_message("Why do you like?");
    }

            $("#container").scrollTop($("#container").prop("scrollHeight"));

}

$(function() {

    get_username();

    $("#textbox").keypress(function(event) {
        if (event.which == 13) {
            if ($("#enter").prop("checked")) {
                // console.log("enter pressed, checkbox is checked");
                // $("#textbox").val("");
                $("#send").click();
                event.preventDefault();
            }
        }
    });

    $("#send").click(function() {
        // var username = "<span class='username'= >You: </span>";

        var username = "<span class='username'> <img class = 'username' src='images/userlogo.png'> </span>";

        var newMessage = $("#textbox").val();

 //calculate length of message
 //> certain width
        $("#textbox").val("");

        var prevState = $("#container").html();
        if (prevState.length > 5) {
            prevState = prevState + "<br>";
        }

        $("#container").html(prevState + "<br>" + "<div class='user'>" + newMessage + username + "</div>");

        $("#container").scrollTop($("#container").prop("scrollHeight"));

        ai(newMessage);
    });

})
