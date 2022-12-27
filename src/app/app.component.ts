import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jeremiah Malicdem';

  workExperiences = [
    {
      title: 'Frontend Angular Developer',
      company: 'Offshorly',
      date: 'January 2023 - Present',
      stack: [
        'Angular'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Firstmac Ltd.',
      date: 'May 2022 - January 2023',
      stack: [
        'Angular',
        'Ionic',
        'NodeJs',
        'AWS',
        'MongoDb',
        "PostgreSql"
      ]
    },
    {
      company: 'Senior Software Engineer',
      title: 'HCL Technologies Ltd.',
      date: 'July 2021 - May 2022',
      stack: [
        'React',
        'AWS',
        'GrapesJs',
        'Stencil'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'August 99, Inc.',
      date: 'November 2020 - July 2021',
      stack: [
        'Angular',
        'Express',
        'AWS',
        'Kubernetes',
        'Linux'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'FFUF Manila Inc.',
      date: 'January 2019 - November 2020',
      stack: [
        'Angular',
        'PHP',
        'Azure',
        'Symfony'
      ]
    }
  ]
}
