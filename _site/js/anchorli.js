document.onreadystatechange = function () {
  if (this.readyState === "complete") {

    var createAnchorLink = function (id) {
      var anchor = document.createElement("a");
      anchor.className = "anchor-link";
      anchor.href      = "#" + id;
      return anchor;
    };

    // Add IDs to all spec li elements
    var specItems = document.querySelectorAll("#spec ol")[1]
      .querySelectorAll('li');
    for (var i = 0; i < specItems.length; i++)
    {
      var li = specItems[i];
      li.id = 'spec-item-' + (i + 1);
    }

    // Add anchor link to all elemens with an ID in the spec
    var headers = document.querySelectorAll('#spec [id]');
    for (var i = 0; i < headers.length; i++)
    {
      var element = headers[i];
      var anchorLink = createAnchorLink(element.id);
      element.insertBefore(anchorLink, element.firstChild)
    }
  }
};
