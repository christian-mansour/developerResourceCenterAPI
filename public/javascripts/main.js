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

        var tutorial = topic.resources.tutorial;
        var video = topic.resources.video;
        var documentation = topic.resources.documentation;
        var install = topic.resources.install;
        var cdn = topic.resources.cdn;
        var guide = topic.resources.guide;
        var topicContainer = $('#topics');

        if(tutorial){
          topicContainer.append(`<div class="tutorial"><a href="${tutorial}">Intro Tutorial</a></div>`);
        }
        if(video){
          topicContainer.append(`<div class="video"><a href="${video}">Watch a Video</a></div>`);
        }
        if(documentation){
          topicContainer.append(`<div class="documentation"><a href="${documentation}">Documentation</a></div>`);
        }
        if(install){
          topicContainer.append(`<div class="install"><a href="${install}">Install</a></div>`);
        }
        if(cdn){
          topicContainer.append(`<div class="cdn"><a href="${cdn}">Get CDN</a></div>`);
        }
        if(guide){
          topicContainer.append(`<div class="guide"><a href="${guide}">Helpful Guide</a></div>`);
        }
      }
    }

loadTopics();
});
