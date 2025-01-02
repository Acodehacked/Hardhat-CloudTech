<?php

namespace App\Enum;

enum PermissionsEnum: string
{
    //master admin
    case ManageCompaniesPermission = 'manage_companies';
    
    case ManageAllEmployees = 'manage_all_employees';
    case ManageOwnEmployees = 'manage_own_Employees';
    case ManageOwnProjects = 'manage_own_projects';
    //projects
    case AddProjectsPermission = 'add_projects';
    case UpdateProjectsPermission = 'update_projects';
    case DeleteProjectsPermission = 'delete_projects';
}
