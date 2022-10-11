import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  title : string = "About Us";
  aboutImg : string = "https://media.cntraveller.com/photos/615b0b3c418472e411c3d2c3/16:9/w_2580,c_limit/Best%20Countries%20grid.jpg";
  aboutDescription : string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum natus mollitia animi aliquam quis! Molestias nisidoloremque, corrupti nam corporis autem sequi voluptatibus assumenda ea et est dolorum? Officiis quibusdam fugiatreprehenderit tempora aspernatur labore earum ratione magnam. Quis id quo dolor a saepe fugiat voluptatem abaccusantium, inventore quas libero culpa et dignissimos aperiam. Nesciunt consectetur illo voluptas! Ipsam cum,nesciunt provident esse id ab eaque nihil molestias nam amet possimus culpa, laudantium magni eveniet. Cum liberorepellendus mollitia iste vitae laborum. Id autem molestias possimus nihil porro voluptatem alias illo verovoluptatibus iste quam repellat mollitia veritatis unde sapiente commodi fugit itaque, est inventore laudantium?Asperiores necessitatibus sequi, voluptas ut eum nisi rem, quibusdam ad esse quam suscipit. Vel error veritatis ipsalibero reprehenderit harum, tempore inventore itaque. Corrupti dolore labore iste nihil quidem voluptates,voluptatum quos quas, facilis placeat id maiores accusantium facere? Facilis rerum, provident ea blanditiisvoluptate quia doloremque reprehenderit facere sequi doloribus numquam explicabo officiis neque eius sint dolorpariatur optio ab. Aliquid quasi asperiores ipsam aut. Error hic culpa quo atque repellendus, iure excepturivoluptatum exercitationem praesentium adipisci at omnis perferendis, similique consequatur eveniet assumenda id ametcum fugit aut illo. Quos, necessitatibus?";

  constructor() { }

  ngOnInit(): void {
  }

}
