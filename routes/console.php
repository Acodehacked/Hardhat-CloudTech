<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

// Artisan::command('inspire', function () {
//     $this->comment(Inspiring::quote());
// })->purpose('Display an inspiring quote')->hourly();

Schedule::call(function () {
    // DB::table('recent_users')->delete();

})->monthly()->timezone('Asia/Kolkata');
 
// Run hourly from 8 AM to 5 PM on weekdays...
// Schedule::command('foo')
        //   ->weekdays()
        //   ->hourly()
        //   
        //   ->between('8:00', '17:00');