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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('country');
            $table->string('city')->nullable();
            $table->longText('address',2000);
            $table->string('email',100);
            $table->string('phone');
            $table->string('website')->nullable();
            $table->string('logo');
            $table->string('description')->nullable();
            $table->string('since');
            $table->string('code')->unique();
        });
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code')->unique('project-0');
            $table->longText('Address');
            $table->longText('location')->nullable();
            $table->date('start_date');
            $table->string('client_email');
            $table->longText('description');
            $table->foreignId('company_id')->references('id')->on('companies')->cascadeOnDelete();
            $table->enum('status',['Pending','In Progress','Completed','On Hold','Cancelled']);
            $table->json('images');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
        Schema::dropIfExists('projects');

    }
};
