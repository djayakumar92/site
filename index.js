var data = [{ ID: 1, Name: 20201117, Date: new Date("2020/11/17"), Author: "" },
{ ID: 2, Name: 20201203, Date: new Date("2020/12/03"), Author: "" },
{ ID: 3, Name: 20210311, Date: new Date("2021/03/11"), Author: "" },
{ ID: 4, Name: 20220314, Date: new Date("2022/03/14"), Author: "" },
{ ID: 5, Name: 20220327, Date: new Date("2022/03/27"), Author: "" },
];

ej.grids.Grid.Inject(ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    width:'100%',
    height:'100%',
    autoFit: true,
    allowResizing: true,
    columns: [
                {
                    field: 'Name', headerText: 'வாக்கியம்', template:'#templateImg'
                },
                {
                    field: 'Date', headerText: 'தேதி', format: 'dd/MM/yyy', width: 150,
                },    
    ],
    });

grid.appendTo('#Grid');