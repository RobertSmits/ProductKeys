<!doctype html>
<html lang="{{ app()->getLocale() }}" ng-app="key-management-app">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Product Key Management">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Product Key Management</title>
        <link rel="stylesheet" href="./css/app.css">
    </head>
    <body ng-cloak ng-controller="AppController as app" layout="column">
        @include('layout.toolbar')
        <div class="container" layout="row" flex>
            <md-sidenav md-is-locked-open="true">
                SideNav
            </md-sidenav>
            <md-content flex>
                @yield('content')
            </md-content>
        </div>
        <script src="./js/app.js" type="text/javascript"></script>
    </body>
</html>