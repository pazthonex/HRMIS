<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Department;

class Employee extends Model
{
    use HasFactory;

    protected $table = 'employee';
    protected $fillable = [
        'FirstName',
        'MiddleName',
        'LastName',
        'DateOfBirth',
        'PlaceOfBirth',
        'Sex',
        'CivilStatus',
        'Citizenship',
        'TIN',
        'GSISID',
        'PagIbigID',
        'PhilHealth',
        'SSS',
        'Telephone',
        'Cellphone',
        'EmailAddress',
        'AgencyNumber',
        'isActive',
        'EmploymentStatus',
        'CurrentItem',
        'Department',
        'Ext',
        'Height',
        'Weight',
        'BloodType',
        'RTelephone',
        'RHouseNo',
        'RHouseStreet',
        'RSubDivision',
        'PHouseNo',
        'PHouseStreet',
        'PSubDivision',
        'RBarangay',
        'PBarangay',
        'RZip',
        'PZip',
        'Prefix',
        'Suffix',
        'LoginComputation'
    ];

    protected $with = ['department'];
    public function department(){
        return $this->belongsTo(Department::class, 'Department','id');  
    }
}
