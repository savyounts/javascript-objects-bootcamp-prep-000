var playlist = {'artistName': "songTitle"}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign ({}, {artistName:songTitle})
  return playlist
}

function removeFromPlaylist (Object, artistName) {
  delete Object.artistName;
  return Object.artistName
}