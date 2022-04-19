<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\CommentController;
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
Route::get('/post/{id}', [PostController::class, 'getPost']);
Route::get('/posts', [PostController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::delete('/logout', [LoginController::class, 'logout']);

    Route::post('/posts/create', [PostController::class, 'store']);

    Route::delete('/post/delete/{id}', [PostController::class, 'delete']);

    Route::post('/post/{id}/comment', [CommentController::class, 'addComment']);
});
