<?php

namespace App\Http\Controllers;

use App\PercorsiService;
use Illuminate\Http\Request;

use App\Http\Requests;

class ToMuController extends Controller
{
    public function imageSharer($pathName, $operaIndex, Request $request){

        $crawlers = [
            'facebookexternalhit/1.1',
            'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
            'Facebot',
            'Twitterbot',
        ];

        $userAgent = $request->header('User-Agent');

        if (str_contains($userAgent, $crawlers)) {
            $percorsi = PercorsiService::getPercorsi();
            $opera = $percorsi[$pathName]['nodes'][$operaIndex]['artefacts'][0];
            return view('image_sharer', [
                'pathName'  =>  $pathName,
                'operaIndex'=>  $operaIndex,
                'opera' => $opera
            ]);
        }else{
            $url = \Illuminate\Support\Facades\URL::to(env('APP_URL') . "#!/percorsi/percorso/{$pathName}/{$operaIndex}");
            return response()->redirectTo($url);
        }


    }
}
