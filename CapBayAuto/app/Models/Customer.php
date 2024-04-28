<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customer';
  protected $primaryKey = 'id';
   protected $fillable = [
        'firstName',
        'lastName',
        'telno',
        'emailAdd',
        'branch',
        'date_and_time',
        'purchase_status',
        'downpaymentAmount',
        'modelPrice',
        'loanAmount',
        'discountElligible'

    ];
    use HasFactory;
}
