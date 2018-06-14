@extends('layout.layout')

@section('content')
    <md-conten ng-controller="AppController as app">
        <product-list products="app.products"></product-list>
    </md-conten>
@endsection
