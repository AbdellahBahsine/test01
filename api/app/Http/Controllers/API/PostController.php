<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use Image;
use File;
use Auth;
use Storage;


class PostController extends Controller
{
    public function index() {
        $posts = Post::orderBy('created_at', 'desc')->paginate(10);
        
        return $posts;
    }

    public function posts(Request $request)
    {
        $inputV = $request->search;
        
        $posts = Post::where('title', 'ilike', '%'.trim($inputV).'%')->orderBy('created_at', 'desc')->paginate(3);

        return $posts;
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request-> all(), [
            'title' => 'required|max:255',
            'body' => 'required',
            'image' => 'required|mimes:jpg,png,jpeg|max:5048',
        ]);

        if ($validator->fails()) {
            return response([
                'Error' => $validator->errors()->all(),
                'Image' => $request->image,
                'Title' => $request->title
            ],422);
        }

        $newImageName = time() . '-' . $request->title . '.' . $request->image->extension();

        $path = '/images/' . $newImageName;

        $file = $request->file('image');
        $img = Image::make($file);
        $img->resize(500, null, function ($constraint) {
            $constraint->aspectRatio();
        });

        dd($img);

        $img->stream();

        Storage::disk('s3')->put('public/images/posts'.'/'.$newImageName, $img, 's3');

        $post = new Post;
        $post->title = $request->title;
        $post->body = $request->body;
        $post->image = $newImageName;
        $post->user_id = Auth::user()->id;
        $post->save();
    }

    public function delete($id) {
        $postToDelete = Post::find($id);

        $path = 'public/images/posts/' . $postToDelete->image;
        $postToDelete->delete();
        Storage::disk('s3')->delete($path);
    }

    function getPost($id)
    {
        $user = Post::find($id)->user;
        $post = Post::find($id);
        $comments = Post::find($id)->comments()->get();
        return response()
            ->json(['user' => $user, 'post' => $post]);
            
    }

    public function filterPosts(Request $request)
    {
        $inputV = $request->search;
        
        $posts = Post::where(strtolower('title'), 'like', '%'.strtolower($inputV).'%')->orderBy('created_at', 'desc')->paginate(3);

        return $posts;
    }

}
