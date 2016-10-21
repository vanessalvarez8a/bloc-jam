var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumUrl: 'assets/images/album_covers/01.png',
  songs: [
    {
    title: 'Blue',
    duration: '4:26'
    },
    {
      title: 'Green',
      duration: '4:26'
    },
    {
      title: 'Red',
      duration: '5:01'
    },
    {
      title: 'Pink',
      duration: '3:21'
    },
    {
      title: 'Magenta',
      duration: '2:15'
    }
  ]
};

var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    {
      title: 'Hello Operator',
      duration: '1:01'
    },
    {
      title: 'Ring ring',
      duration: '5:01'
    },
    {
      title: 'Fits in your pocket',
      duration: '3:21'
    },
    {
      title: 'Can you hear me now?',
      duration: '3:14'
    },
    {
      title: 'Wrong phone number',
      duration: '2:15'
    }
  ]
};


var createSongRow = function(songNumber, songName, songLength) {
  var template =
        '<tr class="album-view-song-item">'
      + '<td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '<td class="song-item-title">' + songName + '</td>'
      + '<td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

      var $row = $(template); //returning a jquery  object

      var clickHandler = function() {
      	var songNumber = $(this).attr('data-song-number');

      	if (currentlyPlayingSong !== null) {
      		// Revert to song number for currently playing song because user started playing new song.
      		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
      		currentlyPlayingCell.html(currentlyPlayingSong);
      	}
      	if (currentlyPlayingSong !== songNumber) {
      		// Switch from Play -> Pause button to indicate new song is playing.
      		$(this).html(pauseButtonTemplate);
      		currentlyPlayingSong = songNumber;
      	} else if (currentlyPlayingSong === songNumber) {
      		// Switch from Pause -> Play button to pause currently playing song.
      		$(this).html(playButtonTemplate);
      		currentlyPlayingSong = null;
      	}
      };


      var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
      };

      var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
      };

      $row.find('.song-item-number').click(clickHandler);
      $row.hover(onHover, offHover);
      return $row;
};

// the parameter album is on the window.onload function where setCurrentAlbum(albumPicasso)
var setCurrentAlbum = function(album) {
  /*
  select the HTML elements grabbing them from class name
  to display on album page populate elements to the html
  */
  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');

  /*
  text() method replaces the content of the text nodes
  */
  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + '' + album.label);
  $albumImage.attr('src', album.albumUrl);

  /*
    ensured to work with a clean slate
  */
  $albumSongList.empty();

  for(var i = 0; i < album.songs.length; i++) {
    var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    $albumSongList.append($newRow);
  }
};


  var getSongItem = function(element) {
    return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
  };

// Album button template
var playButtonTemplate =  '<a class="album-song-button"><span class="ion-play"></span></a>';

/////////////////////////////////// Click Event //////////
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

// Store state of playing songs
var currentlyPlayingSong = null; // set it to null so that no song is identified as playing until one is clicked

/////////////////////////////////////////////


$(document).ready(function() {
  setCurrentAlbum(albumPicasso);

});
