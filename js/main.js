$(document).ready(function ($) {
  /*
    Basic Selectors - in jQuery you can use the same format of selectors as in CSS
  */
  $('p').css('border-bottom', '1px solid black') // tag name selector
  $('.first').css('border-color', 'red') // class name selector
  $('#special').css('background-color', '#ffcc00') // ID selector
  $('p.first small').css('background-color', 'lightgrey') // nesting selector

  /*
    Content - text, html and inputs
  */
  // $('.first').text('Lets learn jQuery')
  $('.first').html('Lets learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')

  $('#yourName').val('Bob Builder')

  /*
    Attribute Selectors
  */
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey')
  $('a[href*="google"]').css('font-weight', 'bold')

  /*
    Animation functions
  */
  // $('.card:first').hide(400)
  // $('.card:first').delay(1000).hide(400)
  // $('.card:first').delay(1000).hide(400).show(800)
  // $('.card:first').delay(1000).hide(400).show(800, function(){alert('we\'re back')})
  $('.card').animate({ borderRadius: '20px' }, 400)

  /*
    Attribute Method
  */
  $('img:first').attr('src', './img/image-5.jpg')

  /*
    Class Methods
  */
  // console.log($('img:first').hasClass('special'))
  // $('img').addClass('special')
  $('img').toggleClass('special')

  /*
    Events
  */
  $('img').click(function () {
    // console.log($(this).attr('src'))
    // $(this).attr('src','./img/image-6.jpg')
    $(this).toggleClass('special')
  })
  /*
    AJAX
  */
  $('#content').load('./about.html')
  // $('#contentNav .nav-link').click(function(e){
  //   e.preventDefault();
  //   var page = $(this).attr('href')
  //   $('#content').load('./'+page)
  // })
  $('#contentNav .nav-link').click(function (e) {
    e.preventDefault()
    var page = $(this).attr('href')
    $('.active').removeClass('active')
    $(this).addClass('active')
    $('#content').fadeOut(500, function () {
      $('#content').load('./' + page)
    }).fadeIn(500)
  })
  /*
  Making an AJAX request from a remote source and using the JSON data
  */
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    //console.log(data)
    var numPosts = data.length
    for (var i = 0; i < numPosts; i++) {

      var post = '<div class="col-sm-6 p-5"><h3>'
      post += (i+1) +'. '+data[i].title
      post += '</h3><p>'
      post += data[i].body
      post += '</p></div>'
      $('#posts').append(post)
    }
  })
  /* Using local JSON file with AJAX */
  // $.ajax({
  //   url: 'data/posts.json',
  //   type: 'GET',
  //   dataType: 'json'
  // }).done(function (data) {
  //   var posts = JSON.parse(data)
  //   // console.log(posts)
  //   var numPosts = data.posts.length
  //   for (var i = 0; i < numPosts; i++) {
  //
  //     var post = '<div class="col-sm-6 p-5"><h3>'
  //     post += (i+1) +'. '+data.posts[i].title
  //     post += '</h3><p>'
  //     post += data.posts[i].body
  //     post += '</p></div>'
  //     $('#posts').prepend(post)
  //   }
  // })
})
