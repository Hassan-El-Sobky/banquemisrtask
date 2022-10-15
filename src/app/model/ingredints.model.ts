



export interface Icomon{
    label:string,
    quantity:number,
    unit:string
}


export interface Iingredints{
  calories:number,
  totalWeight:number,
  totalNutrients:{
    ENERC_KCAL:Icomon,
    FAT:Icomon,
    FASAT:Icomon,
    P:Icomon,
    FE:Icomon,
    CA:Icomon,
    CHOCDF:Icomon,
    SUGAR:Icomon,
    NA:Icomon,
    ZN:Icomon,

  },
  ingredients:[{
    text:string,
    parsed:[
        {
            quantity:number,
            measure:string,
            foodMatch:string,
            weight:number,
            nutrients:{
                VITD:Icomon,
                ENERC_KCAL:Icomon,
                VITC:Icomon,
                PROCNT:Icomon,
                CHOCDF:Icomon
            }
        }
    ]
  }
]

}

export interface Idata {
    ingr:string[]
}

