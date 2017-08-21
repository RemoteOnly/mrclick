<?php

namespace App\Repositories;

use App\Models\Teacher;
use Illuminate\Pagination\LengthAwarePaginator;

class TeacherRepository
{
    static $filters = ['teacher_no' => '工号', 'name' => '姓名', 'role_code' => '角色'];

    private $teacher;

    /**
     * TeacherRepository constructor.
     */
    public function __construct(Teacher $teacher)
    {
        $this->teacher = $teacher;
    }

    public function create($data)
    {
        $teacher = $this->teacher->create($data);

        return $teacher;
    }

    public function update($id, $data)
    {
        $teacher = $this->teacher->findOrFail($id);
        $status = $teacher->update($data);

        return $status;
    }

    public function getRelatedAccounts($email)
    {
        $accounts = $this->teacher->with('school')->where('email', $email)->get(['id', 'name', 'teacher_no', 'school_id']);

        return $accounts;
    }

    public function paginate($school_id, $per_num = 15)
    {
        $pagination = $this->teacher->where('school_id', $school_id)->paginate($per_num);

        return $pagination;
    }

    public function paginateByFilter($school_id, $filter, $keyword, $per_num = 15)
    {
        if ($filter == 'role_code') {
            $role_codes = array_keys(Teacher::ROLES, $keyword);
            if ($role_codes) {
                $pagination = $this->teacher->where(['school_id' => $school_id, $filter => $role_codes[0]])->paginate($per_num);
            } else {
                $pagination = new LengthAwarePaginator([], 0, $per_num);
            }
        } elseif (array_key_exists($filter, self::$filters)) {
            $pagination = $this->teacher->where('school_id', $school_id)->where($filter, 'like', '%' . $keyword . '%')->paginate($per_num);
        } else {
            $pagination = new LengthAwarePaginator([], 0, $per_num);
        }

        $pagination->appends(['filter' => $filter, 'keyword' => $keyword]);

        return $pagination;
    }

    public function find($id)
    {
        $teacher = $this->teacher->with('school')->withCount('students')->find($id);

        return $teacher;
    }
}