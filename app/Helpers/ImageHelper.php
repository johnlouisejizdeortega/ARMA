<?php

namespace App\Helpers;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageHelper
{
    /**
     *
     *
     * @param UploadedFile $file
     * @param string|null $oldPath
     * @return string
     */
    public static function uploadTeamMemberImage(UploadedFile $file, ?string $oldPath = null): string
    {
        if ($oldPath && !Str::contains($oldPath, 'avatar-placeholder') && Storage::disk('team_images')->exists(basename($oldPath))) {
            Storage::disk('team_images')->delete(basename($oldPath));
        }


        $fileName = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) . '-' . time() . '.' . $file->getClientOriginalExtension();


        $file->storeAs('', $fileName, 'team_images');

        return '/images/team/' . $fileName;
    }
}
