let sueldo, antiguedad;
        sueldo = parseFloat(prompt('Ingrese el sueldo del empleado'));
        antiguedad = parseInt(prompt('Ingrese la antigüedad del empleado'));
        if (sueldo < 500 && antiguedad >= 10) {
            document.write('Se le otorga un aumento del 20%');
            document.write('<br>');
            let sueldototal = sueldo + sueldo * 0.20;
            document.write('El sueldo total es:' + sueldototal);
        } else {
            if (sueldo < 500 && antiguedad < 10) {
                document.write('Se le otorga un aumento del 5%');
                document.write('<br>');
                let sueldototal = sueldo + sueldo * 0.05;
                document.write('El sueldo total es:' + sueldototal);
            } else {
                document.write('El sueldo queda sin cambios:' + sueldo);
            }
        }