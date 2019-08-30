var socket = io(); 

$('form').submit(function(e){
    e.preventDefault(); 
    socket.emit('chat_message', $("#name").val() + ": " + $('#message').val());
    $('#message').val('');
    return false;
});

socket.on('chat_message', function(msg){
    $('#messages').append($('<li>').html(msg));
});

