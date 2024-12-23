<?php

namespace Database\Seeders;

use App\Enum\RolesEnum;
use App\Enum\PermissionsEnum;
use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        // User::factory(10)->create();
    //     $adminRole = Role::create(['name' => RolesEnum::Admin->value]);
    //     $CompanyRole = Role::create(['name' => RolesEnum::Company->value]);
    //     $ClientRole = Role::create(['name' => RolesEnum::Client->value]);
    //     $EpcRole = Role::create(['name' => RolesEnum::Epc->value]);
    //     $ContractorRole = Role::create(['name' => RolesEnum::Contractor->value]);
    //     $SubContractorRole = Role::create(['name' => RolesEnum::SubContractor->value]);
    //     $UserRole = Role::create(['name' => RolesEnum::User->value]);

    //     $ManageCompaniesPermission = Permission::create([
    //         'name' => PermissionsEnum::ManageCompaniesPermission->value
    //     ]);
    //     $ManageAllEmployeesPermission = Permission::create([
    //         'name' => PermissionsEnum::ManageAllEmployees->value
    //     ]);
    //     $ManageOwnEmployees = Permission::create([
    //         'name' => PermissionsEnum::ManageOwnEmployees->value
    //     ]);
    //     $AddProjectsPermission = Permission::create([
    //         'name'=> PermissionsEnum::AddProjectsPermission->value
    //         ]);
    //     $UpdateProjectsPermission = Permission::create([
    //         'name'=> PermissionsEnum::UpdateProjectsPermission->value
    //     ]);
    //     $DeleteProjectsPermission = Permission::create([
    //         'name'=> PermissionsEnum::DeleteProjectsPermission->value
    //     ]);

    //    $adminRole->syncPermissions([$ManageCompaniesPermission,$ManageAllEmployeesPermission,$ManageOwnEmployees,$AddProjectsPermission,$UpdateProjectsPermission,$DeleteProjectsPermission,$DeleteProjectsPermission]);
    //     $CompanyRole->syncPermissions([$ManageOwnEmployees,$AddProjectsPermission,$UpdateProjectsPermission,$DeleteProjectsPermission]);
    //     $ClientRole->syncPermissions([]);
    //     $EpcRole->syncPermissions([]);
    //     $ContractorRole->syncPermissions([$AddProjectsPermission,$UpdateProjectsPermission,$DeleteProjectsPermission]);
    //     $SubContractorRole->syncPermissions([$UpdateProjectsPermission]);
    //     $UserRole->syncPermissions([]);
        User::factory()->create();
    }
}
