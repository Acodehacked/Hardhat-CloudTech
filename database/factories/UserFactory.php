<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // return [
        //     'name' => 'Robin Mathew',
        //     'email' => 'robin@hardhatcloudtech.com',
        //     'cc'=>'91',
        //     'phone'=>"9191919191",
        //     'email_verified_at' => now(),
        //     'password' => static::$password ??= Hash::make('hardhat@2025'),
        //     'remember_token' => Str::random(10),
        // ];
        return [
                'name' => 'Abin Antony',
                'email' => 'abin@hardhatcloudtech.com',
                'cc'=>'91',
                'phone'=>"9048741910",
                'email_verified_at' => now(),
                'password' => static::$password ??= Hash::make('hardhat@2025'),
                'remember_token' => Str::random(10),
            ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
