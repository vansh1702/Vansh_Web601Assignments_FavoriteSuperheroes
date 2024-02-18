import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: ' Quantum Shadow ',
        description: 'A physicist turned superhero who manipulates shadows.',
        creator: 'Alex Mercer',
        imgURL: 'assets/images/img1.jpg',
        type: ' Comic Book Character',
        tags: [' Physics', 'Stealth', ' Intelligence'],
      },
      {
        id: 2,
        title: 'Celestial Guardian',
        description: 'Born from a cosmic event, this hero wields the power of starlight to protect Earth from interstellar threats.',
        creator: 'Jordan Lee',
        imgURL: 'assets/images/img2.jpg',
        type: 'Graphic Novel Hero',
        tags: ['Cosmic Powers', 'Brilliance', ' Heroism'],
      },
      {
        id: 3,
        title: 'Neon Blitz',
      description: 'An urban vigilante with the ability to control.',
      creator: 'Casey Rivera',
      imgURL: 'assets/images/img3.jpg ',
      type: ' Animated Series Character',
      tags: ['Electricity', 'Vigilante', ' Dazzling'],
      },
      {
        id: 4,
        title: 'Gravity Warden',
        description: 'A former astronaut who gained the ability to control gravity.',
        creator: 'Ella Thompson',
        imgURL: 'assets/images/img4.webp',
        type: 'Comic Book Character',
        tags: ['Gravity Control', ' Space', 'Protection'],
      },
      {
        id: 5,
        title: 'Mystic Blaze',
        description: 'A mystic warrior who wields fire magic with precision, capable of casting illusions and summoning fiery creatures.',
        creator: 'Raj Patel',
        imgURL: 'assets/images/img5.jpg',
        type: ' Graphic Novel Hero',
        tags: ['Fire Magic', 'Summoning', 'Warrior'],
      },
      {
        id: 6,
        title: 'Cyber Sentinel',
        description: 'A tech genius who wears an advanced suit of armor, fighting crime with gadgets, artificial intelligence, and cybernetic enhancements.',
        creator: 'Sofia Nguyen',
        imgURL: 'assets/images/img6.jpg',
        type: 'Animated Series Character',
        tags: ['Technology', 'Armor', ' Cybernetics'],
      },
     
    ];
  }
}