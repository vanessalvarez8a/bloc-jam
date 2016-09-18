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

var albumAmyWinehouse = {
  title: 'Back to Black',
  artist: 'Amy Winehouse',
  label: 'Sony',
  year: '2006',
  albumUrl: 'assets/images/album_covers/02.png',
  songs: [
    {
      title: 'Rehab',
      duration: '3:34'
    },
    {
      title: 'You Know Im no Good',
      duration: '4:17'
    },
    {
      title: 'Me & Mr Jones',
      duration: '2:32'
    },
    {
      title: 'Just Friends',
      duration: '3:12'
    },
    {
      title: 'Back To Black',
      duration: '4:00'
    }
  ]
};

var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumUrl: 'assets/images/album_covers/20.png',
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
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

      return template;
};

/*
select the HTML elements grabbing them from class name
to display on album page populate elements to the html
*/
var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];



// the parameter album is on the window.onload function where setCurrentAlbum(albumPicasso)
var setCurrentAlbum = function(album) {

  /*
  the first child property indentifies the first child node of an element and nodevalue returns or sets the
  value of a node and NodeValue returns or sets the value of a node
  */
  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + '' + album.label;
  albumImage.setAttribute('src', album.albumUrl);

  /*
    ensured to work with a clean slate
  */
  albumSongList.innerHTML = '';

  for(var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

window.onload = function() {
  setCurrentAlbum(albumPicasso)

  var albums = [albumPicasso, albumAmyWinehouse, albumMarconi]; //PUTTING ALL ALBUMS ON AN ARRAY SO WE CAN TOGGLE THROUGH THEM
  var index = 1; /*
  IF IS SET TO 0 IT WOULD NOT KEEP GOING TO THE FOLLOWING ALBUM .
  OUTSIDE OF THE FUNCTION BECAUSE WHEN INCREASES BY 1 THAT STATE WILL REMEMBER AND \
  CARRIES OVER THE NEXT CLICK EVENT */
  albumImage.addEventListener('click', function(event) { // Grabbing the albumImage from line 111. This is the event handler also known as callback
      setCurrentAlbum(albums[index]);
      index++;
      if(index == albums.length) {
        index = 0; //return to the first album again to reset the index to 0 THE INITIAL VALUE IS OUTSIDE OF THE FUNCTION
      }
    });



}
