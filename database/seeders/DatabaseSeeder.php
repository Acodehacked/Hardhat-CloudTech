<?php

namespace Database\Seeders;
use Illuminate\Support\Str;
use App\Enum\RolesEnum;
use App\Enum\PermissionsEnum;
use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);
        $CompanyRole = Role::create(['name' => RolesEnum::Company->value]);
        $ClientRole = Role::create(['name' => RolesEnum::Client->value]);
        $EpcRole = Role::create(['name' => RolesEnum::Epc->value]);
        $ContractorRole = Role::create(['name' => RolesEnum::Contractor->value]);
        $SubContractorRole = Role::create(['name' => RolesEnum::SubContractor->value]);
        $UserRole = Role::create(['name' => RolesEnum::User->value]);

        $ManageCompaniesPermission = Permission::create([
            'name' => PermissionsEnum::ManageCompaniesPermission->value
        ]);
        $ManageAllEmployeesPermission = Permission::create([
            'name' => PermissionsEnum::ManageAllEmployees->value
        ]);
        $ManageOwnEmployees = Permission::create([
            'name' => PermissionsEnum::ManageOwnEmployees->value
        ]);
        $ManageOwnProjects = Permission::create([
            'name' => PermissionsEnum::ManageOwnProjects->value
        ]);
        $AddProjectsPermission = Permission::create([
            'name' => PermissionsEnum::AddProjectsPermission->value
        ]);
        $UpdateProjectsPermission = Permission::create([
            'name' => PermissionsEnum::UpdateProjectsPermission->value
        ]);
        $DeleteProjectsPermission = Permission::create([
            'name' => PermissionsEnum::DeleteProjectsPermission->value
        ]);

        $adminRole->syncPermissions([$ManageCompaniesPermission, $ManageAllEmployeesPermission, $ManageOwnEmployees, $AddProjectsPermission, $UpdateProjectsPermission, $DeleteProjectsPermission]);
        $CompanyRole->syncPermissions([$ManageOwnEmployees, $ManageOwnProjects, $AddProjectsPermission, $UpdateProjectsPermission, $DeleteProjectsPermission]);
        $EpcRole->syncPermissions([$ManageOwnProjects, $UpdateProjectsPermission]);
        $ContractorRole->syncPermissions([$ManageOwnProjects, $AddProjectsPermission, $UpdateProjectsPermission, $DeleteProjectsPermission]);
        $SubContractorRole->syncPermissions([$UpdateProjectsPermission]);
        $UserRole->syncPermissions([]);
        $ClientRole->syncPermissions([]);
        // $user = User::factory()->create();

        $password = 'hardhat@2025';
        $user = User::create([
            'name' => 'Abin Antony',
            'email' => 'abin@hardhatcloudtech.com',
            'cc' => '91',
            'phone' => "9048741910",
            'email_verified_at' => now(),
            'password' => $password ??= Hash::make('hardhat@2025'),
            'remember_token' => Str::random(10),
        ]);
        $user->assignRole(RolesEnum::Admin);

        $user = User::create([
            'name' => 'Robin Kattady',
            'email' => 'robin@hardhatcloudtech.com',
            'cc' => '91',
            'phone' => '9394049043',
            'email_verified_at' => now(),
            'password' => $password ??= Hash::make('hardhat@2025'),
            'remember_token' => Str::random(10),
        ]);
        $user->assignRole(RolesEnum::Contractor);
    }
}
