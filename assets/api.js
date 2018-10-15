// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o')

  $.getJSON('https://discordbots.org/api/bots/443545183997657120', function(data) {
    console.log(data.server_count);
    console.log(data.points);
    $("strong#votes").text(data.points);
    $("strong#servers").text(data.server_count);
  })

})

$(function() {
  console.log('hello world 2 :o')

  $.getJSON('https://discord-channel-bot.glitch.me/stats', function(data2) {
    console.log(data2.channels);
    console.log(data2.users);
    console.log(data2.ping)
    console.log(data2.commands)
    console.log(data2.memory)
    console.log(data2.run)
    console.log(data2.version)
    $("strong#channels").text(data2.channels);
    $("strong#users").text(data2.users);
    $("strong#ping").text(data2.ping + " ms");
    $("strong#commands").text(data2.commands)
    $("strong#memory").text(data2.memory);
    $("strong#run").text(data2.run);
    $("strong#version").text(data2.version);
  })

})
