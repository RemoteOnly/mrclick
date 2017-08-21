@extends('layouts.app')

@section('content')
    <div class="page-header page-header-btn">
        <h1>老师编辑</h1>
    </div>

    <form action="{{ route('admin.teachers.update', $teacher->id) }}" method="post">
        {{ method_field('put') }}
        {{ csrf_field() }}

        <div class="form-group">
            <label> 工号</label>
            <input type="text" class="form-control" value="{{ $teacher->teacher_no }}" disabled>
        </div>

        <div class="form-group">
            <label> 姓名</label>
            <input type="text" class="form-control" name="name" value="{{ old('name', $teacher->name) }}">
            <span class="help-block">{{ $errors->first('name') }}</span>
        </div>

        <div class="form-group">
            <label> 姓名_kana</label>
            <input type="text" class="form-control" name="name_kana"
                   value="{{ old('name_kana', $teacher->name_kana) }}">
            <span class="help-block">{{ $errors->first('name_kana') }}</span>
        </div>

        <div class="form-group">
            <label> 学校</label>
            <input type="text" class="form-control" value="{{ old('name', $teacher->school->name) }}" disabled>
        </div>

        <div class="form-group">
            <label> 角色</label>
            @foreach($teacher->translateRoleCode() as $key => $value)
                @continue($key == \App\Models\Teacher::PRESIDENT)
                <input type="radio" class="radio-inline" name="role_code"
                       value="{{ $key }}" {{ $teacher->role_code == $key?'checked':'' }}>{{ $value }}
            @endforeach
            <span class="help-block">{{ $errors->first('role_code') }}</span>
        </div>

        <div class="form-group">
            <label> 电话</label>
            <input type="text" class="form-control" name="telephone"
                   value="{{ old('telephone', $teacher->telephone) }}">
            <span class="help-block">{{ $errors->first('telephone') }}</span>
        </div>

        <div class="form-group">
            <label> email</label>
            <input type="text" class="form-control" value="{{ $teacher->email }}" disabled>
            <input type="hidden" value="{{ $teacher->email  }}" name="email">
            <input type="hidden" value="{{ $teacher->school_id }}" name="school_id"></input>
        </div>

        <div class="form-group">
            <button class="btn">提交</button>
        </div>
    </form>
@endsection