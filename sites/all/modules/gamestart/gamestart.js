(function() {
  function place_confirm() {
    var play = <?php echo json_encode($_SESSION['tile_to_play']->title); ?>;
    var board = <?php echo json_encode($_SESSION['location_to_play']->title); ?>;
    var confirm_string = "Do you want to place " + play + " at location "+ board +"?";
    var place = confirm(confirm_string);
    document.cookie = "placeresult=" + place+";";
    console.log(getCookie("placeresult"));
    return place;
  }

  function place_taken() {
    var taken = alert('This spot is already taken, please choose another!');
    return taken;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
});
