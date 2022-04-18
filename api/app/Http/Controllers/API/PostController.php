<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Post;
use App\Models\User;
use Image;
use File;
use Auth;
use Storage;


class PostController extends Controller
{
    public function index() {
        $posts = Post::orderBy('created_at', 'asc')->paginate(10);
        
        return $posts;
    }

    public function posts() {
        $posts = Post::orderBy('created_at', 'desc')->paginate(3);
        
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
            return redirect('http://localhost:3000/dashboard/')
                ->withInput()
                ->withErrors($validator);
        }

        $newImageName = time() . '-' . $request->title . '.' . $request->image->extension();

        $path = '/images/' . $newImageName;

        $file = $request->file('image');
        $img = Image::make($file);
        $img->resize(500, null, function ($constraint) {
            $constraint->aspectRatio();
        });

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

}
