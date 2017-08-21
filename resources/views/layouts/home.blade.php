<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    @include('layouts.partials.html_header')

    @section('html_header')
    @show
</head>
<body>
<div class="container">
    @section('body_header')
        @include('layouts.partials.body_header')
    @show

    @section('content')
    @show

    @include('layouts.partials.body_footer')

    @include('layouts.partials.scripts')

    @section('script')

    @show
</div>
</body>
</html>
