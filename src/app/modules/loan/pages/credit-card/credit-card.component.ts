import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api/api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  public enquiryForm : FormGroup;
  public submitted: boolean = false;
  public showDiv : boolean = true;
  public countryList: Array<any> = [
    {
      name: 'Andhra Pradesh (AP)',
      cities: [
        'Adilabad',
        'Anantapur',
        'Chittoor',
        'Kakinada',
        'Guntur',
        'Hyderabad',
        'Karimnagar',
        'Khammam',
        'Krishna',
        'Kurnool',
        'Mahbubnagar',
        'Medak',
        'Nalgonda',
        'Nizamabad',
        'Ongole',
        'Hyderabad',
        'Srikakulam',
        'Nellore',
        'Visakhapatnam',
        'Vizianagaram',
        'Warangal',
        'Eluru',
        'Kadapa',
      ],
    },
    { name: 'Arunachal Pradesh (AR)', cities: [
			'Anjaw',
			'Changlang',
			'East Siang',
			'Kurung Kumey',
			'Lohit',
			'Lower Dibang Valley',
			'Lower Subansiri',
			'Papum Pare',
			'Tawang',
			'Tirap',
			'Dibang Valley',
			'Upper Siang',
			'Upper Subansiri',
			'West Kameng',
			'West Siang',
	] },
    { name: 'Assam (AS)', cities: [
			'Baksa',
			'Barpeta',
			'Bongaigaon',
			'Cachar',
			'Chirang',
			'Darrang',
			'Dhemaji',
			'Dima Hasao',
			'Dhubri',
			'Dibrugarh',
			'Goalpara',
			'Golaghat',
			'Hailakandi',
			'Jorhat',
			'Kamrup',
			'Kamrup Metropolitan',
			'Karbi Anglong',
			'Karimganj',
			'Kokrajhar',
			'Lakhimpur',
			'Marigaon',
			'Nagaon',
			'Nalbari',
			'Sibsagar',
			'Sonitpur',
			'Tinsukia',
			'Udalguri',
	] },
    { name: 'Bihar (BR)', cities: [
			'Araria',
			'Arwal',
			'Aurangabad',
			'Banka',
			'Begusarai',
			'Bhagalpur',
			'Bhojpur',
			'Buxar',
			'Darbhanga',
			'East Champaran',
			'Gaya',
			'Gopalganj',
			'Jamui',
			'Jehanabad',
			'Kaimur',
			'Katihar',
			'Khagaria',
			'Kishanganj',
			'Lakhisarai',
			'Madhepura',
			'Madhubani',
			'Munger',
			'Muzaffarpur',
			'Nalanda',
			'Nawada',
			'Patna',
			'Purnia',
			'Rohtas',
			'Saharsa',
			'Samastipur',
			'Saran',
			'Sheikhpura',
			'Sheohar',
			'Sitamarhi',
			'Siwan',
			'Supaul',
			'Vaishali',
			'West Champaran',
			'Chandigarh',
	] },
    { name: 'Chhattisgarh (CG)', cities: [
			'Bastar',
			'Bijapur',
			'Bilaspur',
			'Dantewada',
			'Dhamtari',
			'Durg',
			'Jashpur',
			'Janjgir-Champa',
			'Korba',
			'Koriya',
			'Kanker',
			'Kabirdham (Kawardha)',
			'Mahasamund',
			'Narayanpur',
			'Raigarh',
			'Rajnandgaon',
			'Raipur',
			'Surguja',
	] },
    { name: 'Dadra and Nagar Haveli (DN)', cities:  [
			'Dadra and Nagar Haveli'
]},
    { name: 'Daman and Diu (DD)', cities:  [
			'Daman',
			'Diu',
]},
    { name: 'Delhi (DL)', cities: [
			'Central Delhi',
			'East Delhi',
			'New Delhi',
			'North Delhi',
			'North East Delhi',
			'North West Delhi',
			'South Delhi',
			'South West Delhi',
			'West Delhi',
] },
    { name: 'Goa (GA)', cities: [
			'North Goa',
			'South Goa'
] },
    { name: 'Gujarat (GJ)', cities: [
			'Ahmedabad',
			'Amreli district',
			'Anand',
			'Banaskantha',
			'Bharuch',
			'Bhavnagar',
			'Dahod',
			'The Dangs',
			'Gandhinagar',
			'Jamnagar',
			'Junagadh',
			'Kutch',
			'Kheda',
			'Mehsana',
			'Narmada',
			'Navsari',
			'Patan',
			'Panchmahal',
			'Porbandar',
			'Rajkot',
			'Sabarkantha',
			'Surendranagar',
			'Surat',
			'Vyara',
			'Vadodara',
			'Valsad',
] },
    { name: 'Haryana (HR)', cities: [
			'Ambala',
			'Bhiwani',
			'Faridabad',
			'Fatehabad',
			'Gurgaon',
			'Hissar',
			'Jhajjar',
			'Jind',
			'Karnal',
			'Kaithal',
			'Kurukshetra',
			'Mahendragarh',
			'Mewat',
			'Palwal',
			'Panchkula',
			'Panipat',
			'Rewari',
			'Rohtak',
			'Sirsa',
			'Sonipat',
			'Yamuna Nagar',
	] },
    { name: 'Himachal Pradesh (HP)', cities: [
			'Bilaspur',
			'Chamba',
			'Hamirpur',
			'Kangra',
			'Kinnaur',
			'Kullu',
			'Lahaul and Spiti',
			'Mandi',
			'Shimla',
			'Sirmaur',
			'Solan',
			'Una',
	] },
    { name: 'Jammu and Kashmir (JK)', cities: [
			'Anantnag',
			'Badgam',
			'Bandipora',
			'Baramulla',
			'Doda',
			'Ganderbal',
			'Jammu',
			'Kargil',
			'Kathua',
			'Kishtwar',
			'Kupwara',
			'Kulgam',
			'Leh',
			'Poonch',
			'Pulwama',
			'Rajauri',
			'Ramban',
			'Reasi',
			'Samba',
			'Shopian',
			'Srinagar',
			'Udhampur',
	] },
    { name: 'Jharkhand (JH)', cities: [
			'Bokaro',
			'Chatra',
			'Deoghar',
			'Dhanbad',
			'Dumka',
			'East Singhbhum',
			'Garhwa',
			'Giridih',
			'Godda',
			'Gumla',
			'Hazaribag',
			'Jamtara',
			'Khunti',
			'Koderma',
			'Latehar',
			'Lohardaga',
			'Pakur',
			'Palamu',
			'Ramgarh',
			'Ranchi',
			'Sahibganj',
			'Seraikela Kharsawan',
			'Simdega',
			'West Singhbhum',
	] },
    { name: 'Karnataka (KA)', cities: [
			'Bagalkot',
			'Bangalore Rural',
			'Bangalore Urban',
			'Belgaum',
			'Bellary',
			'Bidar',
			'Bijapur',
			'Chamarajnagar',
			'Chikkamagaluru',
			'Chikkaballapur',
			'Chitradurga',
			'Davanagere',
			'Dharwad',
			'Dakshina Kannada',
			'Gadag',
			'Gulbarga',
			'Hassan',
			'Haveri district',
			'Kodagu',
			'Kolar',
			'Koppal',
			'Mandya',
			'Mysore',
			'Raichur',
			'Shimoga',
			'Tumkur',
			'Udupi',
			'Uttara Kannada',
			'Ramanagara',
			'Yadgir',
	] },
    { name: 'Kerala (KL)', cities: [
			'Alappuzha',
			'Ernakulam',
			'Idukki',
			'Kannur',
			'Kasaragod',
			'Kollam',
			'Kottayam',
			'Kozhikode',
			'Malappuram',
			'Palakkad',
			'Pathanamthitta',
			'Thrissur',
			'Thiruvananthapuram',
			'Wayanad',
	] },
    { name: 'Madhya Pradesh (MP)', cities: [
			'Alirajpur',
			'Anuppur',
			'Ashok Nagar',
			'Balaghat',
			'Barwani',
			'Betul',
			'Bhind',
			'Bhopal',
			'Burhanpur',
			'Chhatarpur',
			'Chhindwara',
			'Damoh',
			'Datia',
			'Dewas',
			'Dhar',
			'Dindori',
			'Guna',
			'Gwalior',
			'Harda',
			'Hoshangabad',
			'Indore',
			'Jabalpur',
			'Jhabua',
			'Katni',
			'Khandwa (East Nimar)',
			'Khargone (West Nimar)',
			'Mandla',
			'Mandsaur',
			'Morena',
			'Narsinghpur',
			'Neemuch',
			'Panna',
			'Rewa',
			'Rajgarh',
			'Ratlam',
			'Raisen',
			'Sagar',
			'Satna',
			'Sehore',
			'Seoni',
			'Shahdol',
			'Shajapur',
			'Sheopur',
			'Shivpuri',
			'Sidhi',
			'Singrauli',
			'Tikamgarh',
			'Ujjain',
			'Umaria',
			'Vidisha',
	] },
    { name: 'Maharashtra (MH)', cities: [
			'Ahmednagar',
			'Akola',
			'Amravati',
			'Aurangabad',
			'Bhandara',
			'Beed',
			'Buldhana',
			'Chandrapur',
			'Dhule',
			'Gadchiroli',
			'Gondia',
			'Hingoli',
			'Jalgaon',
			'Jalna',
			'Kolhapur',
			'Latur',
			'Mumbai City',
			'Mumbai suburban',
			'Nandurbar',
			'Nanded',
			'Nagpur',
			'Nashik',
			'Osmanabad',
			'Parbhani',
			'Pune',
			'Raigad',
			'Ratnagiri',
			'Sindhudurg',
			'Sangli',
			'Solapur',
			'Satara',
			'Thane',
			'Wardha',
			'Washim',
			'Yavatmal',
		] },
    { name: 'Manipur (MN)', cities: [
			'Bishnupur',
			'Churachandpur',
			'Chandel',
			'Imphal East',
			'Senapati',
			'Tamenglong',
			'Thoubal',
			'Ukhrul',
			'Imphal West',
	] },
    { name: 'Meghalaya (ML)', cities: [
			'East Garo Hills',
			'East Khasi Hills',
			'Jaintia Hills',
			'Ri Bhoi',
			'South Garo Hills',
			'West Garo Hills',
			'West Khasi Hills',
	] },
    { name: 'Mizoram (MZ)', cities: [
			'Aizawl',
			'Champhai',
			'Kolasib',
			'Lawngtlai',
			'Lunglei',
			'Mamit',
			'Saiha',
			'Serchhip',
	] },
    { name: 'Nagaland (NL)', cities: [
			'Dimapur',
			'Kohima',
			'Mokokchung',
			'Mon',
			'Phek',
			'Tuensang',
			'Wokha',
			'Zunheboto',
	] },
    { name: 'Odisha (OD)', cities: [
			'Angul',
			'Boudh (Bauda)',
			'Bhadrak',
			'Balangir',
			'Bargarh (Baragarh)',
			'Balasore',
			'Cuttack',
			'Debagarh (Deogarh)',
			'Dhenkanal',
			'Ganjam',
			'Gajapati',
			'Jharsuguda',
			'Jajpur',
			'Jagatsinghpur',
			'Khordha',
			'Kendujhar (Keonjhar)',
			'Kalahandi',
			'Kandhamal',
			'Koraput',
			'Kendrapara',
			'Malkangiri',
			'Mayurbhanj',
			'Nabarangpur',
			'Nuapada',
			'Nayagarh',
			'Puri',
			'Rayagada',
			'Sambalpur',
			'Subarnapur (Sonepur)',
			'Sundergarh',
		] },
    { name: 'Pondicherry (Puducherry) (PY)', cities: [
			'Karaikal',
			'Mahe',
			'Pondicherry',
			'Yanam',
] },
    { name: 'Punjab (PB)', cities: [
			'Amritsar',
			'Barnala',
			'Bathinda',
			'Firozpur',
			'Faridkot',
			'Fatehgarh Sahib',
			'Fazilka',
			'Gurdaspur',
			'Hoshiarpur',
			'Jalandhar',
			'Kapurthala',
			'Ludhiana',
			'Mansa',
			'Moga',
			'Sri Muktsar Sahib',
			'Pathankot',
			'Patiala',
			'Rupnagar',
			'Ajitgarh (Mohali)',
			'Sangrur',
			'Nawanshahr',
			'Tarn Taran',
	] },
    { name: 'Rajasthan (RJ)', cities: [
			'Ajmer',
			'Alwar',
			'Bikaner',
			'Barmer',
			'Banswara',
			'Bharatpur',
			'Baran',
			'Bundi',
			'Bhilwara',
			'Churu',
			'Chittorgarh',
			'Dausa',
			'Dholpur',
			'Dungapur',
			'Ganganagar',
			'Hanumangarh',
			'Jhunjhunu',
			'Jalore',
			'Jodhpur',
			'Jaipur',
			'Jaisalmer',
			'Jhalawar',
			'Karauli',
			'Kota',
			'Nagaur',
			'Pali',
			'Pratapgarh',
			'Rajsamand',
			'Sikar',
			'Sawai Madhopur',
			'Sirohi',
			'Tonk',
			'Udaipur',
	] },
    { name: 'Sikkim (SK)', cities: [
			'East Sikkim',
			'North Sikkim',
			'South Sikkim',
			'West Sikkim',
	] },
    { name: 'Tamil Nadu (TN)', cities: [
			'Ariyalur',
			'Chennai',
			'Coimbatore',
			'Cuddalore',
			'Dharmapuri',
			'Dindigul',
			'Erode',
			'Kanchipuram',
			'Kanyakumari',
			'Karur',
			'Madurai',
			'Nagapattinam',
			'Nilgiris',
			'Namakkal',
			'Perambalur',
			'Pudukkottai',
			'Ramanathapuram',
			'Salem',
			'Sivaganga',
			'Tirupur',
			'Tiruchirappalli',
			'Theni',
			'Tirunelveli',
			'Thanjavur',
			'Thoothukudi',
			'Tiruvallur',
			'Tiruvarur',
			'Tiruvannamalai',
			'Vellore',
			'Viluppuram',
			'Virudhunagar',
	] },
    { name: 'Tripura (TR)', cities: [
			'Dhalai',
			'North Tripura',
			'South Tripura',
			'Khowai',
			'West Tripura',
	] },
    { name: 'Uttar Pradesh (UP)', cities: [
			'Agra',
			'Allahabad',
			'Aligarh',
			'Ambedkar Nagar',
			'Auraiya',
			'Azamgarh',
			'Barabanki',
			'Budaun',
			'Bagpat',
			'Bahraich',
			'Bijnor',
			'Ballia',
			'Banda',
			'Balrampur',
			'Bareilly',
			'Basti',
			'Bulandshahr',
			'Chandauli',
			'Chhatrapati Shahuji Maharaj Nagar',
			'Chitrakoot',
			'Deoria',
			'Etah',
			'Kanshi Ram Nagar',
			'Etawah',
			'Firozabad',
			'Farrukhabad',
			'Fatehpur',
			'Faizabad',
			'Gautam Buddh Nagar',
			'Gonda',
			'Ghazipur',
			'Gorakhpur',
			'Ghaziabad',
			'Hamirpur',
			'Hardoi',
			'Mahamaya Nagar',
			'Jhansi',
			'Jalaun',
			'Jyotiba Phule Nagar',
			'Jaunpur district',
			'Ramabai Nagar (Kanpur Dehat)',
			'Kannauj',
			'Kanpur',
			'Kaushambi',
			'Kushinagar',
			'Lalitpur',
			'Lakhimpur Kheri',
			'Lucknow',
			'Mau',
			'Meerut',
			'Maharajganj',
			'Mahoba',
			'Mirzapur',
			'Moradabad',
			'Mainpuri',
			'Mathura',
			'Muzaffarnagar',
			'Panchsheel Nagar district (Hapur)',
			'Pilibhit',
			'Shamli',
			'Pratapgarh',
			'Rampur',
			'Raebareli',
			'Saharanpur',
			'Sitapur',
			'Shahjahanpur',
			'Sant Kabir Nagar',
			'Siddharthnagar',
			'Sonbhadra',
			'Sant Ravidas Nagar',
			'Sultanpur',
			'Shravasti',
			'Unnao',
			'Varanasi',
	] },
    { name: 'Uttarakhand (UK)', cities: [
			'Almora',
			'Bageshwar',
			'Chamoli',
			'Champawat',
			'Dehradun',
			'Haridwar',
			'Nainital',
			'Pauri Garhwal',
			'Pithoragarh',
			'Rudraprayag',
			'Tehri Garhwal',
			'Udham Singh Nagar',
			'Uttarkashi',
	] },
    { name: 'West Bengal (WB)', cities: [
			'Birbhum',
			'Bankura',
			'Bardhaman',
			'Darjeeling',
			'Dakshin Dinajpur',
			'Hooghly',
			'Howrah',
			'Jalpaiguri',
			'Cooch Behar',
			'Kolkata',
			'Maldah',
			'Paschim Medinipur',
			'Purba Medinipur',
			'Murshidabad',
			'Nadia',
			'North 24 Parganas',
			'South 24 Parganas',
			'Purulia',
			'Uttar Dinajpur',
	] },
  ];
  public cities: Array<any>;

  constructor( private formBuilder: FormBuilder, private apiservice:ApiService,) { 
    this.enquiryForm = this.formBuilder.group({
      name: ["", Validators.required ],
      company_name: ["", Validators.required ],
      email: ["", [Validators.required, Validators.email]],
      employment_type: ["", Validators.required ],
      gender: ["", Validators.required ],
      selected_bank: ["", Validators.required ],
      phone: [null, [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      maxLimit: ["", Validators.required],
      pan: [null, [Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      ext_cc: [""],
      ext_cc_bank: ["", Validators.required],
      property_state: ["", Validators.required ],
      property_city: ["", Validators.required ],
    })
  }

  ngOnInit() {
  }

  get f() {
    return this.enquiryForm.controls;
  }

  public sendCreditCard(){
    console.log(this.enquiryForm.value);
    this.submitted = true;
    if (this.enquiryForm.invalid) {
     return;
   };
   this.apiservice.post('/sendFormData', this.enquiryForm.value).subscribe(
    (res)=> {
      console.log('Res', res);
      Swal.fire('Thank you, we have received your info', 'A customer service representative will be in touch within 24 hours', 'success')
    },
    (error)=> {
      console.log('error', error);
      
    }
  )
  }

  public changeCountry(count) {
    this.cities = this.countryList.find((con) => con.name == count).cities;
  }

  public radioButtonChanged($event){
   this.showDiv =  $event.target.value == 'yes' ? true : false;
 }

}
