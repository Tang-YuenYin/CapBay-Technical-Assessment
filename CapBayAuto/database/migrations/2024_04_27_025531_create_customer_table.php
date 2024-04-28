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
        Schema::create('customer', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('lastName');
            $table->string('telno');
            $table->string('emailAdd');
            $table->string('branch');
            $table->dateTime('date_and_time');
            $table->integer('purchase_status'); // Use integer() instead of int()
            $table->float('downpaymentAmount');
            $table->float('modelPrice');
            $table->timestamps();
        });

        // Validation rule for the email address column
        $rules = ['emailAdd' => 'email'];
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer');
    }
};
