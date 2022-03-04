import React from 'react';

import { OverlayTrigger,Tooltip } from 'react-bootstrap';

import { ReactComponent as IconInicio } from '../images/iconos/inicio.svg';
import { ReactComponent as IconRegalos } from '../images/iconos/regalos.svg';


import { ReactComponent as IconAdminPerfiles } from '../images/iconos/administrarperfiles.svg';
import { ReactComponent as IconListaProducto } from '../images/iconos/listaproductos.svg';

import { ReactComponent as IconListaPlantilla } from '../images/iconos/ListaPlantilla.svg';
import { ReactComponent as IconListaCampana } from '../images/iconos/ListaCampana.svg';
import { ReactComponent as IconListaMarca } from '../images/iconos/ListaMarcas.svg';
import { ReactComponent as IconListaCategoria } from '../images/iconos/ListaCategoria.svg';
import { ReactComponent as IconSalir } from '../images/iconos/CerrarSesion.svg';

const MenuSuperAdmin = () =>{
    


    return(    
        <>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Inicio</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/home" className="nav_link"> <IconInicio style={{width:26,height:"100%"}}/></a>
                </span>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Pedidos</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/lista-pedidos/" className="nav_link"> <IconRegalos style={{width:26,height:"100%"}}/></a> 
                </span>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Productos</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/lista-Productos/" className="nav_link"><IconListaProducto style={{width:26,height:"100%"}}/></a> 
                </span>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Perfiles</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/administrarperfiles/" className="nav_link"><IconAdminPerfiles style={{width:26,height:"100%"}}/></a> 
                </span>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Plantillas</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/lista-Plantillas/" className="nav_link"><IconListaPlantilla style={{width:26,height:"100%"}}/></a> 
                </span>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Marcas</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/lista-Marcas/" className="nav_link"><IconListaMarca style={{width:26,height:"100%"}}/></a> 
                </span>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Categorias</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/lista-Categorias/" className="nav_link"><IconListaCategoria style={{width:26,height:"100%"}}/></a> 
                </span>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Campañas</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/lista-Campañas/" className="nav_link"><IconListaCampana style={{width:26,height:"100%"}}/></a> 
                </span>
            </OverlayTrigger>
            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Salir</Tooltip>}>
                <span className="d-inline-block">
                    <a href="/superadmin/salir/" className="nav_link"><IconSalir style={{width:26,height:"100%"}}/></a> 
                </span>
            </OverlayTrigger>
            
            
            
            
            
            
            
        
        </>
    )

}
export default MenuSuperAdmin;