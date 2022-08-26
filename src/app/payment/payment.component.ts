import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  numOfProducts=0;
  cities: Array<string>

  constructor() { 
    // this.cities[0]=("ירושלים")
    // this.cities[1]=("רמת גן")
    // this.cities[2]=("בני ברק")
    // this.cities[3]=("פתח תקווה")
    // this.cities[4]=("רחובות")
    // this.cities[5]=("ירוחם")

  }

  ngOnInit() {
  }
// Example starter JavaScript for disabling form submissions if there are invalid fields
function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}

}
