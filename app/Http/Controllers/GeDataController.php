<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;


class GeDataController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //get page
        $page = $request->input('page') || 1;

        //request
        $client = new Client();
        $res = $client->request('GET', "http://falkor-cda.bastian.globo.com/feeds/5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d/posts/page/$page");
        
        return response($res->getBody(), $res->getStatusCode())
                  ->header('Content-Type', $res->getHeader('content-type'));
    }
}
