@extends('layouts.app')

@section('content')
    <div class="page-header page-header-btn">
        <h1>老师详情</h1>
        @if($teacher->isPresident() == false)
            <a href="{{ route('admin.teachers.edit', $teacher->id) }}" class="btn">
                <i class="icon-edit"></i>
                编辑
            </a>
        @endif
    </div>

    <table class="table">
        <tr>
            <td colspan="2">
                <table class="table table-bordered">
                    <tr>
                        <td>工号</td>
                        <td>{{ $teacher->teacher_no }}</td>
                    </tr>
                    <tr>
                        <td>姓名</td>
                        <td>{{ $teacher->name }}</td>
                    </tr>
                    <tr>
                        <td>姓名kana</td>
                        <td>{{ $teacher->name_kana }}</td>
                    </tr>
                    <tr>
                        <td>学校</td>
                        <td>{{ $teacher->school->name }}</td>
                    </tr>
                </table>
            </td>
            <td colspan="2">
                <img src="http://comiru.app/img/user_default.png?74333ab8" alt="" style="widtd: 128px">
            </td>
        </tr>
        <tr>
            <td>角色</td>
            <td>{{ $teacher->translateRoleCode($teacher->role_code) }}</td>
            <td>学生量</td>
            <td>
                {{ $teacher->students_count }}
                <a href="#">分配学生</a>
            </td>
        </tr>
        <tr>
            <td>电话</td>
            <td>{{ $teacher->telephone}}</td>
            <td>Email</td>
            <td>{{ $teacher->email }}</td>
        </tr>
        <tr>
            <td>入职时间</td>
            <td>{{ $teacher->created_at->toDateString() }}</td>
            <td>登录日志</td>
            <td></td>
        </tr>
        <tr>
            <td>个人简介</td>
            <td colspan="3"></td>
        </tr>
    </table>
@endsection