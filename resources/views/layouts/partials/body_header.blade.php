<header class="header">
    <div class="header-logo">
        <div class="header-logo-image">
            @if(Auth::check())
                <a href="/school/{{Auth::user()->school->slug}}/index">
                    <img src="/img/comiru_logo.png?224cb433" width="137" height="32" alt="Comiru">
                </a>
            @else
                <a href="/">
                    <img src="/img/comiru_logo.png?224cb433" width="137" height="32" alt="Comiru">
                </a>
            @endif
        </div>
    </div>
    @if(Auth::check())
        <nav class="header-nav">
            <ul class="header-nav-items">
                <li class="header-nav-item-profile-icon" id="header-dropdown-trigger">
                <span class="profile-icon">
                    <img src="/img/user_default.png?74333ab8" width="36" alt="">
                </span>
                </li>
            </ul>
            <div class="header-dropdown">
                <ul class="header-dropdown-list">
                    @foreach(Cache::get('accounts.'.Auth::user()->id) as $account)
                        @if($account->id == Auth::user()->id)
                            <li class="header-dropdown-list-item__active">
                                <span class="profile-icon">
                                    <img src="/img/user_default.png?74333ab8" width="36" alt="">
                                </span>
                                {{ $account->school->name }}
                                <span class="header-dropdown-list-item__link">
                                    <a href="/miaoclass/my/top">マイページ</a>
                                </span>
                            </li>
                        @else
                            <li style="position: relative" class="related-account">
                                <span class="profile-icon">
                                    <img src="/img/user_default.png?74333ab8" width="36" alt="">
                                </span>
                                {{ $account->school->name }}
                                <span class="header-dropdown-list-item__link">
                                    <a href="javascript:void(0)" data-account-id="{{ $account->id }}">切换</a>
                                </span>
                            </li>
                        @endif
                    @endforeach
                    <li class="header-dropdown__footer">
                        <ul class="header-dropdown__footer-nav">
                            <li class="header-dropdown__footer-nav__logout"><a href="/logout">ログアウト</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    @endif
</header>

@section('script')
@endsection