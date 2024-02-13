import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList:ContentList;
  constructor(){
    this.contentList = new ContentList();

    this.contentList.addContent({
      id: 1,
      title: ' Quantum Shadow ',
      description: 'A physicist turned superhero who manipulates shadows.',
      creator: 'Alex Mercer',
      imgURL: 'assets/images/img1.jpg',
      type: ' Comic Book Character',
      tags: [' Physics', 'Stealth', ' Intelligence'],
    }),

    this.contentList.addContent({
      id: 2,
      title: 'Celestial Guardian',
      description: 'Born from a cosmic event, this hero wields the power of starlight to protect Earth from interstellar threats.',
      creator: 'Jordan Lee',
      imgURL: 'assets/images/img2.jpg',
      type: 'Graphic Novel Hero',
      tags: ['Cosmic Powers', 'Brilliance', ' Heroism'],
    }),

    this.contentList.addContent({
      id: 3,
      title: 'Neon Blitz',
      description: 'An urban vigilante with the ability to control.',
      creator: 'Casey Rivera',
      imgURL: 'assets/images/img3.jpg ',
      type: ' Animated Series Character',
      tags: ['Electricity', 'Vigilante', ' Dazzling'],
    },);
  }
}