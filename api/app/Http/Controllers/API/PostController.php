<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use App\Models\Post;

class PostController extends Controller
{
    public function index() {
        $posts = Post::orderBy('created_at', 'desc')->paginate(3);
        
        return $posts;
    }
}
