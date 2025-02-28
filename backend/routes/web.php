<?php

use App\Http\Controllers\GitHubController;
use Illuminate\Support\Facades\Route;

/**
 * Define the application routes.
 *
 * The following routes handle the display of the welcome page and API endpoints for fetching
 * user data and followings from GitHub. The API routes are grouped under the 'api' prefix.
 */
Route::get('/', function () {
    return view('welcome');
});

// Group all routes under the 'api' prefix
Route::prefix('api')->group(function () {
    /**
     * Route to fetch user data from GitHub.
     *
     * This route will call the 'getUserData' method of the GitHubController to retrieve
     * user information based on the provided username.
     *
     * @param string $username The GitHub username to fetch data for.
     * @return \Illuminate\Http\JsonResponse The JSON response containing user data.
     */
    Route::get('user/{username}', [GitHubController::class, 'getUserData']);

    /**
     * Route to fetch the list of users a specified user is following on GitHub.
     *
     * This route will call the 'getFollowings' method of the GitHubController to retrieve
     * the list of followings for the provided username.
     *
     * @param string $username The GitHub username to fetch followings for.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the list of followings.
     */
    Route::get('user/{username}/followings', [GitHubController::class, 'getFollowings']);
});
