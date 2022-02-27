import { Component, OnInit } from '@angular/core';
import { RouteStateService } from 'src/app/services/commons/route-state.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  page_title = ""

  carousel_list : {
    text: string,
    text2: string,
    image: string,
    alt: string,
    hasBtn: boolean,
    link: string,
    btnText: string
  }[] = []

  constructor(
    private routeState: RouteStateService
  ) { }

  ngOnInit(): void {

    this.def_caroussel();

  }

  defPageTitle() {
    this.page_title = this.routeState.getCurrent().title
  }

  def_caroussel () {
    this.carousel_list = [
      {
        alt : "",
        image : "etudiant-0.jpg",
        text : "Desormais ne manquez plus aucun cours",
        text2 : "",
        hasBtn: false,
        btnText : "",
        link : ""
      },
      {
        alt: "",
        image : "etudiant-00.jpg",
        text : "Participer a tous vos cours en direct avec CampusLife",
        text2 : "",
        hasBtn: false,
        btnText : "",
        link : ""
      },
      {
        alt: "",
        image : "etudiant-1.jpg",
        text : "Vous avez manqué un cours ?",
        text2 : "Pas de soucis, Revisionnez le !",
        hasBtn: true,
        btnText : "Nos Tarifs",
        link : ""
      }
    ]
  }

}
