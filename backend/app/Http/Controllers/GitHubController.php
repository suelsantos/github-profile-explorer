<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Log;

class GitHubController extends Controller
{
    /**
     * Get user data from GitHub API.
     *
     * This method fetches user data from the GitHub API based on the provided username
     * and logs the request and response details in the database.
     *
     * @param string $username The GitHub username to fetch data for.
     * @return \Illuminate\Http\JsonResponse The JSON response containing user data from GitHub.
     */
    public function getUserData($username)
    {
        $url = "https://api.github.com/users/{$username}";
        $response = Http::get($url);

        // Capture the request data (URL and any data that was sent)
        $requestData = [
            'headers' => request()->headers->all(), // Capture all request headers
            'query' => request()->query(), // Capture all query string parameters
        ];

        // Log the request and response data
        Log::create([
            'request_url' => $url,
            'request_data' => json_encode($requestData),
            'response_data' => $response->body(),
        ]);

        return response()->json($response->json());
    }

    /**
     * Get the list of users that the specified user is following on GitHub.
     *
     * This method fetches the list of followings from the GitHub API for the provided username
     * and logs the request and response details in the database.
     *
     * @param string $username The GitHub username to fetch followings for.
     * @return \Illuminate\Http\JsonResponse The JSON response containing the list of followings.
     */
    public function getFollowings($username)
    {
        $url = "https://api.github.com/users/{$username}/following";
        $response = Http::get($url);

        // Capture the request data (URL and any data that was sent)
        $requestData = [
            'headers' => request()->headers->all(), // Capture all request headers
            'query' => request()->query(), // Capture all query string parameters
        ];

        // Log the request and response data
        Log::create([
            'request_url' => $url,
            'request_data' => json_encode($requestData),
            'response_data' => $response->body(),
        ]);

        return response()->json($response->json());
    }
}
