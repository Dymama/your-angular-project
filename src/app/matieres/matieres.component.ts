import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {

  /*matieres = [
    {
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://i.ytimg.com/vi/DveMfrxxvm0/hqdefault.jpg',
      'dateAjout':Date()
    }
    ,
    {
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://www.windows8facile.fr/wp-content/uploads/2017/10/oracle-logo.jpg',
      'dateAjout':Date()
    },
    {
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://appdesign.dev/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg',
      'dateAjout':Date()
    },
    {
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg',
      'dateAjout':Date()
    },
    {
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg',
      'dateAjout':Date()
    },{
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg',
      'dateAjout':Date()
    },
    {
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg',
      'dateAjout':Date()
    },
    {
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg',
      'dateAjout':Date()
    },
    {
      'titre':'ORACLE',
      'enseignants': {
        'nom':'MOPOLO',
        'prenom':'GABRIEL',
        'photo':'https://i.vimeocdn.com/video/602320807_1280x720.jpg'
      },
      'image':'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg',
      'dateAjout':Date()
    }
  ]
  */
  matieres = [

    {
      id:1,
      titre:'Angular et Web Componenent',
      enseignant_nom:'Michel BUFFA',
      enseignant_photo:'https://i1.rgstatic.net/ii/profile.image/712495153029121-1546883490651_Q512/Michel-Buffa.jpg',
      image:'https://miro.medium.com/max/1100/1*dYhDHdCt0lhVRdj0IjrI7A.png',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
      "
      },
    {
    id:2,
    titre:'Data Science avec R',
    enseignant_nom:'Alison Témin',
    enseignant_photo:'https://pbs.twimg.com/profile_images/958400798261760000/rMetRaSU.jpg',
    image:'https://nareshit.com/wp-content/uploads/2018/09/Data-science-with-r-language-nareshit.jpg',
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
      "
  },
    {
    id:3,
    titre:'BIG DATA SQL',
    enseignant_nom:'Serge Miranda',
    enseignant_photo:'https://i0.wp.com/www.midi-madagasikara.mg/wp-content/uploads/2017/09/Miranda_.gif?fit=490%2C569',
    image:'https://bigdatapath.files.wordpress.com/2018/04/big_data_sql.jpg',
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
      "
    },
     {
      id:4,
      titre:'NFC',
      enseignant_nom:'Amoss Edouard',
      enseignant_photo:'https://0.academia-photos.com/2684716/858039/1070509/s200_amosse.edouard.jpg',
      image:'https://image.coolblue.be/840x473/content/4de022052a84cdf855ab48790c3d617c',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
      "
      },
      {
        id:5,
        titre:'Oracle DBA',
        enseignant_nom:'MOPOLO',
        enseignant_photo:'http://www.esatic.ci/images/personnel/[Esatic_Photo]_27face628b14254406938ec1437a6c50.jpg',
        image:'https://www.windows8facile.fr/wp-content/uploads/2017/10/oracle-logo.jpg',
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
      "
        },
        {
          id:6,
          titre:'Hadoop Map Reduce',
          enseignant_nom:'Sergieo Simonian',
          enseignant_photo:'https://www.superprof.lu/images/annonces/professeur-home-architecte-big-data-experimente-donne-cours-administration-cluster-hadoop-paris.jpg',
          image:'https://miro.medium.com/max/1000/1*U95c0vlgdmnUOxt7in3BRQ.png',
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
      "
          },
    /*,'JEE','NFC','Grails','Angular','Devops']
    },*/
  ];
  loading:boolean=true;

  constructor() { }
 

  ngOnInit(): void {
    this.loading=false
  

    }
  }