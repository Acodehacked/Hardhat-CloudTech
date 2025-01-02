<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    function project()
    {
        return $this->belongsTo(Project::class);
    }
    function member()
    {
        return $this->belongsTo(Members::class);
    }
    function company()
    {
        return $this->hasMany(Companies::class);
    }

}
