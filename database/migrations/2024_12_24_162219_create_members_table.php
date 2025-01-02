<?php

use App\Models\Companies;
use App\Models\User;
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
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->enum('type',['Client','EPC','Contractor','Subcontractor']);
            $table->string('reg_id')->unique('Reg-0');
            $table->string('avatar')->nullable();
            $table->string('address',2000)->nullable();
            $table->foreignIdFor(User::class)->constrained('users')->cascadeOnDelete();
            $table->foreignId('company_id')->references('id')->on('companies')->cascadeOnDelete();
            $table->date('register_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('members');
    }
};
