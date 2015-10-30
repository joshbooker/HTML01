/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTile.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Tile.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Tile." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

