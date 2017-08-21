<footer class="footer">
    <nav class="footer-nav">
        @if(Auth::check())
            <ul class="footer-nav-items">
                <li><a href="/logout" id="logout">ログアウト</a></li>
            </ul>
        @endif
        <ul class="footer-nav-items">
            <li><a href="/terms">利用規約</a></li>
            <li><a href="/policy">プライバシーポリシー</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
        </ul>
    </nav>
    <p class="footer-copyright">© POPER Inc.</p>
</footer>