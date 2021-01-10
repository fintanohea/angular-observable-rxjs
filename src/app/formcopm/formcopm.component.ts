import { Component, OnInit } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-formcopm',
  templateUrl: './formcopm.component.html',
  styleUrls: ['./formcopm.component.css']
})
export class FormcopmComponent implements OnInit {
  inputChangeLog: string[] = []
  inputForm = fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: fb.group({
      street: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zip: ["", Validators.required],
    })
  })

  constructor(fb: FormBuilder) { }

  ngOnInit(): void {
    this.logInputChange()
  }

  fullUpdate() {
    let contact = {
      firstName: "Rahul",
      lastName: "Dravid",
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        state: "dasdasd",
        zip: "wer4232"
      }
    }
 
    this.inputForm.setValue(contact, { emitEvent: false })
  }

  partialUpdate() {
    this.inputForm.patchValue({firstName: 'Partial'});
  }

  reset() {
    this.inputForm.reset()
  }

  logInputChange() {
    const nameControl = this.inputForm.get('firstName')
    
    nameControl.valueChanges.forEach(
      (value: string) => {
        this.inputChangeLog.push(value)
        console.log(this.inputChangeLog)
      }
    )

    this.inputForm.valueChanges.subscribe( x => {
      console.log('form value changed')
      console.log(x)
    })
  }


}
