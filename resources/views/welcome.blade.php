@extends('layout.layout')

@section('content')

    <md-content flex-gt-sm="66" flex="100">
        <product-list products="app.products"
                    selected-id="app.selectedId"
                    on-select="app.clickHandler(productId)">
        </product-list>
    </md-content>

    <md-button class="md-fab product-fab" ng-class="{ 'product-fab--hide' : app.selectedId != null }" aria-label="Add Product" ng-click="$event.stopPropagation();">
        <md-icon>add</md-icon>
    </md-button>

@endsection
