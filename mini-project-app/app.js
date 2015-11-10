var post_template = $('#post_template').text();
var temple = Handlebars.compile(post_template);

var make_posts = function() {
  //make a function that sets the inner html of #postbox

  var subredditSearchName = $('input').val();
  // http://reddit.com/r/[subreddit].[rss/json]?limit=[limit]&after=[after]
  $.get('https://www.reddit.com/r/' + subredditSearchName + '.json', function(data){
    for (var i = 0; i < data.data.children.length; i++) {
      var post_data = data.data.children[i];
      // console.log(post_data);
      // console.log(post_data.data.thumbnail);
      var current_post = temple(post_data.data);
      if (current_post.thumbnail == "self") {
        current_post.parents('section').css('display', 'none');
      }
      $('#postbox').after(current_post);
    }
    // $('img[src$="http"]').attr("src", "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimagesnoise.com%2Fimages%2FFunny%2520HTTP%2520404%2520Page%2520Not%2520Found%2520Error%2520Images%2F10.jpg&f=1");
    $('.glyphicon-remove').click(function() {
      console.log('clicked delete');
      $(this).parents('section').css('display', 'none');
    });
    $('.glyphicon-star').click(function() {
      console.log('clicked fav');
      $(this).toggleClass('favorites');
      $(this).parents('article').clone().prependTo(".favorites_container");
      articles_addition();
      articles_removal();
    });
  });
}

var articles_addition = function() {
  if ($('button').hasClass('favorites')) {
  }
}
var articles_removal = function() {
  $('.favorites_container .glyphicon-star').not('.favorites').parents('article').remove();
};
$('input').keypress(function(event) {
  if (event.which == 13) {
    console.log("entered");
    make_posts.call();
  }
});
$('.special_social').click(make_posts());
