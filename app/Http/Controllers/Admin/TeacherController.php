<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\TeacherRequest;
use App\Repositories\TeacherRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TeacherController extends Controller
{
    protected $teacher_repo;

    /**
     * TeacherController constructor.
     * @param $teacher_repo
     */
    public function __construct(TeacherRepository $teacher_repo)
    {
        $this->teacher_repo = $teacher_repo;
    }

    public function index(Request $request)
    {
        $filters = TeacherRepository::$filters;
        $school_id = $request->user()->school->id;
        $filter = $request->get('filter');
        $keyword = $request->get('keyword');

        if ($filter !== null) {
            $teachers = $this->teacher_repo->paginateByFilter($school_id, $filter, $keyword, 2);
        } else {
            $teachers = $this->teacher_repo->paginate($school_id, 15);
        }

        return view('admin.teacher.index', compact('teachers', 'filters', 'filter', 'keyword'));
    }

    public function show($id)
    {
        $teacher = $this->teacher_repo->find($id);

        return view('admin.teacher.show', compact('teacher'));
    }

    public function edit($id)
    {
        $teacher = $this->teacher_repo->find($id);

        return view('admin.teacher.edit', compact('teacher'));
    }

    public function store(TeacherRequest $request)
    {
        $password = bcrypt($request->get('telephone'));
        $request->merge(['password' => $password, 'email_password' => $password, 'school_id' => $request->user()->school_id]);

        $teacher = $this->teacher_repo->create($request->all());
        if ($teacher) {
            flash()->success('创建成功');
            return redirect()->route('admin.teachers.show', $teacher->id);
        } else {
            flash()->error('创建失败，请稍候重试');
            return back()->withInput();
        }
    }

    public function update(TeacherRequest $request, $id)
    {
        // TODO 需要判断是否是自己 或者 重新定义一个用于teacher自己更新的方法
        $status = $this->teacher_repo->update($id, $request->except(['school_id', 'email']));

        if ($status) {
            flash()->success('更新成功');
            return redirect()->route('admin.teachers.show', $id);
        } else {
            flash()->error('更新失败，请稍候重试');
            return back()->withInput();
        }
    }

    public function destroy()
    {

    }

    public function create()
    {
        dd('c');
    }
}
