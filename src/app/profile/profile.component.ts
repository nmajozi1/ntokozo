import { Component, OnInit } from '@angular/core';

interface IProjects {
  name: string;
  description: string;
  class: string;
  company: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public projects: IProjects[];

  constructor() { }

  ngOnInit() {
    this.projects = this.getProjects();
  }

  getProjects(): IProjects[] {
    const projects = [
      {
        name: 'Full-House Management',
        description: '',
        class: 'image-block-fhrm',
        company: 'personal',
      },
      {
        name: 'Full-House Management',
        description: '',
        class: 'image-block-budget',
        company: 'personal',
      },
      {
        name: 'Full-House Management',
        description: '',
        class: 'image-block-bmg',
        company: 'apex',
      },
      {
        name: 'Full-House Management',
        description: '',
        class: 'image-block-ubu',
        company: 'sovtech',
      },
      {
        name: 'Full-House Management',
        description: '',
        class: 'image-block-mtn',
        company: 'apex',
      },
      {
        name: 'Full-House Management',
        description: '',
        class: 'image-block-covid',
        company: 'personal',
      },
      {
        name: 'Full-House Management',
        description: '',
        class: 'image-block-stanbic',
        company: 'wizzit',
      },
      {
        name: 'Full-House Management',
        description: '',
        class: 'image-block-mc',
        company: 'ntt',
      },
    ];

    return projects;
  }

  getProjectsByCompany(company?: string): void {
    if (company) {
      this.projects = this.getProjects().filter(project => project.company === company);
    } else {
      this.projects = this.getProjects();
    }
  }

}
