// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  let a = arr.sort();
  let count = 0;
  let len = 0;

  for(let i = 0; i < a.length && len <= 60 ; i++){
      if( len <= 60 && len+a[i] < 60){
        len += a[i];
        count++
      }
    console.log(len)
  };
  return count
};
