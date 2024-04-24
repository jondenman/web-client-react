var audioContext = new(window.AudioContext || window.webkitAudioContext)();


var blocks = [
    { name : 'luvYa',
      src : 'sounds/Love_Ya_Goddamnit.mp3', 
      funct : '',
      obj : '.img_1',
      bufferName : '',
    },
    { name : 'caughtSale',
      src : 'sounds/Caught_Em_On_Sale.mp3',
      funct : '',
      obj : '.img_2',
      bufferName : '',
    },
    { name : 'kneeCap',
      src : 'sounds/Kneecap.mp3',
      funct : '',
      obj : '.img_3',
      bufferName : '',
    },
    { name : 'localSports',
      src : 'sounds/Local_Sports_Teams.mp3',
      funct : '',
      obj : '.img_4',
      bufferName : '',
    },
    { name : 'playingToys',
      src : 'sounds/Playing_Toys.mp3',
      funct : '',
      obj : '.img_5',
      bufferName : '',
    },
    { name : 'shutEye',
      src : 'sounds/Shut_Eye.mp3',
      funct : '',
      obj : '.img_6',
      bufferName : '',
    },
    { name : 'sweetBaby',
      src : 'sounds/Sweet_Baby_Right_There.mp3',
      funct : '',
      obj : '.img_7',
      bufferName : '',
    },
    { name : 'blocked',
      src : 'sounds/Blocked.mp3',
      funct : '',
      obj : '.img_8',
      bufferName : '',
    },
    { name : 'paradePermit',
      src : 'sounds/Parade_Permit.mp3',
      funct : '',
      obj : '.img_9',
      bufferName : '',
    },
    { name : 'striderEat',
      src : 'sounds/Strider_Ready_to_Eat.mp3',
      funct : '',
      obj : '.img_10',
      bufferName : '',
    },
    { name : 'yessimIsA',
      src : 'sounds/Yessimisagoodone.mp3',
      funct : '',
      obj : '.img_11',
      bufferName : '',
    },
    { name : 'roundUpCats',
      src : 'sounds/Round_Up_Cats.mp3',
      funct : '',
      obj : '.img_12',
      bufferName : '',
    },
    { name : 'vietnam',
      src : 'sounds/Good_Morning_Vietnam.mp3',
      funct : '',
      obj : '.img_13',
      bufferName : '',
    },
    { name : 'junglePatrol',
      src : 'sounds/Jungle_Patrol.mp3',
      funct : '',
      obj : '.img_14',
      bufferName : '',
    },
    { name : 'rumble',
      src : 'sounds/Ready_To_Rumble.mp3',
      funct : '',
      obj : '.img_15',
      bufferName : '',
    },
    { name : 'yesOhNo',
      src : 'sounds/Yes_Oh_Yes_Oh_No.mp3',
      funct : '',
      obj : '.img_16',
      bufferName : '',
    },
    { name : 'turnItDown',
      src : 'sounds/Turn_It_Down.mp3',
      funct : '',
      obj : '.img_17',
      bufferName : '',
    },
    { name : 'strongCoffeeSmoke',
      src : 'sounds/Strong_Cup_Of_Coffee.mp3',
      funct : '',
      obj : '.img_18',
      bufferName : '',
    },
    { name : 'searsStores',
      src : 'sounds/Sears_Stores.mp3',
      funct : '',
      obj : '.img_19',
      bufferName : '',
    },
    { name : 'newYorkCity',
      src : 'sounds/New_York_City.mp3',
      funct : '',
      obj : '.img_20',
      bufferName : '',
    },
]



loadSounds(blocks);
$(document).ready(function() {
    init();
    $('.definition').hide();
});

function init() {
  var i;
  for (i =0; i < blocks.length; i++) {
    clicked(blocks[i].obj, i);
    
  };
  showhidedef();
}
  //////runs clicked function on every square, sets up click highlight and sets up audio file to be played//////
function clicked(object, i) {
  $(function() {
    $(object).click(function() {
      $(object).parents().addClass('highlight');
      playSound(blocks[i]);
      sound.onended = function() {
        $(object).parents().removeClass('highlight');
      }
    });
  }); 
}

function showhidedef() {
  $(function() {
    $('.top').click(function() {
      var clicks = $(this).data('clicks');
      if (clicks) {
        $('.definition').hide();
      } else {
        $('.definition').show();
      }
      $(this).data("clicks", !clicks);
     });
  }); 
}
////////////WEB AUDIO SECTION/////////////

////////////Function to Load individual sound files///////
function loadSoundObj(obj) {
  var request = new XMLHttpRequest();
  request.open('GET', obj.src, true);
  
  request.responseType = 'arraybuffer';

  request.onload = function() {
    // request.response is encoded... so decode it now
    audioContext.decodeAudioData(request.response, function(buffer) {
      obj.buffer = buffer;
    }, function(err) {
      throw new Error(err);
    });
  }

  request.send();
}
////////////For loop to load sound files from array//////////
function loadSounds(obj) {
  var len = obj.length, i;

  // iterate over sounds obj
  for (i in obj) {
    if (obj.hasOwnProperty(i)) {
      // load sound
      loadSoundObj(obj[i]);
    }
  }
}
////////////Function to play sound file/buffer that was loaded with loadSounds and loadSoundObj//////
function playSound(soundBuffer) {
  sound = audioContext.createBufferSource();
  sound.buffer = soundBuffer.buffer;
  sound.connect(audioContext.destination);
  sound.start(0);
}
