import { Component, OnInit } from '@angular/core';

interface IImageList {
  header: string;
  paragraph: string;
  class: string;
}

interface ISkillList {
  header: string;
  percentage: string;
  class: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public imageList: IImageList[];
  public skillList: ISkillList[];

  constructor() { }

  ngOnInit() {
    this.imageList = this.setImageList();
    this.skillList = this.loadSkills();
  }

  setImageList(): IImageList[] {
    const imageList: IImageList[] = [
      {
        header: 'Agile',
        paragraph: `I work well with and within teams and have found that
        the Agile framework helps to fascilitate transperency, and planning.`,
        class: 'image-agile'
      },
      {
        header: 'Responsive',
        paragraph: `My layouts will work on any device, big or small.`,
        class: 'image-responsive'
      },
      {
        header: 'Full-Stack',
        paragraph: `I provide full end to end solutions. I work on the client side, and on the back-end.`,
        class: 'image-full-stack'
      },
      {
        header: 'Dynamic',
        paragraph: `Websites don't have to be static, I love making pages come to life.`,
        class: 'image-dynamic'
      }
    ];

    return imageList;
  }

  loadSkills(): ISkillList[] {
    const skillList: ISkillList[] = [
      {
        header: 'Node',
        percentage: '85',
        class: 'about-me-progress-padding'
      },
      {
        header: 'Typescript',
        percentage: '73',
        class: 'about-me-progress-padding'
      },
      {
        header: 'HTML',
        percentage: '80',
        class: 'about-me-progress-padding'
      },
      {
        header: 'CSS',
        percentage: '65',
        class: 'about-me-progress-padding'
      },
      {
        header: 'Angular',
        percentage: '85',
        class: 'about-me-progress-padding'
      },
      {
        header: 'Bootstrap',
        percentage: '70',
        class: 'about-me-progress-padding'
      },
      {
        header: 'AWS',
        percentage: '60',
        class: 'about-me-progress-padding'
      },
    ];

    return skillList;
  }

}
