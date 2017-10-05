export interface  IBasecud {
    create(oObject: any);    
    update(oObject: any);
    delete(oObject: any);
}

export interface  IBasesearch {
   searchWithPagination(criteriaPagination: any);
}

export class  Employee  implements  IBasecud, IBasesearch {
   
  	create(oObject: any){
    	
    }
    
    update(oObject: any){

    }

    delete(oObject: any){

    }

    searchWithPagination(criteriaPagination: any){

    }
}

export class  EmployeeAddress  implements  IBasecud {
    
    create(oObject: any){

    }
    
    update(oObject: any){

    }

    delete(oObject: any){

    }
}