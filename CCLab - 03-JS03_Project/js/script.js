
// var upVote = document.getElementById("voteUp");
// upVote.addEventListener("click", function(){
// 	refreshImage();
// });

// function voteUp() {
// 	// $.get('http://thecatapi.com/api/images/vote.php?score=5&picture_id='+picure_id,function(d){  });
// 	refreshImage();
// }

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  // and give it some content 
  var newHeader = document.createElement("header"); 
  var newContent = document.createTextNode("The Super Exclusive Guilty Pleasure Cat Club"); 
  newHeader.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("cats"); 
  document.body.insertBefore(newHeader, currentDiv); 
}

// var downVote = document.getElementById("voteDown");
// downVote.addEventListener("click", function(){
// 	refreshImage();
// });

$("#voteDown").click(function(){
	refreshImage();
	console.log("asking for more!");
});


function refreshImage() {
	$("#cats img").attr("src", "http://thecatapi.com/api/images/get?format=src&type=gif&size=med" + new Date().getTime());
	console.log('refreshing!');
}
  
$(document).ready(function(){  
    refreshImage();    
}); 

