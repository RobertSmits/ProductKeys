<md-toolbar hide-xs class="md-whiteframe-4dp">
    <div class="md-toolbar-tools">
        <h2>
            <span>Product Key Management</span>
        </h2>
    </div>
    <div class="md-toolbar__search-container">
        <div class="md-toolbar__input-wrapper">
            <md-icon class="md-toolbar__input-icon">search</md-icon>
            <input class="md-toolbar__input" ng-model="app.search" placeholder="Search products" ng-change="app.loadProducts()">
        </div>
    </div>
</md-toolbar>

<md-toolbar show-xs hide-gt-xs class="md-whiteframe-4dp">
    <div class="md-toolbar-tools" data-ng-hide="showMobileSearch">
        <h2>
            <span>Product Key Management</span>
        </h2>
        <span flex></span>
        <md-button class="md-icon-button" aria-label="Search" data-ng-click="showMobileSearch = true">
            <md-icon>search</md-icon>
        </md-button>
    </div>
    <div class="md-toolbar-tools" data-ng-show="showMobileSearch">
        <md-button class="md-icon-button" aria-label="Back" data-ng-click="app.clearSearch(); showMobileSearch = false">
            <md-icon>arrow_back</md-icon>
        </md-button>
    </div>
    <div class="md-toolbar__search-container" data-ng-show="showMobileSearch">
        <div class="md-toolbar__input-wrapper">
            <input class="md-toolbar__input" ng-model="app.search" placeholder="Search products" ng-change="app.loadProducts()">
        </div>
    </div>
</md-toolbar>
