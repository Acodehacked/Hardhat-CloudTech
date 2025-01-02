<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Members extends Model
{
    protected $table = 'members';

    function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    function company(): BelongsTo
    {
        return $this->belongsTo(Companies::class);
    }

    function projects()
    {
        return $this->hasMany(Project::class);
    }

    function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
