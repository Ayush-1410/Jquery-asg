// 1.Console "Hello Word" in document.ready function

$(document).ready(function(){
    console.log("Hello World");    
});


// 2.Select a ID name "#test" and add class "load" when DOM is loaded

$(document).ready(function(){
    $("#test").addClass("load");
});


// 3.Change the color of element which class name end with "-new"

$(document).ready(function(){
    $("[class$='-new']").css("color","blue");
});


// 4.Disable submit button using jquery attr method

$(document).ready(function(){
    $("submit-btn").attr("disabled", true);
});


// 5.Change the font size of ".target" which has parent element with id name "#main"

$(document).ready(function(){
  $(".target").parent("#main").css("font-size","50px");
});


// 6.After page load change the HTML of div element with "p" element

$(document).ready(function(){
    $("div").html("p");
});


// 7.Bind a click function to an "click" element and append next "click" next to it.

$("p").bind("click",function(){
  $("p").append(" Click ");
});


// 8.Click event not working on element which added dynamicly or via script, make it work using .on method

$("p").on("click",function(){
    alert('Clicked');
});


// 9.Get dropdown selected value on onchanage event and append in div container

$(document).ready(function() {
    $('select').change(function() {
        $("div").append();
    });
});


// 10.Create a dropdown menu using hover method in jquery

/* HTML code
<body>
    <button>Menu</button>
    <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
</body>
*/

$(document).ready(function(){
    $("button").hover(function(){
        $("div").toggle();
    });
});


// 11.On clicking on "google" tag. It is taking us to google home page. Stop it from happening.

/* HTML code
<body>
    <p><a href="https://www.google.com">Google</a></p>
</body>
*/

$("a").on("click", function(e) {
    e.preventDefault();
});


// 12.We have to bind a click funtion to parent div but we want to stop it from performing when user clicks on its child list.

$("div").on("click",function(e){
    alert('Clicked');
});
$("li").on("click",function(e){
    e.stopPropagation();
});


// 13.Get the max height of elements using jquery each method

/* HTML code
<body>
  <div>
    Line 1<br>
    Line 2<br>
    Line 3<br>
    Line 4
  </div>
</body>
*/

let heights = $("div").map(function (){
        return $(this).height();
}).get();

maxHeight = Math.max.apply(null, heights);
console.log(maxHeight);


// 14.Change color of every cell which has number larger than 10.

/* HTML code
<body>
  <table border="1">
  <tr><td>1</td><td>5</td><td>15</td></tr>
  <tr><td>14</td><td>8</td><td>12</td></tr>
  <tr><td>2</td><td>19</td><td>6</td></tr>
</table>
*/

$(document).ready(function() {
    $("td").filter(function () {
        return parseInt($(this).text()) > 10; // parseInt() parses string and returns an integer.
    }).css("background-color","yellow");
});


// 15.Retrive the data from server using ajax get call

/* HTML code
<body>
  <button>Send GET Request</button>
</body>
*/

$(document).ready(function(){
  $("button").click(function(){
    $.get("demo_test.asp", function(data){
      console.log(data);
    });
  });
});


// 17.Create a image array and in div create a slide show to animate images of delay of 500ms.

/*HTML code
<body>
  <button>Start Slideshow</button>
</body>
*/

$(document).ready(function(){
  $("button").click(function(){
    setTimeout(function(){
        $("div").animate({left: '300px'}, 500);
     });
  });
});


