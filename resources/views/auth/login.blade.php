@extends('layouts.home')

@section('content')
    <div class="container-body">
        <div class="page-header" style="text-align: center">
            <h1>塾講師</h1>
            <p>オーナーログイン</p>
        </div>

        <div>
            <h2 style="float: left;width: 50%;cursor: pointer;text-align: center" id="for-teacher-no">工号登录</h2>
            <h2 style="float:left;width:50%;cursor: pointer;text-align: center" id="for-email">邮箱登录</h2>
        </div>
        <div style="clear: both"></div>
        <form method="POST" action="" style="width: 80%;margin-left: 10%">
            {{ csrf_field() }}
            <div id="login-teacher-no">
                <div class="form-group {{ $errors->has('teacher_no') ? 'has-error':'' }}">
                    <label for="teacher_no" class="form-label">工号</label>
                    <input type="text" name="teacher_no" id="teacher_no" class="form-control"
                           value="{{ old('teacher_no') }}">
                    <span class="help-block">{{ $errors->first('teacher_no') }}</span>
                </div>

                <div class="form-group {{ $errors->has('password') ? 'has-error':'' }}">
                    <label for="password" class="form-label">密码</label>
                    <input type="password" name="password" id="password" class="form-control col-sm-12"
                           value="{{ old('password') }}">
                    <span class="help-block">{{ $errors->first('password') }}</span>
                </div>
            </div>

            <div id="login-email" hidden>
                <div class="form-group {{ $errors->has('teacher_no') ? 'has-error':'' }}">
                    <label for="email" class="form-label">邮箱</label>
                    <input type="email" name="email" id="email" class="form-control" value="{{ old('email') }}"
                           placeholder="you@example.com" disabled>
                    <span class="help-block">{{ $errors->first('email') }}</span>
                </div>

                <div class="form-group {{ $errors->has('email_password') ? 'has-error':'' }}">
                    <label for="email-password" class="form-label">密码</label>
                    <input type="password" name="email_password" id="email-password" class="form-control col-sm-12"
                           value="{{ old('email_password') }}" disabled>
                    <span class="help-block">{{ $errors->first('email_password') }}</span>
                </div>
            </div>


            <div class="form-group form-group-btn">
                <button type="submit" class="btn pull-right">ログインする</button>
                <a href="#">忘记密码</a>
                <br>
                <a href="#">联系我们</a>
            </div>
        </form>
    </div>
@endsection

@section('script')
    <script>
        $show_email = "{{ $errors->has('email') || $errors->has('email_password') ? 1:0}}";

        $('#for-teacher-no').click(function () {
            $('#login-email').hide().find('input').prop('disabled', true);
            $('#login-teacher-no').show().find('input').prop('disabled', false);
        });

        $('#for-email').click(function () {
            $('#login-email').show().find('input').prop('disabled', false);
            $('#login-teacher-no').hide().find('input').prop('disabled', true);
        });

        if ($show_email === "1") {
            console.log($show_email === "1");
            $('#for-email').click();
        }
    </script>
@endsection
