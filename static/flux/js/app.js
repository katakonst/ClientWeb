var React = require('react');
var $ = require('jquery')


var MatchedTrackList = require('./flux/components/TrackComponents/MatchedTracksList')
var TrackList = require('./flux/components/TrackComponents/TrackList')
var FixedPlayer = require('./flux/components/TrackComponents/FixedPlayer')

var ListPlayList = require('./flux/components/PlayListComponents/ListPlayList')
var Profile = require('./flux/components/UserComponents/Profile')
var AppRoute = require('./flux/components/others/AppRoute')
var ReactDOM=require('react-dom')



  $.getJSON( "/tracksJson", function( tracksList ) {


        $.getJSON( "/getPlayLists", function( data ) {


             $.getJSON("/getUserId",function(id){


               ReactDOM.render(<AppRoute/>,  document.getElementById('tracks'));
                      });







              });
});
