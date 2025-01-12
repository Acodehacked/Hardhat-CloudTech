<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Companies extends Model
{
    protected $fillable = [
        'name',
        'country',
        'city',
        'address',
        'email',
        'phone',
        'website',
        'image', // Ensure the image exists in the images table
        'description',
        'since', // Validate year
        'code'
    ];
    // function members(): HasMany
    // {
    //     return $this->hasMany(Members::class);
    // }
    /**
     * Get the user associated with the Companies
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function images(): HasOne
    {
        return $this->hasOne(Images::class);
    }
 
}
