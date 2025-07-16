<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up()
    {
        Schema::create('team_members', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('position');
            $table->text('bio');
            $table->text('fullBio')->nullable();
            $table->string('image');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->json('education')->nullable();
            $table->json('areasOfPractice')->nullable();
            $table->json('memberships')->nullable();
            $table->json('languages')->nullable();
            $table->json('notableCases')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('team_members');
    }
};
