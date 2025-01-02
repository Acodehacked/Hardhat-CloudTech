<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code')->unique('task-0');
            $table->foreignId('project_id')->constrained('projects')->cascadeOnDelete();
            $table->foreignId('member_id')->constrained('members')->cascadeOnDelete();
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->longText('description')->nullable();
            $table->enum('status',['Pending','In Progress','Completed']);
            $table->enum('priority',['Low','Medium','High'])->default('Medium');
            $table->string('attachment')->nullable();
            $table->timestamps();
        });
        Schema::create('tasks_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('task_id')->constrained('tasks')->cascadeOnDelete();
            $table->foreignId('member_id')->constrained('members')->cascadeOnDelete();
            $table->enum('status',['Pending','In Progress','Completed']);
            $table->string('attachment')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
        Schema::dropIfExists('tasks_logs');
    }
};
