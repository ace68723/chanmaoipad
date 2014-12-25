angular.module('templates-app', ['login/login.tpl.html', 'tabs/tabs.tpl.html']);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<ion-view view-title=\"Dashboard\">\n" +
    "  <ion-content class=\"padding\">\n" +
    "    <div class=\"list card\">\n" +
    "      <div class=\"item item-divider\">{{text}}</div>\n" +
    "      <div class=\"item item-body\">\n" +
    "        <div>\n" +
    "          {{text}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("tabs/tabs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tabs/tabs.tpl.html",
    "<!--\n" +
    "Create tabs with an icon and label, using the tabs-positive style.\n" +
    "Each tab's child <ion-nav-view> directive will have its own\n" +
    "navigation history that also transitions its views in and out.\n" +
    "-->\n" +
    "<ion-tabs class=\"tabs-icon-top tabs-color-active-positive\">\n" +
    "\n" +
    "\n" +
    "  <!-- Dashboard Tab -->\n" +
    "  <ion-tab title=\"Status\" icon-off=\"ion-ios7-pulse\" icon-on=\"ion-ios7-pulse-strong\" href=\"#/tab/dash\">\n" +
    "    <ion-nav-view name=\"tab-dash\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "\n" +
    "  <!-- Chats Tab -->\n" +
    "  <ion-tab title=\"Chats\" icon-off=\"ion-ios7-chatboxes-outline\" icon-on=\"ion-ios7-chatboxes\" href=\"#/tab/chats\">\n" +
    "    <ion-nav-view name=\"tab-chats\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "  <!-- Friends Tab -->\n" +
    "  <ion-tab title=\"Friends\" icon-off=\"ion-ios7-heart-outline\" icon-on=\"ion-ios7-heart\" href=\"#/tab/friends\">\n" +
    "    <ion-nav-view name=\"tab-friends\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "\n" +
    "  <!-- Account Tab -->\n" +
    "  <ion-tab title=\"Account\" icon-off=\"ion-ios7-gear-outline\" icon-on=\"ion-ios7-gear\" href=\"#/tab/account\">\n" +
    "    <ion-nav-view name=\"tab-account\"></ion-nav-view>\n" +
    "  </ion-tab>\n" +
    "\n" +
    "\n" +
    "</ion-tabs>\n" +
    "");
}]);
