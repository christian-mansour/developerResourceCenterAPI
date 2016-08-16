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
        $('#topics').append(`<div class="topic"><h3>${topic.name}</h3></div>`);
        if(topic.resources.tutorial !== undefined){
          $('#topics').append(`<div class="tutorial"><p>${topic.resources.tutorial}</p></div>`);
        }
        if(topic.resources.video !== undefined){
          $('#topics').append(`<div class="video"><p>${topic.resources.video}</p></div>`);
        }
        if(topic.resources.documentation !== undefined){
          $('#topics').append(`<div class="documentation"><p>${topic.resources.documentation}</p></div>`);
        }
        if(topic.resources.install !== undefined){
          $('#topics').append(`<div class="install"><p>${topic.resources.install}</p></div>`);
        }
        if(topic.resources.cdn !== undefined){
          $('#topics').append(`<div class="cdn"><p>${topic.resources.cdn}</p></div>`);
        }
        if(topic.resources.guide !== undefined){
          $('#topics').append(`<div class="guide"><p>${topic.resources.guide}</p></div>`);
        }
      }

      // for (var i=0; i<topics.length; i++){
      //   // display each topic in html
      //   var topic = topics[i];
      //   if(topic.resources.documentation !== undefined){
      //     $('#topics').append(`<div class="topic"><h3>${topic.name}</h3><p>${topic.resources.documentation}</p></div>`)
      //   }
      // }

    };

loadTopics();
});
