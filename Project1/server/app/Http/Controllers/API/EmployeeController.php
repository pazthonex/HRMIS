<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index(){
        $employee = Employee::all();
        return response()->json([
            'status' => 200,
            'employees' => $employee
        ]);
    }

    public function insert(Request $request){

        $validator = Validator::make($request->all(),[
            'firstname' => 'required',
            'lastname' => 'required',
            'emailaddress' => 'required|email|unique:employee,emailaddress',
        ]
        );

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        }
            // return response()->json([
            //     'status' => 201,
            //     'inputData' => $request->input(),
            // ]);
            // return response()->json([
            //     'status' => 201,
            //     //'input' => $request->input(),
            //     'input' => $request->hasFile('photo')
                
            // ]);

            // $employee = Employee::create([
               
            //    // 'username'=> $request->username,
            //    // 'password' =>Hash::make($request->password),
            //     'FirstName' => $request->firstname ,
            //     'MiddleName' => $request->middlename,
            //     'LastName' => $request->lastname,
            //     'DateOfBirth' => $request->dateofbirth,
            //     'PlaceOfBirth' => $request->placeofbirth,
            //     'Sex'  => $request->sex,
            //     'CivilStatus'  => $request->civilstatus,
            //     'Citizenship'  => $request->citizenship,
            //     'TIN'  => $request->tin,
            //     'GSISID'  => $request->gsisid,
            //     'PagIbigID'  => $request->pagibigid,
            //     'PhilHealth'  => $request->philhealth,
            //     'SSS'  => $request->sss,
            //     'Telephone'  => $request->telephone,
            //     'Cellphone'  => $request->cellphone,
            //     'EmailAddress'  => $request->emailaddress,
            //     'AgencyNumber'  => $request->agencynumber,
            //     'isActive'  => $request->isactive,
            //     'EmploymentStatus'  => $request->employmentstatus,
            //     'CurrentItem'  => $request->currentitem,
            //     'Department'  => $request->department,
            //     'Ext'  => $request->ext,
            //     'Height'  => $request->height,
            //     'Weight'  => $request->weight,
            //     'BloodType'  => $request->bloodtype,
            //     'RTelephone'  => $request->rtelephone,
            //     'PTelephone'  => $request->ptelephone,
            //     'RHouseNo'  => $request->rhouseno,
            //     'RHouseStreet'  => $request->rhousestreet,
            //     'RSubDivision'  => $request->rsubdivision,
            //     'PHouseNo'  => $request->phouseno,
            //     'PHouseStreet'  => $request->phousestreet,
            //     'PSubDivision'  => $request->psubdivision,
            //     'RBarangay'  => $request->rbarangay,
            //     'PBarangay'  => $request->pbarangay,
            //     'RZip'  => $request->rzip,
            //     'PZip'  => $request->pzip ,
            //     'Prefix'  => $request->prefix,
            //     'Suffix'  => $request->suffix,
            //     'LoginComputation'  => $request->logincomputation;
               
            //     'profilephoto' => $request->photo
            // ]);


            $employee = new Employee();
            $employee->FirstName = $request->firstname;
            $employee->MiddleName = $request->middlename;
            $employee->LastName = $request->lastname;
            $employee->DateOfBirth = $request->dateofbirth;
            $employee->PlaceOfBirth = $request->placeofbirth;
            $employee->Sex  = $request->sex;
            $employee->CivilStatus  = $request->civilstatus;
            $employee->Citizenship  = $request->citizenship;
            $employee->TIN  = $request->tin;
            $employee->GSISID  = $request->gsisid;
            $employee->PagIbigID  = $request->pagibigid;
            $employee->PhilHealth  = $request->philhealth;
            $employee->SSS  = $request->sss;
            $employee->Telephone  = $request->telephone;
            $employee->Cellphone  = $request->cellphone;
            $employee->EmailAddress  = $request->emailaddress;
            $employee->AgencyNumber  = $request->agencynumber;
            $employee->isActive  = $request->isactive;
            $employee->EmploymentStatus  = $request->employmentstatus;
            $employee->CurrentItem = $request->currentitem;
            $employee->Department  = $request->department;
            $employee->Ext  = $request->ext;
            $employee->Height  = $request->height;
            $employee->Weight = $request->weight;
            $employee->BloodType  = $request->bloodtype;
            $employee->RTelephone  = $request->rtelephone;
            $employee->PTelephone  = $request->ptelephone;
            $employee->RHouseNo  = $request->rhouseno;
            $employee->RHouseStreet  = $request->rhousestreet;
            $employee->RSubDivision  = $request->rsubdivision;
            $employee->PHouseNo  = $request->phouseno;
            $employee->PHouseStreet  = $request->phousestreet;
            $employee->PSubDivision  = $request->psubdivision;
            $employee->RBarangay  = $request->rbarangay;
            $employee->PBarangay  = $request->pbarangay;
            $employee->RZip  = $request->rzip;
            $employee->PZip  = $request->pzip ;
            $employee->Prefix  = $request->prefix;
            $employee->Suffix  = $request->suffix;
            $employee->LoginComputation  = $request->logincomputation;
            if($request->hasFile('photo')){
                $file = $request->file('photo');
                $extension = $file->getClientOriginalExtension();
                $filename = time().'.'.$extension;
                $file->move('storage/uploads/employee/', $filename);
                $employee->profilephoto = 'storage/uploads/employee/'.$filename;
            }
            $employee->save();
            $employees = Employee::find($employee->id);
                return response()->json([
                       'status' => 200,
                       'response' =>  [
                           'data' => $employees,
                           'message' => 'Employee Added!'
                       ]
                ]);
            //  }
         

    }

    public function update(Request $request, $id){

        $validator = Validator::make($request->all(),[
            'firstname' => 'required',
            'lastname' => 'required',
           // 'phone' => 'required|min:11|max:11',
         //'username' => 'required|unique:users,username',
        'emailaddress' => 'required|email|unique:employee,emailaddress,'.$id,
        ]
        );

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        }
       // else{

            // return response()->json([
            //     'status' => 201,
            //     'inputData' => $request->input(),
            // ]);


            $employee = Employee::find($id);
            if($employee){
                $employee->FirstName = $request->firstname;
                $employee->MiddleName = $request->lastname;
                $employee->LastName = $request->lastname;
                $employee->DateOfBirth = $request->dateofbirth;
                $employee->PlaceOfBirth = $request->placeofbirth;
                $employee->Sex = $request->sex;
                $employee->CivilStatus = $request->civilstatus;
                $employee->Citizenship = $request->citizenship;
                $employee->TIN = $request->tin;
                $employee->GSISID = $request->gsisid;
                $employee->PagIbigID = $request->pagibigid;
                $employee->PhilHealth = $request->philhealth;
                $employee->SSS = $request->sss;
                $employee->Telephone = $request->telephone;
                $employee->Cellphone = $request->cellphone;
                $employee->EmailAddress = $request->emailaddress;
                $employee->AgencyNumber = $request->agencynumber;
                $employee->EmploymentStatus = $request->isactive;
                $employee->CurrentItem = $request->currentitem;
                $employee->Department = $request->department;
                $employee->Ext = $request->ext;
                $employee->Height = $request->height;
                $employee->Weight = $request->weight;
                $employee->BloodType = $request->bloodtype;
                $employee->RTelephone = $request->rtelephone;
                $employee->RHouseNo = $request->rhouseno;
                $employee->RHouseStreet = $request->rhousestreet;
                $employee->RSubDivision = $request->rsubdivision;
                $employee->PHouseNo = $request->phouseno;
                $employee->PHouseStreet = $request->phousestreet;
                $employee->PSubDivision = $request->psubdivision;
                $employee->RBarangay = $request->rbarangay;
                $employee->PBarangay = $request->pbarangay;
                $employee->RZip = $request->rzip;
                $employee->PZip = $request->pzip;
                $employee->Prefix = $request->prefix;
                $employee->Suffix = $request->suffix;
                $employee->LoginComputation = $request->logincomputation;
                if($request->hasFile('photo')){
                    $file = $request->file('photo');
                    $extension = $file->getClientOriginalExtension();
                    $filename = time().'.'.$extension;
                    $file->move('storage/uploads/employee/', $filename);
                    $employee->profilephoto = 'storage/uploads/employee/'.$filename;
                }
                $employee->update();
            }           
            $employee = Employee::find($id);
                return response()->json([
                       'status' => 200,
                       'response' =>  [
                           'data' => $employee,
                           'message' => 'Employee Updated!'
                       ]
                ]);
            //  }
      //   }


    }


    public function show($id){

        $employee = Employee::find($id);
        if($employee){
            return response()->json([
                'status' => 200,
                'data' =>  $employee
             ]);
        }else{
            return response()->json([
                'status' => 404,
                'errors' => [
                   'message' => 'Cant Find Employee']
            ]);
        }



    }

    public function destroy($id){

        $employee = Employee::find($id);
        if($employee){
            $employee->delete();
            return response()->json([
                'status' => 200,
                'message' =>  'Employee Deleted!'
             ]);
        }else{
            return response()->json([
                'status' => 404,
                'errors' => [
                   'message' => 'Cant Find Category Item!']
            ]);
        }
    
    
    
    }

}
