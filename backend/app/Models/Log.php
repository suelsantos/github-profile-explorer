<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * This property defines the fields that can be mass assigned in the database.
     *
     * @var array
     */
    protected $fillable = [
        'request_url', // The URL of the API request.
        'request_data', // The data sent with the API request (headers, query parameters).
        'response_data', // The data received in response to the API request.
    ];
}
