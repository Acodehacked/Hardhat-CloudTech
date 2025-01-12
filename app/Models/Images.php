<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Images extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'url',
        'thumbnails',
    ];

    protected $casts = [
        'thumbnails' => 'array', // Automatically handle JSON serialization
    ];

    // public function companies():BelongsTo
    // {
    //     return $this->belongsTo(Companies::class);
    // }
}
