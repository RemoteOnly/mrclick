<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Teacher extends Authenticatable
{
    use Notifiable;

    const PARTTIME = 0;
    const FULLTIME = 1;
    const ADMIN = 2;
    const PRESIDENT = 3;
    const ROLES = [
        self::PARTTIME => '兼职',
        self::FULLTIME => '普通',
        self::ADMIN => '管理员',
        self::PRESIDENT => '校长',
    ];

    static $auth_password = 'password';

    protected $fillable = [
        'name', 'name_kana', 'teacher_no', 'password', 'email', 'email_password', 'telephone',
        'icon_url', 'icon_s3_bucket', 'school_id', 'omise_id', 'role_code',
    ];

    protected $hidden = [
        'password', 'remember_token', 'email_password',
    ];

    //region Attributes

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public function setEmailPasswordAttribute($value)
    {
        $this->attributes['email_password'] = bcrypt($value);
    }

    //endregion

    //region Relations

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function students()
    {
        return $this->belongsToMany(Student::class, 'teacher_student');
    }

    //endregion

    //region Overwrite

    public function getAuthPassword()
    {
        return $this->attributes[self::$auth_password];
    }

    //endregion

    //region Helper

    public function translateRoleCode($role_code = null)
    {
        if ($role_code !== null) {
            return array_key_exists($role_code, self::ROLES) ? self::ROLES[$role_code] : '未知';
        }

        return self::ROLES;
    }

    public function isPresident()
    {
        return $this->attributes['role_code'] == Teacher::PRESIDENT;
    }

    //endregion
}
