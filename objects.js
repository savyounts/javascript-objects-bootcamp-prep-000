var playlist = {'artistName': "songTitle"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign ({}, playlist, {[artistName]:songTitle})
}

function removeFromPlaylist (Object, artistName) {
  delete Object.artistName;
  return Object.artistName
}