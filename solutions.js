// Exercise: Find the top navbar by query for the element type, which is <nav>.
$('nav');
// Exercise: Find the sidebar on the right by using it's id.
$('#sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
$('.pages');
$('.groups');
// Exercise: Find all of the comments on the page.
$('.panel p');
// Exercise: Find the first comment on the page.
$('.panel p').first();
// Exercise: Find the last comment on the page.
$('.panel p').last();
// Exercise: Find the fourth comment on the page.
$($('.panel p')[3]);
// Exercise: Find one of the ads in the sidebar and use .hide() to hide it.
$('.ad-slot img').first().hide();
// Exercise: Use .show() to make the ad that you hid in the previous step visible again.
$('.ad-slot img').first().show();
// Exercise: Use .toggle() to toggle the display of the nav bar at the top of the page.
$('nav').toggle();
// Exercise: Use .attr() to change src attribute of one of the ads in the sidebar. Here's an image source if you need one: http://placebear.com/200/300.
var $adSlot = $('.ad-slot img').first();
$adSlot.attr('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
$($('.panel p')[5]).text('I am Spartacatus. Meow!');
// Exercise: Find the first post and use .addClass() to add the .post-liked class to it.
$('.post.media').first().addClass('post-liked');
// Exercise: Find the second post and use .removeClass() to remove the .post-liked class.
$($('.post.media')[1]).removeClass('post-liked');
// Exercise: Find any post and use .toggleClass() to toggle the .post-liked class.
$('.post.media.post-liked').first().toggleClass('post-liked');
