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
        Schema::create('insights', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade');
            $table->string('key_metric'); // Insight key metric (e.g., "Daily Logs Submitted")
            $table->string('value'); // Value for the metric (e.g., "85%")
            $table->timestamps(); // created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('insights');
    }
};
