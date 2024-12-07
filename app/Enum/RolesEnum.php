<?php

namespace App\Enum;

enum RolesEnum : string
{
    case Admin = 'master_admin';
    case Company = 'company';
    case Client = 'client';
    case Epc = 'EPC';
    case Contractor = 'contractor';
    case SubContractor = 'subcontractor';
    case User = 'user';

    public static function labels() : array
    {
        return [
            self::Admin->value => 'Admin',
            self::Company->value => 'Company',
            self::Client->value => 'Client',
            self::Epc->value => 'Epc',
            self::Contractor->value => 'Contractor',
            self::SubContractor->value => 'SubContractor',
            self::User->value => 'user',
        ];
    }


    public function label(): string
    {
        return match($this) {
            self::Admin => 'Admin',
            self::Company => 'Company',
            self::Client => 'Client',
            self::Epc => 'Epc',
            self::Contractor => 'Contractor',
            self::SubContractor => 'SubContractor',
            self::User => 'user',
        };
    }

}
