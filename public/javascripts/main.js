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
        $('#topics').append(`<div class="topic mdl-grid"><h3>${topic.topic}</h3></div>`);

        var tutorial = topic.resources.tutorial;
        var video = topic.resources.video;
        var documentation = topic.resources.documentation;
        var install = topic.resources.install;
        var cdn = topic.resources.cdn;
        var guide = topic.resources.guide;
        var topicContainer = $('#topics');

        if(tutorial){
          topicContainer.append(`<div id="tutorial" class="button mdl-cell mdl-cell--3-col"><td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><a href="${tutorial}">tutorial</a></button></td>`);
        }
        if(video){
          topicContainer.append(`<div id="video" class="button mdl-cell mdl-cell--3-col"><td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><a href="${video}">watch a video</a></button></td>`);
        }
        if(documentation){
          topicContainer.append(`<div id="documentation" class="button mdl-cell mdl-cell--3-col"><td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><a href="${documentation}">documentation</a></button></td>`);
        }
        if(install){
          topicContainer.append(`<div id="install" class="button mdl-cell mdl-cell--3-col"><td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><a href="${install}">install</a></button></td>`);
        }
        if(cdn){
          topicContainer.append(`<div id="cdn" class="button mdl-cell mdl-cell--3-col"><td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><a href="${cdn}">get cdn</a></button></td>`);
        }
        if(guide){
          topicContainer.append(`<div id="guide" class="button mdl-cell mdl-cell--3-col"><td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"><a href="${guide}">helpful guide</a></button></td>`);
        }
      }
    }

loadTopics();
});
