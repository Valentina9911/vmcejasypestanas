
[
    {
        "nombre_negocio": "VM CEJAS Y PESTAÑAS",
        "ubicación": "La vega, cundinamarca",
        "servicios": ["Diseño de cejas", "extension de pestañas", "depilación de cejas" ],
        "horario": "lunes a viernes 9am a 6pm",    
        "telefono": "3208610876",
        "precio_promedio": "50.000"
    }
]

let coleccionServicios = [
  {  "servicio": "Diseño de cejas",
     "duracion": "45 minutos",
     "precio": "25.000",
     "disponibilidad": "lunes a viernes",
     "popularidad": "alta",
},
{
    "servicio": "Diseño temporal con henna",
     "duracion": "45 minutos",
     "precio": "25.000",
     "disponibilidad": "lunes a viernes",
     "popularidad": "media",
},
{
    "servicio": "Micropigmentación",
     "duracion": "2 horas",
     "precio": "200.000",
     "disponibilidad": "lunes a viernes",
     "popularidad": "baja",
},
{
    "servicio": "Lifting de pestañas",
     "duracion": "1 hora",
     "precio": "60.000",
     "disponibilidad": "lunes a viernes",
     "popularidad": "alta",
},
{
    "servicio": "pestañas pelo a pelo",
     "duracion": "3 horas",
     "precio": "90.000",
     "disponibilidad": "lunes a viernes",
     "popularidad": "alta",
},
{
    "servicio": "Pestañas volumen",
     "duracion": "3 horas",
     "precio": "110.000",
     "disponibilidad": "lunes a viernes",
     "popularidad": "media",
},
{
    "servicio": "Retoque pestañas",
     "duracion": "1 hora",
     "precio": "35.000",
     "disponibilidad": "lunes a viernes",
     "popularidad": "alta",
},
]

let searchbyId = (list,servicio) =>{
    for (let i = 0; i < list.length; i++) {
        if(list[i].servicio==servicio){
            return list [i]
        }
    }
    return null;
}

console.log(searchbyId(coleccionServicios,"Lifting de pestañas"));