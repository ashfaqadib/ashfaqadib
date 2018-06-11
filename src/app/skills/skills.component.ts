import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      "sector":"Programming Languages","skill":[
        {
        "name":"C#",
        "val":95
        },
        {
        "name":"C/C++",
        "val":95
        },
        {
        "name":"SQL",
        "val":90
        },
        {
        "name":"Python",
        "val":85
        },
        {
        "name":"Java",
        "val":80
        },
        {
          "name":"Assembly",
          "val":85
        }
      ]
    },
    {
      "sector":"Web Development","skill":[
        {
        "name":"ASP.NET (MVC/Web API)",
        "val":95
        },
        {
        "name":"Java Script/jQuery",
        "val":95
        },
        {
        "name":"Angular 5/6",
        "val":90
        },
        {
        "name":"PHP",
        "val":80
        }
      ]
    },    
    {
      "sector":"Development tools/practices","skill":[
        {
        "name":"Entity Framework",
        "val":95
        },
        {
        "name":"LINQ/LINQ Lambda",
        "val":90
        },
        {
        "name":"SOLID Principles",
        "val":80
        },
        {
        "name":"Design Patterns (Repository, Factory Method, Dependency Injection)",
        "val":85
        }
      ]
    },    
    {
      "sector":"Others","skill":[
        {
        "name":"MS Word/Excel/Powerpoint",
        "val":90
        },
        {
        "name":"Adobe Photoshop/After Effects",
        "val":85
        },
        {
        "name":"Data Mining",
        "val":80
        },
        {
        "name":"Communication/Presentation",
        "val":100
        },
        {
        "name":"Adaptability",
        "val":100
        },
        {
        "name":"Problem Solving",
        "val":90
        },
        {
        "name":"Typing",
        "val":100
        },
        {
        "name":"Internet Research",
        "val":95
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
