export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    if( presupuesto / 4 > restante) {
        clase = 'danger';
    } else if( presupuesto / 2 > restante) {
        clase = 'warning';
    } else {
        clase = 'success';
    }
    return clase;

};