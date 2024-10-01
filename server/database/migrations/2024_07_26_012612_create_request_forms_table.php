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
        Schema::create('request_forms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->default(1);
            $table->string('form_type'); // Store the type of form, e.g., 'cash_advance'
            $table->json('form_data'); // Store form data in a JSON column 
            $table->timestamps();
            $table->json('attachment');
            $table->string('status')->default('Pending');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('approvers_id');
            
            $table->foreign('approvers_id')->references('id')->on('custom_approvers');
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_forms');
    }
};