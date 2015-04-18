
var app = {
  server: "http://127.0.0.1:3000/classes/messages",
  currentRoom: 'lobby',
  rooms: {},
  friends: {},

  init: function(){
      app.fetch();
      app.populateRooms();
  },

  send: function(message){
    $.ajax({
      // always use this url
      url: 'http://127.0.0.1:3000/classes/messages',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(message),
      success: function (data) {
       console.log("message was sent");
       app.fetch();
      },
      error: function (data) {
        // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('Failed to send message code');
      }
    });
  },

  fetch: function(){
    $.ajax({
      // always use this url
      url: 'http://127.0.0.1:3000/classes/messages',
      type: 'GET',
      contentType: 'application/json',
      // data:{order:'-createdAt', limit:20, where:'{"roomname":"'+app.currentRoom+'"}'},
      success: function (data) {
        $("#chats").html('');
        data = JSON.parse(data);
        _.each(data.results, function(obj){
          app.addMessage(obj);
        });
      },
      error: function (data) {
        // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to get message');
      }
    });
  },

  addMessage: function(message){
    if(message.text || message.username) {
      if(/<script>/.test(message.text)){
        message.text = "GTFO Hacker!!!"
      }
      if (message.username in app.friends){
        var $message = '<p><span class="username">'+message.username+
                      '</span><span class="friend">: '+message.text+'</span></p>';

      }else{

        var $message = '<p><span class="username">'+message.username+
                        '</span><span>: '+message.text+'</span></p>';

      }
      $('#chats').append($message);
    }
  },

  clearMessages: function(){
    $("#chats").html('');
  },

  populateRooms: function(){
    $.ajax({
      // always use this url
      url: 'http://127.0.0.1:3000/classes/messages',
      type: 'GET',
      contentType: 'application/json',
      // data:{order:'-createdAt',limit:100},
      success: function (data) {
        _.each(data.results, function(obj){
          if(obj.roomname){
            app.rooms[obj.roomname] = obj.roomname;
          }
        });
        app.chatList();

      },
      error: function (data) {
        // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to get message');
      }
    });
  },

  chatList: function() {
    _.each(app.rooms, function(room) {
      if(room.length < 50 && !(/<script>/.test(room)) && (room !== "lobby")){
        var $option = '<option>'+room+'</option>';
        $('#chatrooms').append($option);
      }
    });
  },

  addRoom: function(room){
    app.currentRoom = room;
    var $option = '<option selected="selected">'+app.currentRoom+'</option>';
    $('#chatrooms').append($option);
    app.fetch();
  },

  addFriend: function(){

  },
  handleSubmit: function(){

  }
}




//======================================================================//


$(document).ready(function(){

  app.init();




//checks for sent message
  $('.submit').on('click', function(event) {
    event.preventDefault();
    var message = {
      'username': window.location.search.split('=')[1],
      'text': $('#chatbox').val(),
      'roomname': app.currentRoom
    };
    app.handleSubmit();
    app.send(message);


    $('#chatbox').val('');
  });

//checks for changing chatrooms on dropdown
$("#chatrooms").change(function() {
  app.currentRoom = this.value;
  app.fetch();
});

//checks for create new room
$('#createroom').on('click', function(event){
  $(".chatroom").toggleClass("hidden")
});

$("#chatroomsubmit").on('click', function(e){
  event.preventDefault();
  $(".chatroom").toggleClass("hidden")
  app.addRoom($('#chatroombox').val());
});

$("#chats").on('click','.username', function(e){
  app.friends[$(this).text()] = $(this).text()
  app.addFriend();
  app.fetch();
});


   // setInterval(app.fetch, 15000);

});
