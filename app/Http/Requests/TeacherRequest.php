<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeacherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'telephone' => 'required|numeric',
            'school_id' => 'required|numeric',
            'role_code' => 'required|in:0,1,2,3'
        ];

        switch ($this->method()) {
            case 'GET':
            case 'DELETE':
                break;

            case 'POST':
                break;

            case 'PUT':
            case 'PATCH':
                $rules['role_code'] = 'required|in:0,1,2';
                break;
            default:
                break;
        }

        return $rules;
    }
}
