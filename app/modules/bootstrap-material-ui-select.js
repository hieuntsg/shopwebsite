angular.module('flock.select2.themes', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('bootstrap-material/choices.tpl.html',
    "<ul class=\"ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu\"\n" +
    "    role=\"listbox\"\n" +
    "    ng-show=\"$select.items.length > 0\">\n" +
    "  <li class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\" >\n" +
    "    <div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\"></div>\n" +
    "    <div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\"></div>\n" +
    "    <div id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" \n" +
    "    ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\">\n" +
    "      <a href=\"javascript:void(0)\" class=\"ui-select-choices-row-inner\"></a>\n" +
    "    </div>\n" +
    "  </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('bootstrap-material/match-multiple.tpl.html',
    "<span class=\"ui-select-match\">\n" +
    "  <span ng-repeat=\"$item in $select.selected\">\n" +
    "    <span\n" +
    "      class=\"ui-select-match-item btn btn-link btn-xs\"\n" +
    "      tabindex=\"-1\"\n" +
    "      type=\"button\"\n" +
    "      ng-disabled=\"$select.disabled\"\n" +
    "      ng-click=\"$selectMultiple.activeMatchIndex = $index;\"\n" +
    "      ng-class=\"{'btn-primary':$selectMultiple.activeMatchIndex === $index, 'select-locked':$select.isLocked(this, $index)}\"\n" +
    "      ui-select-sort=\"$select.selected\">\n" +
    "        <span class=\"close ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&nbsp;&times;</span>\n" +
    "        <span uis-transclude-append class=\"uiSelect-MultiOption\"></span>\n" +
    "    </span>\n" +
    "  </span>\n" +
    "</span>\n"
  );


  $templateCache.put('bootstrap-material/match.tpl.html',
    "<div class=\"ui-select-match\" ng-hide=\"$select.open\" ng-disabled=\"$select.disabled\" ng-class=\"{'btn-link-focus':$select.focus}\">\n" +
    "  <span tabindex=\"-1\"\n" +
    "      class=\"btn btn-link ui-select-toggle\"\n" +
    "      aria-label=\"{{ $select.baseTitle }} activate\"\n" +
    "      ng-disabled=\"$select.disabled\"\n" +
    "      ng-click=\"$select.activate()\"\n" +
    "      style=\"outline: 0;\">\n" +
    "    <span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span>\n" +
    "    <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{'ui-select-allow-clear': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span>\n" +
    "    <i class=\"material-icons pull-right\" ng-click=\"$select.toggle($event)\">arrow_drop_down</i>\n" +
    "    <a ng-show=\"$select.allowClear && !$select.isEmpty()\" aria-label=\"{{ $select.baseTitle }} clear\" style=\"margin-right: 10px\"\n" +
    "      ng-click=\"$select.clear($event)\" class=\"btn btn-xs btn-link pull-right\">\n" +
    "      <i class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></i>\n" +
    "    </a>\n" +
    "  </span>\n" +
    "</div>\n"
  );


  $templateCache.put('bootstrap-material/select-multiple.tpl.html',
    "<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\">\n" +
    "  <div>\n" +
    "    <div class=\"ui-select-match\"></div>\n" +
    "    <input type=\"text\"\n" +
    "           autocomplete=\"off\" \n" +
    "           autocorrect=\"off\" \n" +
    "           autocapitalize=\"off\" \n" +
    "           spellcheck=\"false\" \n" +
    "           class=\"ui-select-search input-xs\"\n" +
    "           placeholder=\"{{$selectMultiple.getPlaceholder()}}\"\n" +
    "           ng-disabled=\"$select.disabled\"\n" +
    "           ng-hide=\"$select.disabled\"\n" +
    "           ng-click=\"$select.activate()\"\n" +
    "           ng-model=\"$select.search\"\n" +
    "           role=\"combobox\"\n" +
    "           aria-label=\"{{ $select.baseTitle }}\"\n" +
    "           ondrop=\"return false;\">\n" +
    "  </div>\n" +
    "  <div class=\"ui-select-choices\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('bootstrap-material/select.tpl.html',
    "<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\">\n" +
    "  <div class=\"ui-select-match\"></div>\n" +
    "  <input type=\"text\" autocomplete=\"off\" tabindex=\"-1\"\n" +
    "         aria-expanded=\"true\"\n" +
    "         aria-label=\"{{ $select.baseTitle }}\"\n" +
    "         aria-owns=\"ui-select-choices-{{ $select.generatedId }}\"\n" +
    "         aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\"\n" +
    "         class=\"ui-select-search\"\n" +
    "         placeholder=\"{{$select.placeholder}}\"\n" +
    "         ng-model=\"$select.search\"\n" +
    "         ng-show=\"$select.searchEnabled && $select.open\">\n" +
    "  <div class=\"ui-select-choices\"></div>\n" +
    "</div>\n"
  );

}]);