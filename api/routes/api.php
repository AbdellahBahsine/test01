<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\PostController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [LoginController::class, 'login']);
Route::get('/posts/home', [PostController::class, 'posts']);

Route::middleware('auth:sanctum')->group(function () {
    Route::delete('/logout', [LoginController::class, 'logout']);

    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts/create', [PostController::class, 'store']);
});
