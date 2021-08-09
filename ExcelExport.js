import React, { Component } from 'react';
import ReactExport from 'react-data-export';

const ExcelFile = ReactExport.ExcelFile;
var ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

function dateValidator(dataValue){
    if(new Date(dataValue) instanceof Date && !isNaN(new Date(dataValue).valueOf())){
    // Duration of a day in MilliSeconds
    const oneDay=1000 * 60 * 60 * 24;
    // Excel starts reading dates from 1900-1-1 and date parameter is our date which we are providing in string format as "2023-4-23"
    //excel reads dates as five digit numbers as difference in date given and 1900-1-1
    const differenceOfDays = Math.round(Math.abs((new Date("1900-1-1") -new Date(dataValue))/oneDay))+2;
    return differenceOfDays;
}
else{
    return dataValue;
}
}

const multiDataSet = [
    {
        columns: [
            {title: "Headings", width: {wpx: 80}},//pixels width 
            {title: "Dates", width: {wch: 40}},//char width 
            {title: "Colors", width: {wpx: 90}},
        ],
        data: [
            [
                {value: "H2", style: {font: {sz: "18", bold: true}}},
                {value: dateValidator("2020-5-5"),style:{numFmt:'m/d/yyyy'}},
                {value: "Blue", style: {fill: {patternType: "solid", fgColor: {rgb: "FF0000FF"}}}},
            ],
            [
                {value: "H2", style: {font: {sz: "18", bold: true}}},
                {value: dateValidator("2031-5-16"),style:{numFmt:'m/d/yyyy',fill: {patternType: "solid", fgColor: {rgb: "FF00FF00"}}}},
                {value: "Blue", style: {fill: {patternType: "solid", fgColor: {rgb: "FFFFC0CB"}}}},
            ],
            [
                {value: "H2", style: {font: {sz: "18", bold: true}}},
                {value: dateValidator("2031-6-18"),style:{numFmt:'m/d/yyyy'}},
                {value: "Blue", style: {fill: {patternType: "solid", fgColor: {rgb: "FFFFC0CB"}}}},
            ],
        ]
    }
];


export default class ExcelExport extends Component {
    render() {
        return (
            <div>
                 <ExcelFile element={<button>Download Data With Styles</button>}>
                    <ExcelSheet dataSet={multiDataSet} name="Organization"/>
                </ExcelFile>
            </div>
        )
    }
}
