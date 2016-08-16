$(function() {

    var loadTopics = function(){
      // request JSON and process it
      $.ajax({
        url: '/api/topics',
        method: 'GET',
        data: {},
        dataType: "json"
      }).done(function(data){
        // display all our topics
        displayTopics(data);
        console.log(data);
      })
      .fail(function(jqXHR, textStatus, errorThrown){
        console.log("Reqest Failed: ", textStatus);
      })
      .always(function(){
        console.log("Request completed");
      })
    }

    // display all topics
    var displayTopics = function(topics){
      if (!topics){
        console.log("no topics to output");
      }

      // find section in the html to put topics
      $('#topics').empty();

      // loop through the json data
      for (var i=0; i<topics.length; i++){
        // display each topic in html
        var topic = topics[i];
        $('#topics').append(`<div class="topic"><h3>${topic.name}</h3><p>${topic.resources.video}</p></div>`)
      }
    };

loadTopics();
});
