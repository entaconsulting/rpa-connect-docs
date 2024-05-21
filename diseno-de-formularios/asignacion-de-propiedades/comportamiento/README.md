# Comportamiento

Las propiedades agrupadas en la sección _**Behavior**_ te permitirán establecer configuraciones más avanzadas que regulen el comportamiento del campo. Las opciones que encontrarás serán:

<table><thead><tr><th width="128">Propiedad</th><th>Función</th></tr></thead><tbody><tr><td><strong>Readonly</strong></td><td>Puede establecerse como <em><strong>True</strong></em> para establecer datos precargados que el usuario final no pueda modificar.</td></tr><tr><td><strong>Visibility</strong></td><td>Utilizando el valor <strong>False</strong>, permite ocultar ciertos campos.</td></tr></tbody></table>

Las propiedades de tipo _**readonly**_ y _**visibility**_ también pueden configurarse a partir de una expresión que le asigne los valores _**true**_ o _**false**_ en función de los datos que hayan sido ingresados en otro campo del formulario. Para ello, es necesario acceder al menú desplegable y seleccionar la opción _**Edit expression**_, debajo de las opciones _**true**_ y _**false**_.

El editor te permitirá añadir una expresión la cual, en caso de çumplirse, devolverá valor _**true**_ para dicha propiedad, y en caso contrario, devolverá _**false**_.

Los comportamientos de _**readonly**_ y _**visibilty**_ suelen acompañar la configuración de condiciones más avanzadas, a través de las cuales puede determinarse que ciertos campos sean interdependientes y se habiliten o deshabiliten en función de otros datos. Veámoslos a continuación.
