<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;


    // Table name (optional, only needed if it doesn't follow Laravel's convention)
    protected $table = 'tasks';

    // Mass assignable attributes
    protected $fillable = [
        'name',
        'code',
        'project_id',
        'member_id',
        'start_date',
        'end_date',
        'description',
        'status',
        'priority',
        'attachment',
    ];

    /**
     * Get the project associated with the task.
     */
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * Get the member associated with the task.
     */
    public function member()
    {
        return $this->belongsTo(Members::class);
    }

    /**
     * Scope for filtering tasks by status.
     */
    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    /**
     * Scope for filtering tasks by priority.
     */
    public function scopeByPriority($query, $priority)
    {
        return $query->where('priority', $priority);
    }

    /**
     * Accessor for a human-readable priority.
     */
    public function getPriorityLabelAttribute()
    {
        return ucfirst(strtolower($this->priority));
    }

    /**
     * Mutator to ensure status is always properly capitalized.
     */
    public function setStatusAttribute($value)
    {
        $this->attributes['status'] = ucfirst(strtolower($value));
    }
}
