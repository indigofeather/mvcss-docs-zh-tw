var git = '93d5c54f3d259c8031d378e62ae50e75a3540b8f',
  path = window.location.pathname;

$('aside.sidebar').append('<span><a class="lance" href="http://blog.ycnets.com">@LanceHe</a></span></span><span><a href="https://github.com/mvcss/mvcss.github.com/commit/'+git+'">'+git.substr(0, 7)+'</a></span><span><a href="http://mvcss.io'+path+'">原文</a></span>');
