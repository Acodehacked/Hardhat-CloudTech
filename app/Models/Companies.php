<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Companies extends Model
{
    function members(): HasMany
    {
        return $this->hasMany(Members::class);
    }
}
