<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @include('layouts.partials.html_header')

    @section('html_header')
    @show
</head>
<body>
<div class="container">
    @include('layouts.partials.body_header')

    <div class="container-body">
        @include('layouts.partials.body_menu')

        @include('flash::message')

        @section('content')
        @show
    </div>

    @include('layouts.partials.body_footer')
    <div id="toast-message" style="display:none"><p></p></div>
</div>

@include('layouts.partials.scripts')

@section('script')
@show
</body>
</html>
