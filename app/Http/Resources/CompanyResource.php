<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'          => $this->id,
            'name'        => $this->name,
            'country'     => $this->country,
            'city'        => $this->city,
            'address'     => $this->address,
            'email'       => $this->email,
            'phone'       => $this->phone,
            'website'     => $this->website,
            'image'    => $this->image,
            'description' => $this->description,
            'since'       => $this->since,
            'code'        => $this->code,
            'created_at'  => $this->created_at,
            'updated_at'  => $this->updated_at,
        ];
    }
}
