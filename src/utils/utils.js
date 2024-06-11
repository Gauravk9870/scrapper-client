import { saveAs } from 'file-saver';


export const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => Object.values(row).join(',')).join('\n');
    return `${headers}\n${rows}`;
};

export const handleExport = (data, selectedRows) => {
    const selectedData = data.filter(item => selectedRows.includes(item.id));
    const csvData = convertToCSV(selectedData);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'data.csv');
};