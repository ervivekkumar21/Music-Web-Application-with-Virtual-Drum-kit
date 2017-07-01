
                  // // old javascript code in code javascript language
                  //         var button = document.querySelector('.welcome-screen button');
                  //         button.addEventListener('click',function()
                  //       {
                  //         // alert('you Clicked me');
                  //         var name = document.querySelector('#name-input').value;
                  //         console.log(name);
                  //       });

$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if(name.length >2){
    var message = "Welcome, " + name;
    $('.main .user-name').text(message);
    $('.welcome-screen').addClass('hidden');
    $('.main').removeClass('hidden');
  }
  else{
    $('#name-input').addClass('error');
    alert("Please Enter a Valid Name");
    $('.warning').removeClass('hidden');
  }
});



//fuction for Audio Play and Pause
function toggleSong(){
      var song = document.querySelector('audio');
      // it check wheather the Song status paused or not if paused it plays if not it paly
      if(song.paused == true) {
        // code For paly The Song
        console.log('paying the Music');
        $('.play-icon').removeClass('fa-play').addClass('fa-pause');
        song.play();
      }
      else{
        // code for pause the song
        console.log('pausing the Music');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();
      }
    }


// Song Play And Pause Button working

// code for calling the function when .play-icon class button is press
$('.play-icon').on('click',function(event){
  toggleSong();
});

//code for Calling the function when the spacebar(32) is prassed from keyboard
$('body').on('keypress',function(event) {
  if (event.keyCode == 32)
  {
    toggleSong();
    }
  });

// javascript function for converting a bulks seconds into a standandard time format
//here 'time' is a formal parameter which is passed(takes values) by the calling function like 'currentTime' and 'duration'
            function fancyTimeFormat(time)
            {
                                          // Hours, minutes and seconds
                                            //here second converting into hours like time=47000sec is 47000sec/(60*60)=1hrs and 1100sec that will be like time/3600
                                          var hrs = ~~(time / 3600);
                                          //and the left second are converted into minutes like 1100sec/60=18minutes and 20sec that will be (time%3600)/60=total minutea+left seconds
                                          var mins = ~~((time % 3600) / 60);
                                          //and the left Seconds now devided by 60 if not possible make it remenders like 20/60 not devisible so remaining seconds are 20 sec
                                          var secs = time % 60;
                                          //so the answer is 47000sec=1hrs 18 minutes and 20 seconds in following format
                                          // Output like "1:01" or "4:03:59" or "123:03:59"
                                          var ret = "";           //here creates a local variable  string with blank

                                          if (hrs > 0) {          //condition check if hours values is greater then 0 then go for next
                                              ret += "" + hrs + ":" + (mins < 10 ? "0" : "");  //if hour value is greater it shows time in this formate like 01: 18 : 20
                                          }

                                          ret += "" + mins + ":" + (secs < 10 ? "0" : "");       //or if not hours  it shows like this one 18 : 20
                                          ret += "" + secs;      //if only seconds are presented in time variable the it will shows like 20
                                          return ret;           //after that it will return the value to the function from local variable ret to the storge variable
                                      }


// function for current time and duration calculation of songs
              function updateCurrentTime(){
                      var song = document.querySelector('audio');
                    // console.log(song.currentTime);
                    // console.log(song.duration);
                      var currentTime = Math.floor(song.currentTime);
                      //it sends the value to the from currenttime to 'time' and after that get value from ret to CurrentTime
                      currentTime = fancyTimeFormat(currentTime);
                      var duration = Math.floor(song.duration);
                      //it sends the value to the from duration to 'time' and after that get value from ret to duration
                      duration = fancyTimeFormat(duration);
                      $('.time-elapsed').text(currentTime);
                      $('.song-duration').text(duration);
                  }



        //Array OF Song Name
          var songList = ['Badri Ki Dulhania (Title Track)',
                'Humma Song',
                'Nashe Si Chadh Gayi',
                'The Breakup Song'];
        //after Loading The Html File This Js Code Will Automatically Run
        window.onload = function() {
                  $('#song1 .song-name').text(songList[0]);
                  $('#song2 .song-name').text(songList[1]);
                  $('#song3 .song-name').text(songList[2]);
                  $('#song4 .song-name').text(songList[3]);
                  updateCurrentTime();                        //it will update the Current time of played song
                  setInterval(function() {
                    updateCurrentTime();
                  },1000);                                     //this function say to update Current time at each (1 sec =1000) 1 second
                }
          //Array of Songs file scann form current Directory
          var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
                 $('#song1').click(function() {
                  var audio = document.querySelector('audio');
                  audio.src = fileNames[0];
                  audio.play();
                  });












//  code for run the function ater 5 second of loading website
     //  setTimeout(function(){
     //  var name;
     //  name=document.querySelector('#name-input').value;
     // console.log(name);
     // },5000);


            // my Own Play and Pause Button In js by using Class Interchnage Concept
            // <i class="fa fa-play clickable play-icon play playsong" aria-hidden="true"></i>
                    // $('.playsong').on('click',function(){
                    //   var song = document.querySelector('audio');
                      // $('.play').addClass('fa-pause');
                      // $('.play').addClass('pausesong');
                      // $('.play').removeClass('fa-play');
                    //   song.play();
                    //   console.log('play it');
                    // });
                    //
                    // $('.pausesong').on('click',function(){
                    //   var song = document.querySelector('audio');
                    //   $('.play').addClass('fa-play');
                    //   $('.play').addClass('playsong');
                    //   $('.play').removeClass('fa-pause');
                    //   song.pause();
                    //   console.log('stop it')
                    // });

// code for Play and Pause Butoon by using if else Condition

 //old Code For playing song when icon of play button or space key from keybord is pressed " Using Function Concept"








 // //old Code For playing song when icon of play button or space key from keybord is pressed "without Using Function Concept"

           //     // code for play-icon click event function
           //     $('.play-icon').on('click', function(){
           //       var song = document.querySelector('audio');
           //       // it check wheather the Condition is true song is paused
           //       if(song.paused == true){
           //         // console.log("play it");
           //         song.play();
           //         $('.play-icon').addClass('fa-pause').removeClass('fa-play');
           //       }
           //       else{
           //         // console.log("Pause it");
           //         song.pause();
           //         $('.play-icon').addClass('fa-play').removeClass('fa-pause');
           //       }
           //     });
           //
           // // same code for check is keypress from keyboard or not
           //   $('body').on('keypress',function(event) {
           //     // check if the keypress is space bar (ASCII 32 OF Space Bar) or not
           //     if (event.keyCode == 32){
           //       var song = document.querySelector('audio');
           //       // it check wheather the Condition is true song is paused
           //       if(song.paused == true){
           //         // console.log("play it");
           //         song.play();
           //         $('.play-icon').addClass('fa-pause').removeClass('fa-play');
           //       }
           //       else{
           //         // console.log("Pause it");
           //         song.pause();
           //         $('.play-icon').addClass('fa-play').removeClass('fa-pause');
           //       }
           //     }
           //   });
