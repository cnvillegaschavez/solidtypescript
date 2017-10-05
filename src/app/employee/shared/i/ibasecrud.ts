//Codigo que no cumple el principio de segregación de interfaz
export interface  IBasecrud {
    create(oObject: any);    
    update(oObject: any);
    delete(oObject: any);
    searchWithPagination(criteriaPagination: any);
}

export class  Employee  implements  IBasecrud {
   
  	create(oObject: any){
    	
    }
    
    update(oObject: any){

    }

    delete(oObject: any){

    }

    searchWithPagination(criteriaPagination: any){

    }
}

export class  EmployeeAddress  implements  IBasecrud {
    
    create(oObject: any){

    }
    
    update(oObject: any){

    }

    delete(oObject: any){

    }

    searchWithPagination(criteriaPagination: any){

    }
}