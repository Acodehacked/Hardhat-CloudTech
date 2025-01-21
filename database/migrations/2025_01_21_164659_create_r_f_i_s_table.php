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
        Schema::create('rfis', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade');
            $table->string('subject'); // RFI subject
            $table->text('description')->nullable(); // RFI description
            $table->enum('status', ['open', 'closed', 'answered'])->default('open'); // RFI status
            $table->timestamps(); // created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rfis');
    }
};
