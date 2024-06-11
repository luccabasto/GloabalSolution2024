import { ReactNode } from "react";
import { IconType } from "react-icons";

{/**Em certos momentos pode ocorrer um erro que faz com que o icon seja
    interpretado como número em vez de um componente React válido, isso pode ocorrer quando o valor da propriedade
    icon não é passado conforme o esperado. 
    
    A maneira que descobri para evitar/consetar esse erro foi o IconType*/}

export interface Link{
    name?: string;
    RM?: string;
    link:string;
    icon?:IconType;

}

export interface ItemsTypes {
    links: Link[];
    title?: string;
}