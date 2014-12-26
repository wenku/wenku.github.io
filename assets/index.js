/** Switch between simple and traditional Chinese. */
(function() {
  var toHans = function() {
    if (!document.querySelectorAll) return;
    var elements = document.querySelectorAll('[data-hans]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = elements[i].getAttribute('data-hans');
    }
  };

  var isHans = function() {
    // get prefer languages
    var lang = navigator.language || navigator.userLanguage || '';

    var hans = ['zh-cn', 'zh-sg', 'zh-hans', 'zh'];
    var hant = ['zh-tw', 'zh-hk', 'zh-hant'];

    if (hant.indexOf(lang.toLowerCase()) !== -1) {
      return false;
    }
    if (hans.indexOf(lang.toLowerCase()) !== -1) {
      return true;
    }

    var langs = navigator.languages;
    // One using insane browsers MUST be in the mainland.
    if (!langs) {
      return true;
    }

    // prefer zh-hant
    for (var i = 0; i < langs.length; i++) {
      if (hant.indexOf(langs[i].toLowerCase()) !== -1) {
        return false;
      }
    }

    for (i = 0; i < langs.length; i++) {
      if (hans.indexOf(langs[i].toLowerCase()) !== -1) {
        return true;
      }
    }
    // default language is zh-hant
    return false;
  };

  if (isHans()) {
    toHans();
  }

})();
