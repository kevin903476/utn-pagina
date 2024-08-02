       
document.getElementById('download-pdf').addEventListener('click', function () {
    var { jsPDF } = window.jspdf;
    var doc = new jsPDF();
    doc.autoTable({ html: '#table-promedio' });
    doc.save('tabla_promedios.pdf');
});

