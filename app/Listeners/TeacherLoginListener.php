<?php

namespace App\Listeners;

use Cache;
use Illuminate\Auth\Events\Login;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Repositories\TeacherRepository;
use View;

class TeacherLoginListener
{
    private $teacher_repo;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(TeacherRepository $teacher_repo)
    {
        $this->teacher_repo = $teacher_repo;
    }

    /**
     * Handle the event.
     *
     * @param  Login $event
     * @return void
     */
    public function handle(Login $event)
    {
        $teacher = $event->user;

        // cache the related accounts info
        Cache::rememberForever('accounts.' . $teacher->id, function () use ($teacher) {
            $accounts = $this->teacher_repo->getRelatedAccounts($teacher->email);
            return $accounts;
        });

        // TODO
        // cache the menus info
        Cache::rememberForever('menus.' . $teacher->id, function () use ($teacher) {
            $menus = [];
            return $menus;
        });
    }
}
