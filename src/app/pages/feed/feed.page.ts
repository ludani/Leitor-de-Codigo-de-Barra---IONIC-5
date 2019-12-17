import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(public barcode:BarcodeScanner) { 


  }

  Encode(){
    var TextToEncode = window.prompt("Enter text to encode.");
    this.barcode.encode(this.barcode.Encode.TEXT_TYPE,
      TextToEncode).then((data)=>{
        alert(JSON.stringify(data));

    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  Scan(){
    this.barcode.scan().then((barcodeData)=>{
      alert(barcodeData.text);
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  ngOnInit() {
  }

}
