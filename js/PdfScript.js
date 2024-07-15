document.getElementById('download-pdf').addEventListener('click', function () {
    var doc = new jspdf.jsPDF();
    html2canvas(document.getElementById('table-promedio')).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var imgWidth = 190; 
        var pageHeight = 295;  
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        var position = 10;

        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        doc.save('tabla_promedios.pdf');
    });
});