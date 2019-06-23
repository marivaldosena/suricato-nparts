<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->createAdminUser();

        factory(App\User::class, 22)->create();

        Model::reguard();
    }

    private function createAdminUser()
    {
        User::create([
            'name' => 'Adenilton Henrique Ribeiro',
            'email' => 'adhenriquemusic@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt(123456),
            'remember_token' => Str::random(10),
            'type' => 1,
            'status' => 1,
        ]);

        $this->command->info('adhenriquemusic@gmail.com');
    }
}
