<?php
/**
 * Created by PhpStorm.
 * User: shin
 * Date: 06/02/17
 * Time: 18:52
 */

namespace App\Http\Middleware;
use Closure;

class HttpsProtocol
{
    public function handle($request, Closure $next, $guard = null)
    {
        if (!$request->secure() && env('APP_ENV') === 'production') {
            return redirect()->secure($request->getRequestUri());
        }

        return $next($request);
    }
}