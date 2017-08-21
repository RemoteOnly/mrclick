@extends('layouts.app')

@section('content')
    <a class="btn" href="{{ route('admin.teachers.create') }}">添加</a>

    <div class="input-group">
        <input type="text" class="form-control" id="keyword" value="{{ $keyword or '' }}">
        <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                {{ $filter ? $filters[$filter] : '选择搜索' }}
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu pull-right">
                @foreach($filters as $filter => $value)
                    <li>
                        <a href="javascript:void(0);"
                           data-url="{{ route('admin.teachers.index') }}?filter={{ $filter }}&keyword=">{{ $value }}</a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>

    <table class="table">
        <thead>
        <tr>
            <th>头像</th>
            <th>工号</th>
            <th>姓名</th>
            <th>角色</th>
            <th>入职时间</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        @foreach($teachers as $teacher)
            <tr>
                <td>
                    <span class="profile-icon">
                        <img src="https://s3-ap-northeast-1.amazonaws.com/comiru-local/teacher-icons/1/6d71c92d-1538-4861-b10d-acbad30f82d4.png"
                             width="24" alt="">
                    </span>
                </td>
                <td>{{ $teacher->teacher_no }}</td>
                <td>
                    <a href="{{ route('admin.teachers.show', $teacher->id) }}">{{ $teacher->name }}</a>
                </td>
                <td>
                    {{ $teacher->translateRoleCode($teacher->role_code) }}
                </td>
                <td>{{ $teacher->created_at->toDateString() }}</td>
                <td>
                    @if($teacher->isPresident() == false)
                        <button class="btn-sm btn-danger"><i class="icon-trash"></i></button>
                    @endif
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    {{ $teachers->links() }}
@endsection

@section('script')
    <script>
        $('.dropdown-menu li a').click(function () {
            var keyword = $('#keyword').val();
            if (keyword.trim().length === 0) {
                return false;
            }

            var url = $(this).data('url') + keyword;

            window.location.href = url;
        });
    </script>
@endsection