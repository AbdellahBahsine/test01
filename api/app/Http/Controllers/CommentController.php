<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Comment;

class CommentController extends Controller
{
    function addComment(Request $request,$id)
    {
        $validator = Validator::make($request-> all(), [
            'comment' => 'required'
        ]);

        if ($validator->fails()) {
            return response([
                'Error' => $validator->errors()->all()
            ],422);
        }

        $comment = new Comment;
        $comment->user_id = $request->user()->id;
        $comment->post_id=$id;
        $comment->comment = $request->comment;
        $comment->save();

        return response();
    }
}
