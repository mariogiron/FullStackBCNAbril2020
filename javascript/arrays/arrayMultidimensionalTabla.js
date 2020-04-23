let aves = ['Águila', 'Guacamayo', 'Periquito', 'Colibrí'];
let felinos = new Array('Tigre', 'Leon', 'Gato');
let anfibios = ['Rana', 'Sapo', 'Salamandra'];

let zoo = [aves, felinos, anfibios];

/*

<table>
    <tr>
        <td>Águila</td>
        <td>Guacamayo</td>
        ...
    </tr>
    <tr>
        <td>Tigre</td>
        <td>León</td>
        <td>Gato</td>
    </tr>
    <tr>
        <td>Rana</td>
        <td>Sapo</td>
        <td>Salamandra</td>
    </tr>
</table>

*/

let totalHtml = '<table>';
for (let especie of zoo) {
    totalHtml += '<tr>';
    for (let animal of especie) {
        totalHtml += `<td>${animal}</td>`;
    }
    totalHtml += '</tr>';
}
totalHtml += '</table>';

// let totalHtml = '<table>';
// for (let i = 0; i < zoo.length; i++) {
//     totalHtml += '<tr>';
//     for (let j = 0; j < zoo[i].length; j++) {
//         totalHtml += `<td>${zoo[i][j]}</td>`;
//     }
//     totalHtml += '</tr>';
// }
// totalHtml += '</table>';

document.write(totalHtml);