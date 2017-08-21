<nav class="navbar-main">
    <ul class="navbar-main-items">
        <li class="navbar-main-item navbar-main-item-name"><a href="/miaoclass/top"><span
                        class="navbar-main-item__active">miaoclass</span></a></li>
        <li class="navbar-main-item"><a href="/miaoclass/reports/search?teacher_id=1"><span>指導報告書</span></a></li>
        <li class="navbar-main-item"><a href="/miaoclass/students"><span>生徒</span></a></li>
        <li class="navbar-main-item"><a href="/miaoclass/news?teacher_id=1"><span>お知らせ</span></a></li>
        <li class="navbar-main-item"><a href="/admin"><span>お知らせ</span></a></li>
    </ul>
</nav>

<nav class="navbar-sub">
    <ul class="navbar-sub-items">
        <li class="navbar-sub-item"><a href="{{ route('admin.teachers.index') }}" class="navbar-sub-item__active">老师管理</a></li>
        <li class="navbar-sub-item"><a href="/miaoclass/top">学生管理</a></li>
        <li class="navbar-sub-item"><a href="/miaoclass/admin/report/templates">報告書設定</a></li>
        <li class="navbar-sub-item"><a href="/miaoclass/admin/settings">教室設定</a></li>
        <li class="navbar-sub-item"><a href="/miaoclass/admin/textbooks">教材登録</a></li>
        <li class="navbar-sub-item"><a href="/miaoclass/notifications">通知</a></li>
    </ul>
</nav>