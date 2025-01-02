<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    function members()
    {
        return $this->hasMany(Members::class);
    }
    function company(): BelongsTo
    {
        return $this->belongsTo(Companies::class);
    }

}
