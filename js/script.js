
var hideHome = document.getElementById("home"),
     begin = hideHome.getElementsByTagName('input'),
     showSetup = document.getElementById("setup"),
     form = showSetup.getElementsByTagName("input"),
     playGame = document.getElementById('play'),
     rollDice = playGame.getElementsByTagName('input');
     diceList = document.getElementById("diceContainer"),
     diceShow = document.getElementById("dicePlay"),
     button = document.getElementsByTagName('button'),
     rounds = document.getElementById('roundcount'),
     scores = document.getElementById('scores'),
     scoreboard = document.getElementById('scoreboard'),
     average = document.getElementById('averagescore'),
     restart= document.getElementById('restart');
     count = 0,
     sum = 0;



begin[0].addEventListener("click", function(e)
{
    hideHome.classList.toggle('hide');
    showSetup.classList.toggle("hide");

    e.preventDefault();

},false);

form[2].addEventListener("click",function(e)
{
  if((form[1].value >= 3 && form[1].value <=6) && form[0].value)
  {

      playGame.classList.toggle("hide");
      showSetup.classList.toggle("hide");
      var a = [];
      for(var i = 0; i < form[1].value; i++ )
      {


          var die=document.createElement("div");
          die.setAttribute("id","dice");



           a[i] = RandomNumber(1,6);
           var die=document.createElement("div");
           die.setAttribute("id","dice");

           diceList.appendChild(die);

    }
  }
  else{

    document.getElementById('errors').innerHTML="Enter Digit between 3 and 6 or Name";
    return false;



}
   count++
  rounds.innerHTML = count;
  scores.innerHTML = 0;
   e.preventDefault();

},false);





//function for random numbers
function RandomNumber(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}


rollDice[0].addEventListener("click", function(e)
{
      var a = [];
      diceShow.innerHTML = "";

      for(var i = 0; i < form[1].value; i++ )
      {


          var die=document.createElement("div");
          die.setAttribute("id","dice");



           a[i] = RandomNumber(1,6);
           var die=document.createElement("div");
           die.setAttribute("id","dice");
           var img= document.createElement('img');
           img.width =150;
           img.height = 150;


           if(a[i] == 1)
           {
                img.src='images/dice1.jpg';

           }
            if(a[i] == 2)
           {
               img.src='images/dice2.png';
           }
            if(a[i] == 3)
           {
               img.src='images/dice3.jpg';
           }
            if(a[i] == 4)
           {
               img.src='images/dice4.png';
           }
           if(a[i] == 5)
           {
               img.src='images/dice5.png';
           }
           if(a[i] == 6)
           {
               img.src='images/dice6.png';
           }

       die.appendChild(img);
      diceShow.appendChild(die);


    }


    for(var i=0; i < a.length - 1; i++)
    {
        var k = i;
        for(var j= i + 1; j < a.length; j++)
        {
            if(a[j] < a[k])
            {
                k = j;
            }

        }


       var swap= a[k];
       a[k] = a[i];
       a[i] = swap;


    }

    var run = 0;
    var equalNo = 0;
    var points = 0;

    for(var i=0; i < a.length; i++)
    {

       points= points + a[i];
       if((a[i + 1] - a[i]) == 1)
       {
           run++;
       }
       if(a[i] == a[i + 1])
       {
           equalNo++;
       }

    }


   if(equalNo == a.length - 1)
   {
      points = 60 + points;
   }
   else if(equalNo == a.length - 2 )
   {
      points = 40 + points;
   }
   else if(run == a.length - 1)
   {
      points = 20 + points;
   }
   else if(equalNo == 0)
   {
       points = points;
   }
   else
   {
       points = 0;
   }

   sum = sum + points;
   scores.innerHTML = sum;


    diceList.classList.add('hide');
    diceShow.classList.remove('hide');
    rollDice[0].classList.add('hide');
    button[0].classList.remove('hide');
    button[1].classList.remove('hide');



    e.preventDefault();
},false);


button[0].addEventListener('click',function(e)
{
    count++;
    rounds.innerHTML = count;
    diceList.classList.remove('hide');
    diceShow.classList.add('hide');
    rollDice[0].classList.remove('hide');
    button[0].classList.add('hide');
    button[1].classList.add('hide');
    e.preventDefault();
},false);


button[1].addEventListener('click',function(e)
{
    diceList.classList.add('hide');
    diceShow.classList.add('hide');
    rollDice[0].classList.add('hide');
    button[0].classList.add('hide');
    button[1].classList.add('hide');
    scoreboard.classList.remove('hide');
    var avgScore = sum/count;
    average.innerHTML = avgScore;


},false);

restart.addEventListener('click',function(e){

location.reload();


},false);
